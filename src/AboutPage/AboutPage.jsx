import React from 'react';
import { Avatar } from './Avatar.jsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const BiosInfo = [
  {
    imageUrl:
      'https://elasticbeanstalk-us-east-2-555764942973.s3.us-east-2.amazonaws.com/Bruce_headshot_square.jpg',
    name: 'Bruce Johnson',
    bio:
      "Bruce has been playing music since he was 8 years old when he began taking piano lessons from his mom. At the age of 12, he began learning guitar from local musician Shawn Caden. Shawn's teaching style focuses heavily on the theory side of music and teaches people how to apply that theory to any instrument they feel inclined to learn. Shawn also taught Bruce piano, bass guitar, upright bass, and violin. Bruce began taking private violin lessons from a professional local violinist, Kimberly Protzman, during the summer of 2017. He plays with several different bluegrass bands and groups and enjoys finding new places where he and his brother can share their music. Bruce also enjoys computer programming and is going to college for Computer Science. He plans to eventually go on to study software engineering.",
  },
  {
    imageUrl:
      'https://elasticbeanstalk-us-east-2-555764942973.s3.us-east-2.amazonaws.com/Jacob_headshot_square.JPG',
    name: 'Jacob Johnson',
    bio:
      'Jacob started learning to play clarinet when he was 9 years old. He was taught by Dave Figura who owns DNF Brass & Woodwind music store in Honesdale, then later by Sue Apgar. Jacob has played in the NEPA Homeschool Band conducted by retired band director Ray Stedenfeld for 4 years. And was also accepted into the Marywood honors band of 2017 and 2018. Jacob learned the basics of bass guitar from Bruce in early 2018 and was the bass guitar player during their performance at Irving Cliff Brewery in February  2018. He also began learning the fundamentals of drums from Shawn Caden later on in the same year. Jacob enjoys cooking and wants to be a chef after high school.',
  },
];

export const AboutPage = () => (
  <Container maxWidth="md">
    {BiosInfo.map(({ imageUrl, name, bio }) => (
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Avatar src={imageUrl} />
          <Typography>{name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{bio}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ))}
  </Container>
);
