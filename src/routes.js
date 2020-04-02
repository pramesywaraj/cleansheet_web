import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useStore } from './context/store';

// The pages
import LandingPage from './pages/LandingPage/LandingPage';
import ServicesPage from './pages/Services/ServicesPage';
import ProductPage from './pages/Products/ProductPage';
import AuthPage from './pages/Auth/AuthPage';
import CartPage from './pages/CartPage/CartPage';

import Layout from './components/Layout/Layout';
import Loading from './components/Loading/Loading';
import Interceptors from './components/Interceptors';

import useSnackbar from './hooks/useSnackbar';
import Snackbar from './components/Snackbars/Snackbar';
import ConfirmationDialog from './components/Dialog/ConfirmationDialog';

function PrivateRoutes({ component: Component }) {
  const { state } = useStore();
  const { isLoggedIn } = state;
  const [openSnackbar] = useSnackbar();

  function RedirectToLogin() {
    openSnackbar('info', 'Silahkan login terlebih dahulu.');
    return <Redirect to={{ pathname: '/login' }} />;
  }

  return (
    <Route
      render={props =>
        isLoggedIn ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <RedirectToLogin />
        )}
    />
  );
}

function Routes() {
  const firstLoad = useRef(true);
  const [isChecking, setIsChecking] = useState(true);
  const { state, dispatch } = useStore();
  const {
    snackbarOpen,
    snackbarMessage,
    snackbarType,
    dialogOpen,
    dialogTitle,
    dialogCaption,
    dialogOnConfirm,
    dialogOnLoad,
  } = state;

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      const userData = Cookies.getJSON('@userData') ? Cookies.getJSON('@userData') : null;
      if (userData) {
        dispatch({ type: 'USER_LOGGED_IN', data: userData });
      }

      setIsChecking(false);
    }
  }, []);

  function closeDialogHandler() {
    dispatch({ type: 'DIALOG_PROCESS_DONE' });
  }

  if (isChecking) {
    return <Loading />;
  }

  return (
    <Router>
      <Interceptors />
      <ConfirmationDialog
        show={dialogOpen}
        title={dialogTitle}
        caption={dialogCaption}
        isLoading={dialogOnLoad}
        onConfirm={dialogOnConfirm}
        closeDialog={closeDialogHandler}
      />
      <Snackbar type={snackbarType} message={snackbarMessage} isShow={snackbarOpen} />
      <Switch>
        <Route exact path="/">
          <Layout>
            <LandingPage />
          </Layout>
        </Route>
        <Route path="/layanan">
          <Layout>
            <ServicesPage />
          </Layout>
        </Route>
        <Route path="/produk">
          <Layout>
            <ProductPage />
          </Layout>
        </Route>
        <PrivateRoutes path="/keranjang" component={CartPage} />

        <Route path="/login" component={AuthPage} />
        <Route path="/register" component={AuthPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
