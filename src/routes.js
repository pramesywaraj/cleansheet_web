import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// The pages
import LandingPage from './pages/LandingPage/LandingPage';
import ServicesPage from './pages/Services/ServicesPage';
import ProductPage from './pages/Products/ProductPage';
import AuthPage from './pages/Auth/AuthPage';

import Layout from './components/Layout/Layout';

function Routes() {
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
    </Router>
  );
}

export default Routes;
