import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './global.module.scss';

// The pages
import LandingPage from './pages/landing_page/landingPage';
import LoginPage from './pages/login/login';

import Layout from './components/layout/layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/" component={LandingPage} />
          </Layout>
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
