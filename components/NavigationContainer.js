import { useRouter } from 'next/router';
import { useState } from 'react';
// import assetsData from '../data/assets.json';
import Navigation from './Navigation';

const BUY_ASSET_NAMES = ['BTC', 'ETH', 'XRP', 'LTC', 'USDT', 'USDC'];

// const buyAssets = BUY_ASSET_NAMES.map((assetName) => {
//   const {
//     node: { assetFullName, icon, slug },
//   } = assetsData.edges.find(({ node }) => {
//     return assetName === node.assetName;
//   });
//   return {
//     assetFullName,
//     assetName,
//     buyAssetLink: `/buy/${slug}`,
//     src: icon.svg,
//   };
// });

const NavigationContainer = (props) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const router = useRouter();

  return (
    <Navigation
      {...props}
      activeDropdown={activeDropdown}
      // buyAssets={buyAssets}
      showMobileNav={showMobileNav}
      setActiveDropdown={setActiveDropdown}
      setShowMobileNav={setShowMobileNav}
      route={router.route}
    />
  );
};

export default NavigationContainer;
