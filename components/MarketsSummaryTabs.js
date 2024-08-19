import Button from '@ngin-io/components/public/components/Button/Button.js';
import Label from '@ngin-io/components/public/components/Label/Label.js';
import PropTypes from 'prop-types';

const MarketsSummaryTab = ({
  setSortProperty,
  sortProperty,
  sortPropertyValue,
  ...props
}) => {
  return (
    <Label
      {...props}
      as={Button}
      variant="medium"
      onClick={() => {
        return setSortProperty(sortPropertyValue);
      }}
      css={[
        {
          padding: 2,
          borderWidth: 0,
          lineHeight: 1,
        },
        sortProperty === sortPropertyValue && {
          fontWeight: 'bold',
        },
      ]}
    />
  );
};

MarketsSummaryTab.propTypes = {
  sortProperty: PropTypes.oneOf(['VOLUME_QUOTE_24H', 'PRICE_PERCENT_24H_ABS'])
    .isRequired,
  sortPropertyValue: PropTypes.string.isRequired,
  setSortProperty: PropTypes.func.isRequired,
};

const MarketsSummaryTabs = ({
  loading,
  sortProperty,
  setSortProperty,
  ...props
}) => {
  const sharedTabProps = {
    disabled: loading,
    sortProperty,
    setSortProperty,
  };
  return (
    <div
      {...props}
      css={{
        display: 'flex',
        justifyContent: 'center',
        gap: 3,
        height: '6.4rem', // Maintain consistent top offset
      }}
    >
      <MarketsSummaryTab
        {...sharedTabProps}
        sortPropertyValue="VOLUME_QUOTE_24H"
      >
        Most Popular
      </MarketsSummaryTab>
      <MarketsSummaryTab
        {...sharedTabProps}
        sortPropertyValue="PRICE_PERCENT_24H_ABS"
      >
        Top Movers
      </MarketsSummaryTab>
    </div>
  );
};

MarketsSummaryTabs.propTypes = {
  loading: PropTypes.bool,
  sortProperty: PropTypes.oneOf(['VOLUME_QUOTE_24H', 'PRICE_PERCENT_24H_ABS'])
    .isRequired,
  setSortProperty: PropTypes.func.isRequired,
};

export default MarketsSummaryTabs;
