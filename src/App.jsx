import React from 'react';
import { MainHeader } from './elements.jsx';
import { DevTodo } from './GlobalComponents';
import { Navbar } from './Navbar';

export const App = () => (
  <>
    <Navbar />
    <div style={{ textAlign: 'center' }}>
      <DevTodo>Add Johnson Trio logo here</DevTodo>
      <MainHeader>The Johnson Trio</MainHeader>
    </div>
  </>
);
