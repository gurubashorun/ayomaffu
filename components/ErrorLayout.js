import darkColorMode from 'mystical/darkColorMode.js';
import PropTypes from 'prop-types';
import Logo from './Logo';

const ErrorLayout = ({ children, router }) => {
  return (
    <main
      role="main"
      id="main-content"
      css={{ height: '-webkit-fill-available' }}
    >
      <div
        css={{
          height: '100vh',
          display: 'flex',
          flexGrow: 1,
          alignItems: 'center',
          paddingRight: [3, 6],
          paddingLeft: [3, 6],
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 5,
            maxWidth: 'content.condensed',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
          }}
        >
          <Logo
            onClick={() => {
              return router.push('/');
            }}
            css={{
              width: '182px',
              [darkColorMode]: {
                color: 'white',
              },
            }}
          />
          {children}
        </div>
      </div>
    </main>
  );
};

ErrorLayout.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.object.isRequired,
};

export default ErrorLayout;
