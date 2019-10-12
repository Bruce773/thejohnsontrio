import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

export const Avatar = ({ src }) => (
  <IconButton style={{ margin: 'auto' }}>
    <Box height={{ xs: '280px' }} width="auto">
      <img style={{ height: 'inherit', borderRadius: '50%' }} src={src} />
    </Box>
  </IconButton>
);
