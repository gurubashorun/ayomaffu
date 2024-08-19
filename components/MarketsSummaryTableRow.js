import PropTypes from 'prop-types';

const MarketsSummaryTableRow = ({
  icon,
  asset,
  button,
  changePercentage,
  lastPrice,
  marketCap,
  ...props
}) => {
  return (
    <tr {...props}>
      <td>
        <div>
          {icon}
          {asset}
        </div>
      </td>
      <td>{lastPrice}</td>
      <td>{changePercentage}</td>
      <td>{marketCap}</td>
      <td>
        <div css={{ justifyContent: 'flex-end' }}>{button}</div>
      </td>
    </tr>
  );
};

MarketsSummaryTableRow.propTypes = {
  icon: PropTypes.node.isRequired,
  asset: PropTypes.node.isRequired,
  button: PropTypes.node.isRequired,
  changePercentage: PropTypes.node.isRequired,
  lastPrice: PropTypes.node.isRequired,
  marketCap: PropTypes.node,
};

export default MarketsSummaryTableRow;
