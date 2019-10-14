import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

export const AboutCardPlaceholder = () => (
  <ExpansionPanel>
    <ExpansionPanelSummary>
      <>
        <Skeleton width="100%" height="280px">
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box paddingLeft="10%" textAlign="center">
                <Skeleton
                  height={{ xs: '280px' }}
                  width="258px"
                  height="253px"
                  style={{
                    borderRadius: '50%',
                  }}
                />
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box margin="auto" pt={13} pl={16}>
                <Skeleton width="180px" height="26px" />
              </Box>
            </Grid>
          </Grid>
        </Skeleton>
      </>
    </ExpansionPanelSummary>
  </ExpansionPanel>
);
