import Global from 'mystical/Global.js';
import darkColorMode from 'mystical/darkColorMode.js';

const GlobalStyles = () => {
  return (
    <Global
      styles={[
        {
          body: {
            backgroundColor: 'brand.sand.50',
            [darkColorMode]: {
              backgroundColor: 'zinc.900',
            },
          },
        },
        {
          // XXX temp hack to address: https://github.com/ngin-io/btcm-marketing-website/issues/345
          style: {
            display: 'none !important',
          },
        },
      ]}
    />
  );
};

export default GlobalStyles;
