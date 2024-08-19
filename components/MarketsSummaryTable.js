import PropTypes from 'prop-types';
import MarketsSummaryTableLoading from './MarketsSummaryTableLoading';
import MarketsSummaryTableView from './MarketsSummaryTableView';

const MarketsSummaryTable = ({ loading, qty, ...props }) => {
  if (loading) {
    return <MarketsSummaryTableLoading qty={qty} />;
  }

  return <MarketsSummaryTableView {...props} />;
};

MarketsSummaryTable.propTypes = {
  loading: PropTypes.bool,
  qty: PropTypes.number.isRequired,
};

export default MarketsSummaryTable;
