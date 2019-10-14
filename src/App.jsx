import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { Footer } from './Footer';

export const App = () => {
  const [siteData, setSiteData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const contentful = require('contentful');

  const client = contentful.createClient({
    space: 'tq1ymy4bdabw',
    accessToken: '5boHiPpe7wLhf9h8uVqUdwo31p2HDQ26VaOd_ABbf-4',
  });

  useEffect(() => {
    client
      .getEntries({ order: 'sys.createdAt' })
      .then(({ items }) => {
        console.log(items);
        setSiteData(items);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <Router>
      <Navbar />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route
            path="/about/"
            render={() => (
              <AboutPage isLoading={isLoading} siteData={siteData} />
            )}
          />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};
