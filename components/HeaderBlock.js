import PropTypes from 'prop-types';
import { useContext } from 'react';
import GlobalContainerContext from './lib/GlobalContainerContext';

// Heights used to position background behind nav
const navHeightMobile = '88px';
const navHeightDesktop = '66px';

const HeaderBlock = ({
  children,
  modifiers: customModifiers = {},
  showNav,
  ...props
}) => {
  const { NavigationContainer } = useContext(GlobalContainerContext);

  return (
    <header
      {...props}
      role="banner"
      css={[
        {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        },
        customModifiers.header,
      ]}
    >
      <NavigationContainer showNav={showNav} />
      <div
        css={[
          {
            width: '100%',
            paddingTop: [navHeightMobile, , , navHeightDesktop],
            marginTop: [`-${navHeightMobile}`, , , `-${navHeightDesktop}`],
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
            '> h1': {
              marginBottom: [3, 4],
            },
            '> p': {
              marginBottom: [4, , 5],
            },
          },
          customModifiers.headerContent,
        ]}
      >
        {children}
      </div>
    </header>
  );
};

HeaderBlock.propTypes = {
  children: PropTypes.node,
  modifiers: PropTypes.shape({
    headerContent: PropTypes.object,
  }),
  showNav: PropTypes.bool,
};

export default HeaderBlock;
