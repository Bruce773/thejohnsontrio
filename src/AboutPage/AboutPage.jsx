import React from 'react';
import { Container } from '@material-ui/core';
import { AboutCardPlaceholder } from './AboutCardPlaceholder.jsx';
import { AboutPageCard } from './AboutPageCard.jsx';
import { PageContentGetter } from '../PageContentGetter';

export const AboutPage = () => (
  <Container maxWidth="md">
    <PageContentGetter contentId="bandMember">
      {({ pageData, isLoading }) =>
        !isLoading
          ? pageData.map((data) => {
              const {
                fields: {
                  fullName,
                  headshotUrl,
                  bio: { content },
                },
              } = data;
              const bio = content[0].content[0].value;
              return (
                <AboutPageCard
                  bio={bio}
                  fullName={fullName}
                  headshotUrl={headshotUrl}
                />
              );
            })
          : [1, 2, 3, 4].map(() => <AboutCardPlaceholder />)
      }
    </PageContentGetter>
  </Container>
);
