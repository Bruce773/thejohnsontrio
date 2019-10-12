import React from 'react';
import { Typography, Divider, Container, Box } from '@material-ui/core';

export const Footer = () => (
  <Container maxWidth="lg">
    <Box pt={5} textAlign="center">
      <Divider />
      <Typography pt={4} style={{ fontSize: '2vh' }}>
        Copyright 2019 © Concordia Music Group
      </Typography>
    </Box>
  </Container>
);
