import React from 'react';
import { NavWrapper, NavItem } from './elements.jsx';

export const Navbar = () => (
  <NavWrapper>
    <img
      style={{ maxHeight: '63px', minHeight: '5vw' }}
      src="https://elasticbeanstalk-us-east-2-555764942973.s3.us-east-2.amazonaws.com/possibleLogo2.jpg"
    />
    <NavItem>Home</NavItem>
  </NavWrapper>
);
