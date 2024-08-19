// ignore unused exports

import { DefaultSeo } from 'next-seo';
import PropTypes from 'prop-types';
import React from 'react';
import AppContainer from '../components/AppContainer';
import FBPixel from '../components/FBPixel';
import GlobalHeadTags from '../components/GlobalHeadTags';
import { defaultMetaTags } from '../config/defaultMetaTags';

const App = ({ Component, pageProps: initialPageProps, err }) => {
  const { ...pageProps } = initialPageProps;

  return (
    <React.Fragment>
      <GlobalHeadTags />
      <DefaultSeo {...defaultMetaTags} />
      <FBPixel />
      <AppContainer>
        <Component {...pageProps} err={err} />
      </AppContainer>
    </React.Fragment>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
  err: PropTypes.object,
};

export default App;
