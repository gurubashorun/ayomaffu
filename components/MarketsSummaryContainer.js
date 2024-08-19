import PropTypes from 'prop-types';
import { useState } from 'react';
import { useQuery } from 'react-query';
import MarketsSummary from './MarketsSummary';
import fetchMarketsSummaryData from './lib/fetchMarketsSummaryData';

const MarketsSummaryContainer = ({ qty, ...props }) => {
  const [sortProperty, setSortProperty] = useState('VOLUME_QUOTE_24H');

  const { isLoading: loading, data: marketsSummaryData = [] } = useQuery(
    ['marketsSummary', sortProperty],
    () => {
      return fetchMarketsSummaryData({ limit: qty, sortProperty });
    }
  );

  return (
    <MarketsSummary
      {...props}
      loading={loading}
      marketsSummaryData={marketsSummaryData}
      sortProperty={sortProperty}
      qty={qty}
      setSortProperty={setSortProperty}
    />
  );
};

MarketsSummaryContainer.propTypes = {
  qty: PropTypes.number.isRequired,
};

export default MarketsSummaryContainer;
