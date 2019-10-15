import React, { useState, useEffect } from 'react';

export const PageContentGetter = ({ contentId, children }) => {
  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const contentful = require('contentful');

  const client = contentful.createClient({
    space: 'tq1ymy4bdabw',
    accessToken: '5boHiPpe7wLhf9h8uVqUdwo31p2HDQ26VaOd_ABbf-4',
  });

  useEffect(() => {
    client
      .getEntries({
        order: 'sys.createdAt',
        content_type: contentId,
      })
      .then(({ items }) => {
        setPageData(items);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  return <>{children({ pageData, isLoading })}</>;
};
