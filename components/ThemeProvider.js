import CoreGlobalStyles from '@ngin-io/components/public/lib/GlobalStyles.js';
import MysticalProvider from 'mystical/MysticalProvider.js';
import PropTypes from 'prop-types';
import { memo } from 'react';
// import localTheme from '../lib/themes/localTheme';
import GlobalStyles from './GlobalStyles';
import localTheme from '@ngin-io/lib/themes/localThemes';

const defaultOptions = {
  darkModeOff: process.env.NEXT_PUBLIC_ENABLE_DARK_MODE === 'false',
};

const ThemeProvider = memo(
  ({ children, options, theme = localTheme, ...props }) => {
    const mergedOptions = {
      ...defaultOptions,
      ...options,
    };
    return (
      <MysticalProvider options={mergedOptions} theme={theme} {...props}>
        <CoreGlobalStyles />
        <GlobalStyles />
        {children}
      </MysticalProvider>
    );
  }
);

ThemeProvider.displayName = 'ThemeProvider';

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
