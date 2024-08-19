import Label from '@ngin-io/components/public/components/Label/Label.js';
import darkColorMode from 'mystical/darkColorMode.js';
import PropTypes from 'prop-types';

const MarketsSummaryTableStructure = ({ tbodyRows, theadRow, ...props }) => {
  return (
    <table
      {...props}
      css={{
        width: '100%',
        borderCollapse: 'collapse',
        whiteSpace: 'nowrap',
        textAlign: 'left',
        th: {
          fontWeight: 'normal',
        },
        'th, td': {
          paddingTop: 3,
          paddingBottom: 3,
          paddingLeft: [3, , 4],
          paddingRight: [3, , 4],
        },
        tr: {
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: 'zinc.100',
          [darkColorMode]: {
            borderBottomColor: 'zinc.700',
          },
        },
      }}
    >
      <thead
        css={{
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          borderTopColor: 'zinc.100',
          [darkColorMode]: {
            borderTopColor: 'zinc.700',
          },
        }}
      >
        <tr>
          <Label as="th" variant="medium">
            {theadRow.asset}
          </Label>
          <Label as="th" variant="medium">
            {theadRow.lastPrice}
          </Label>
          <Label as="th" variant="medium">
            {theadRow.changePercentage}
          </Label>
          <Label as="th" variant="medium">
            {theadRow.marketCap}
          </Label>
          <th />
        </tr>
      </thead>
      <tbody
        css={{
          td: {
            verticalAlign: 'middle',
            '> div': {
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            },
          },
        }}
      >
        {tbodyRows}
      </tbody>
    </table>
  );
};

MarketsSummaryTableStructure.propTypes = {
  tbodyRows: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  theadRow: PropTypes.shape({
    asset: PropTypes.node.isRequired,
    changePercentage: PropTypes.node.isRequired,
    lastPrice: PropTypes.node.isRequired,
    marketCap: PropTypes.node.isRequired,
  }).isRequired,
};

export default MarketsSummaryTableStructure;
