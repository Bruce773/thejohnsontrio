import React from 'react';
import { BandCategoriesSection } from './elements.jsx';
import { Carousel } from '../Carousel';
import { PageContentGetter } from '../PageContentGetter';

export const HomePage = () => (
  <PageContentGetter contentId="homepageImageBanner">
    {({ pageData, isLoading }) => (
      <>
        <BandCategoriesSection>
          Bluegrass, Folk, Jazz, Blues, Pop
        </BandCategoriesSection>
        {!isLoading && <Carousel items={pageData[0].fields.imagesUrls} />}
      </>
    )}
  </PageContentGetter>
);
