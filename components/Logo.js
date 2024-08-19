import GraphicLogo from '@ngin-io/components/public/components/Graphics/GraphicLogo.js';
import Link from './Link';

const Logo = (props) => {
  return (
    <Link
      {...props}
      href="/"
      title="BTC Markets Bitcoin Exchange | Buy & Sell BTC With AUD"
      css={{
        display: 'inline-block',
      }}
    >
      <GraphicLogo />
    </Link>
  );
};

export default Logo;
