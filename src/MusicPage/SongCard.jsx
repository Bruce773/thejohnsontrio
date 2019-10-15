import React from 'react';
import Card from '@material-ui/core/Card';
import { Title } from './elements.jsx';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const IframeStyles = styled.div`
  iframe {
    ${breakpoint('mobile')`
      border-width: 0;
      height: 100%;
      left: 0;
      top: 0;
      height: 322px;
      width: 470px;
    `}
    ${breakpoint('tablet')`
      width: 560px;
      height: 315px;
    `}
  }
`;

export const SongCard = ({ title, description, songUrl }) => (
  <Card>
    <Title>{title}</Title>
    <Divider />
    <Box p={{ md: '36px', xs: '8px' }}>
      <Grid container>
        <Grid item lg={6} style={{ margin: 'auto' }}>
          <Box pb={{ xs: '15px', lg: 'auto' }}>
            <div
              style={{ fontSize: '20px' }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Box>
        </Grid>
        <Grid item lg={6} style={{ margin: 'auto' }}>
          <Box
            style={{
              paddingTop: '2%',
            }}
          >
            <IframeStyles>
              <div dangerouslySetInnerHTML={{ __html: `${songUrl}` }} />
            </IframeStyles>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Card>
);
