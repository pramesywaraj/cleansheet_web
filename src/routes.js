import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

// The pages
import LandingPage from './pages/LandingPage/LandingPage';
import ServicesPage from './pages/Services/ServicesPage';
import ProductPage from './pages/Products/ProductPage';
import AuthPage from './pages/Auth/AuthPage';
import CartPage from './pages/CartPage/CartPage';

import Layout from './components/Layout/Layout';

import { useStore } from './context/store';
import Snackbar from './components/Snackbars/Snackbar';

function PrivateRoutes({ component: Component, ...rest }) {
  const { state } = useStore();
  const { isLoggedIn } = state;

  return (
    <Route
      {...rest}
      render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
}

function Routes() {
  const firstLoad = useRef(true);

  const { state, dispatch } = useStore();
  const { snackbarOpen, snackbarMessage, snackbarType } = state;

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      const userData = Cookies.getJSON('@userData') ? Cookies.getJSON('@userData') : null;
      if (userData) {
        dispatch({ type: 'USER_LOGGED_IN', data: userData });
      }
    }
  });

  return (
    <Router>
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
        <PrivateRoutes
          path="/keranjang"
          component={
            <Layout>
              <CartPage />
            </Layout>
          }
        />

        <Route path="/login" component={AuthPage} />
        <Route path="/register" component={AuthPage} />
      </Switch>
      <Snackbar type={snackbarType} message={snackbarMessage} isShow={snackbarOpen} />
    </Router>
  );
}

export default Routes;
