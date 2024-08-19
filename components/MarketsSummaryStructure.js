import Scrollbar from '@ngin-io/components/public/components/Scrollbar/Scrollbar.js';
import darkColorMode from 'mystical/darkColorMode.js';
import PropTypes from 'prop-types';

export const offset = 5;

const MarketsSummaryStructure = ({
  marketsSummaryTabs,
  marketsSummaryTable,
  marketsSummaryViewAllMarkets,
  ...props
}) => {
  return (
    <div
      {...props}
      css={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        zIndex: 0,
      }}
    >
      <div
        css={{
          // This div will sit over the top of the white background.
          // It will remain centered to the page.
          display: 'flex',
          alignSelf: 'center',
          marginBottom: -(offset + 1),
          position: 'relative',
          zIndex: 1,
        }}
      >
        {marketsSummaryTabs}
      </div>
      <Scrollbar overflowEffect="mask" showScrollbar={false}>
        <div
          className="outer"
          css={{
            // Padding ensures shadow is always visible.
            flexGrow: 1,
            paddingTop: offset,
            paddingBottom: offset,
            paddingLeft: [3, , 4],
            paddingRight: [3, , 4],
          }}
        >
          <div
            css={{
              // maxWidth to ensure alignment with page content.
              width: '100%',
              maxWidth: 'content.wide',
              display: 'flex',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <div
              className="inner"
              css={{
                minWidth: '100%',
                flexShrink: 0,
                paddingTop: offset,
                paddingBottom: offset,
                // Background will "overflow" if wider than the page.
                backgroundColor: 'white',
                [darkColorMode]: {
                  backgroundColor: 'zinc.800',
                },
                borderRadius: 3,
                boxShadow: 100,
              }}
            >
              {marketsSummaryTable}
            </div>
          </div>
        </div>
      </Scrollbar>
      <div
        css={{
          // This div will sit over the bottom of the white background.
          // It will remain centered to the page.
          display: 'flex',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          marginTop: -(offset + 1),
          padding: 3,
        }}
      >
        {marketsSummaryViewAllMarkets}
      </div>
    </div>
  );
};

MarketsSummaryStructure.propTypes = {
  marketsSummaryTabs: PropTypes.node.isRequired,
  marketsSummaryTable: PropTypes.node.isRequired,
  marketsSummaryViewAllMarkets: PropTypes.node.isRequired,
};

export default MarketsSummaryStructure;
