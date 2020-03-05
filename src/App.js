import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './global.module.scss';

// The pages
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/Login/Login';

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
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
