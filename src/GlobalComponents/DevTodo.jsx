import React from 'react';

export const DevTodo = ({ children }) => (
  <div style={{ color: 'red', fontSize: '20px', textDecoration: 'bold' }}>
    TODO: {children}
  </div>
);
