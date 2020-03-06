import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './global.module.scss';

// The pages
import LandingPage from './pages/LandingPage/LandingPage';
import ServicesPage from './pages/Services/ServicesPage';
import AuthPage from './pages/Auth/AuthPage';

import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
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
          <Route path="/login" component={AuthPage} />
          <Route path="/register" component={AuthPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
