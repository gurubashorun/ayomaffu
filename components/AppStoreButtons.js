import Image from './Image';
import Link from './Link';

const AppStoreButtons = (props) => {
  return (
    <div
      {...props}
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 3,
      }}
    >
      <Link
        unstyled
        href="https://apps.apple.com/au/app/btc-markets/id1546957530"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          alt="Download the BTC Markets app on the App Store"
          height="40"
          width="120"
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/badges/appleStore.webp`}
        />
      </Link>
      <Link
        unstyled
        href="https://play.google.com/store/apps/details?id=com.btcmarket.btcm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          alt="Get the BTC Markets app on Google Play"
          height="40"
          width="135"
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/badges/googlePlay.webp`}
        />
      </Link>
    </div>
  );
};

export default AppStoreButtons;
