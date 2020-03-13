import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// The pages
import LandingPage from './pages/LandingPage/LandingPage';
import ServicesPage from './pages/Services/ServicesPage';
import ProductPage from './pages/Products/ProductPage';
import AuthPage from './pages/Auth/AuthPage';

import Layout from './components/Layout/Layout';

import { useStore } from './context/store';
import Snackbar from './components/Snackbars/Snackbar';

function Routes() {
  const { state } = useStore();
  const { snackbarOpen, snackbarMessage, snackbarType } = state;
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
        <Route path="/login" component={AuthPage} />
        <Route path="/register" component={AuthPage} />
      </Switch>
      <Snackbar type={snackbarType} message={snackbarMessage} isShow={snackbarOpen} />
    </Router>
  );
}

export default Routes;
