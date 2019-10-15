import React from 'react';
import { BandCategoriesSection } from './elements.jsx';
import { Carousel } from '../Carousel';
import { PageContentGetter } from '../PageContentGetter';
import Divider from '@material-ui/core/Divider';

export const HomePage = () => (
  <PageContentGetter contentId="homepageImageBanner">
    {({ pageData, isLoading }) => (
      <>
        <BandCategoriesSection>
          Bluegrass, Folk, Jazz, Blues, Pop
        </BandCategoriesSection>
        <Divider style={{ padding: '4px' }} />
        {!isLoading && <Carousel items={pageData[0].fields.imagesUrls} />}
      </>
    )}
  </PageContentGetter>
);
