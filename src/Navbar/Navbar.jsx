import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Button } from '@material-ui/core';
import { Link } from '../GlobalComponents';

export const Navbar = () => {
  return (
    <AppBar
      style={{ backgroundColor: 'white', padding: '0px' }}
      position="static"
    >
      <Toolbar style={{ color: 'green' }}>
        <Link to="/">
          <IconButton style={{ padding: '4px' }}>
            <img
              style={{
                maxHeight: '63px',
                minHeight: '5vw',
                borderRadius: '10px',
              }}
              src="https://elasticbeanstalk-us-east-2-555764942973.s3.us-east-2.amazonaws.com/possibleLogo2.jpg"
            />
          </IconButton>
        </Link>
        <Link to="/about">
          <Button color="inherit">About</Button>
        </Link>
        <Button color="inherit">Music</Button>
      </Toolbar>
    </AppBar>
  );
};
