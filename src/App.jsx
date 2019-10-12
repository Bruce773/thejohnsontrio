import React from 'react';
import { Navbar } from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';

export const App = () => (
  <Router>
    <Navbar />
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/about/" render={() => <AboutPage />} />
      </Switch>
    </div>
  </Router>
);
