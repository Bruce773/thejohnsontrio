import React from 'react';
import { Navbar } from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DevTodo } from './GlobalComponents';

export const App = () => (
  <Router>
    <Navbar />
    <div style={{ textAlign: 'center' }}>
      <Switch>
        <Route path="/">
          <DevTodo>Add homepage hero banner</DevTodo>
        </Route>
      </Switch>
    </div>
  </Router>
);
