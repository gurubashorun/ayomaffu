import theme from '@ngin-io/components/public/themes/btcm/theme.js';

const localTheme = {
  ...theme,
  fontWeights: {
    thin: 300,
    normal: 400,
    bold: 500,
  },
  global: {
    ...theme.global,
    body: {
      ...theme.global.body,
      fontFamily: 'brand',
    },
  },
};

export default localTheme;
