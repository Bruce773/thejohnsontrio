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
              src="https://ik.imagekit.io/3aek1kxt2/possibleLogo2.jpg?tr=w-200"
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
