import React from 'react';
import { Avatar } from './Avatar.jsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { BioHeader } from './elements.jsx';
import { AboutCardPlaceholder } from './AboutCardPlaceholder.jsx';

export const AboutPage = ({ siteData, isLoading }) => (
  <Container maxWidth="md">
    {siteData[0] && siteData[0].fields && !isLoading
      ? siteData.map((data) => {
          const {
            fields: {
              fullName,
              headshotUrl,
              bio: { content },
            },
          } = data;
          const bio = content[0].content[0].value;
          return (
            <ExpansionPanel>
              <ExpansionPanelSummary>
                <Grid container>
                  <Grid item md={6} xs={12}>
                    <Avatar src={headshotUrl} />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <BioHeader>{fullName}</BioHeader>
                  </Grid>
                </Grid>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography
                  style={{ fontSize: '20px' }}
                  dangerouslySetInnerHTML={{
                    __html: bio,
                  }}
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })
      : [1, 2, 3, 4].map(() => <AboutCardPlaceholder />)}
  </Container>
);
