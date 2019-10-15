import React from 'react';
import { PageContentGetter } from '../PageContentGetter';
import { SongCard } from './SongCard.jsx';
import { Container } from '@material-ui/core';

export const MusicPage = () => (
  <Container maxWidth="lg">
    <PageContentGetter contentId="songPost">
      {({ isLoading, pageData }) =>
        !isLoading &&
        pageData.map(({ fields: { title, description, songUrl } }) => (
          <SongCard
            title={title}
            description={description.content[0].content[0].value}
            songUrl={songUrl}
          />
        ))
      }
    </PageContentGetter>
  </Container>
);
