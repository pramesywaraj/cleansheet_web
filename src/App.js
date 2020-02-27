import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './global.module.scss';

// The pages
import LandingPage from './pages/landing_page/landingPage';
import LoginPage from './pages/login/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
