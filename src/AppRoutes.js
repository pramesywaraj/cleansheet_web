import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useStore } from './context/store';

// The pages
import LandingPage from './pages/LandingPage/LandingPage';
import ServicesPage from './pages/Services/ServicesPage';
import ProductPage from './pages/Products/ProductPage';
import AuthPage from './pages/Auth/AuthPage';
import CartPage from './pages/CartPage/CartPage';
import TransactionPage from './pages/Transaction/TransactionPage';

import Layout from './components/layout/layout';
import Loading from './components/Loading/Loading';
import Interceptors from './components/Interceptors';

import useSnackbar from './hooks/useSnackbar';
import Snackbar from './components/Snackbars/Snackbar';
import ConfirmationDialog from './components/Dialog/ConfirmationDialog';

function PrivateRoutes({ children }) {
  const { state } = useStore();
  const { isLoggedIn } = state;
  const [openSnackbar] = useSnackbar();

  function redirectToLogin() {
    openSnackbar('info', 'Silahkan login terlebih dahulu.');
    return <Navigate to='/login' replace />;
  }
  
  if (!isLoggedIn) return redirectToLogin();

  return (
    <Layout>
      {children}
    </Layout>
  );
}

function AppRoutes() {
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
      const userData = Cookies?.get('@userData') ? Cookies.get('@userData') : null;
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
    return (
      <div
        style={{
          display: 'flex',
          height: '100vh',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loading />
      </div>
    );
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
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <Layout>
              <LandingPage />
            </Layout>
          )}
        />
        <Route
          path="/layanan"
          element={(
            <Layout>
              <ServicesPage />
            </Layout>
          )}
        />
        <Route
          path="/produk"
          element={(
            <Layout>
              <ProductPage />
            </Layout>
          )}
        />
        
        <Route path="/keranjang" element={(
          <PrivateRoutes>
            <CartPage />
          </PrivateRoutes>
        )} />
        
        <Route path="/transaksi" element={(
          <PrivateRoutes>
            <TransactionPage />
          </PrivateRoutes>
        )} />

        <Route path="/login" element={(
          <AuthPage />
        )} />
        <Route path="/register" element={(
          <AuthPage />
        )} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
