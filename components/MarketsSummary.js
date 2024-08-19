import PropTypes from 'prop-types';
import MarketsSummaryStructure from './MarketsSummaryStructure';
import MarketsSummaryTable from './MarketsSummaryTable';
import MarketsSummaryTabs from './MarketsSummaryTabs';
import MarketsSummaryViewAllMarkets from './MarketsSummaryViewAllMarkets';

const MarketsSummary = ({
  loading,
  marketsSummaryData,
  sortProperty,
  qty,
  setSortProperty,
  ...props
}) => {
  return (
    <MarketsSummaryStructure
      {...props}
      marketsSummaryTabs={
        <MarketsSummaryTabs
          loading={loading}
          sortProperty={sortProperty}
          setSortProperty={setSortProperty}
        />
      }
      marketsSummaryTable={
        <MarketsSummaryTable
          loading={loading}
          marketsSummaryData={marketsSummaryData}
          qty={qty}
        />
      }
      marketsSummaryViewAllMarkets={<MarketsSummaryViewAllMarkets />}
    />
  );
};

MarketsSummary.propTypes = {
  loading: PropTypes.bool,
  marketsSummaryData: PropTypes.array.isRequired,
  sortProperty: PropTypes.oneOf(['VOLUME_QUOTE_24H', 'PRICE_PERCENT_24H_ABS'])
    .isRequired,
  qty: PropTypes.number.isRequired,
  setSortProperty: PropTypes.func.isRequired,
};

export default MarketsSummary;
