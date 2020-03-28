import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

// The pages
import LandingPage from './pages/LandingPage/LandingPage';
import ServicesPage from './pages/Services/ServicesPage';
import ProductPage from './pages/Products/ProductPage';
import AuthPage from './pages/Auth/AuthPage';
import CartPage from './pages/CartPage/CartPage';

import Layout from './components/Layout/Layout';
import Loading from './components/Loading/Loading';

import { useStore } from './context/store';
import useSnackbar from './hooks/useSnackbar';
import Snackbar from './components/Snackbars/Snackbar';

function PrivateRoutes({ component: Component }) {
  const { state } = useStore();
  const { isLoggedIn } = state;
  const [openSnackbar] = useSnackbar();

  function RedirectToLogin() {
    openSnackbar(
      'info',
      'Mohon untuk melakukan login ke dalam aplikasi terlebih dahulu untuk mengakses bagian ini.',
    );
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
        )
      }
    />
  );
}

function Routes() {
  const firstLoad = useRef(true);
  const [isChecking, setIsChecking] = useState(true);
  const { state, dispatch } = useStore();
  const { snackbarOpen, snackbarMessage, snackbarType } = state;

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      const userData = Cookies.getJSON('@userData') ? Cookies.getJSON('@userData') : null;
      if (userData) {
        dispatch({ type: 'USER_LOGGED_IN', data: userData });
      }

      setIsChecking(false);
    }
  });

  if (isChecking) {
    return <Loading />;
  }

  return (
    <Router>
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
