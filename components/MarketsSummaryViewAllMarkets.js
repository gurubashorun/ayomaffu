import IconArrow from '@ngin-io/components/public/components/Icons/IconArrow.js';
import Label from '@ngin-io/components/public/components/Label/Label.js';
import darkColorMode from 'mystical/darkColorMode.js';
// import assetsData from '../data/assets.json';
import Image from './Image';
import Link from './Link';

const VIEW_ALL_MARKETS_ICONS = ['BTC', 'ETH', 'XRP', 'USDT'];

// const iconAssets = assetsData.edges
//   .filter((asset) => {
//     return VIEW_ALL_MARKETS_ICONS.some((assetName) => {
//       return assetName === asset.node.assetName;
//     });
//   })
//   .map((assets) => {
//     return assets.node;
//   });

const MarketsSummaryViewAllMarkets = (props) => {
  return (
    <Label
      {...props}
      as={Link}
      variant="large"
      href="/prices"
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        gap: 2,
        paddingLeft: 3,
        paddingTop: 1,
        paddingBottom: 1,
      }}
    >
      {/* {iconAssets.map(({ assetName, icon }) => {
        return (
          <span
            key={assetName}
            css={{
              display: 'flex',
              marginLeft: -3,
              position: 'relative', // Allows border to sit over previous icon
              borderRadius: '50%',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'white',
              [darkColorMode]: {
                borderColor: 'zinc.800',
              },
            }}
          >
            <Image width="24" height="24" src={icon.svg} alt={assetName} />
          </span>
        );
      })} */}
      View all markets
      <IconArrow
        aria-label="View all markets"
        css={{
          fontSize: '1.25em',
        }}
      />
    </Label>
  );
};

export default MarketsSummaryViewAllMarkets;
