// ignore unused exports

/* eslint-disable react/display-name,react/prop-types */

import { NextSeo } from 'next-seo';
import { Fragment } from 'react';
import MarketsSummaryContainer from '../components/MarketsSummaryContainer';
import IndexPage from '../components/pages/indexPage';
// import { postsQuery } from '../lib/sanity/queries/post';
//i can't find this file
//import { sanityClient } from '../lib/sanity/sanity.server';

// ? Reference: https://www.npmjs.com/package/next-seo
const title = 'Bitcoin Exchange Australia | Buy BTC With AUD | BTC Markets';

const description = `Buy & sell cryptocurrencies in AUD with BTC Markets, Australia's Largest & most trusted cryptocurrency exchange. 100% Australian-owned & operated.`;
const metaTags = {
  title,
  description,
  canonical: 'https://www.btcmarkets.net/',
  openGraph: {
    title,
    description,
  },
};

const Index = (props) => {
  return (
    <Fragment>
      <NextSeo {...metaTags} />
      <IndexPage MarketsSummary={MarketsSummaryContainer} {...props} />
    </Fragment>
  );
};

export default Index;

// const getStaticProps = async () => {
//   const articles = await sanityClient.fetch(postsQuery);

//   return {
//     props: {
//       articles,
//     },
//   };
// };

// export { getStaticProps };


