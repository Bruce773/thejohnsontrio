import React from 'react';
import { Navbar } from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { Footer } from './Footer';
import { MusicPage } from './MusicPage';

export const App = () => (
  <Router>
    <Navbar />
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/about/" render={() => <AboutPage />} />
        <Route path="/music/" render={() => <MusicPage />} />
      </Switch>
    </div>
    <Footer />
  </Router>
);
