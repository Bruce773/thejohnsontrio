import React, { useState } from 'react';
import { Avatar } from './Avatar.jsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { BioHeader } from './elements.jsx';

export const AboutPageCard = ({ bio, fullName, headshotUrl }) => {
  const [readMoreLabel, setReadMoreLabel] = useState(true);

  return (
    <ExpansionPanel
      onChange={() => {
        setReadMoreLabel(!readMoreLabel);
      }}
    >
      <ExpansionPanelSummary>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Avatar src={headshotUrl} />
          </Grid>
          <Grid item md={6} xs={12}>
            <BioHeader>
              {fullName}
              {readMoreLabel && (
                <>
                  <br />
                  <div style={{ fontSize: '20px' }}>(Read More)</div>
                </>
              )}
            </BioHeader>
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
};
