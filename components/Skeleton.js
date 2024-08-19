import { keyframes } from '@emotion/react';
import hexToRgbA from '@ngin-io/components/public/lib/hexToRgbA.js';
import darkColorMode from 'mystical/darkColorMode.js';
import useModifiers from 'mystical/useModifiers.js';
import useTheme from 'mystical/useTheme.js';
import PropTypes from 'prop-types';

const modifiers = {
  variant: {
    circle: {
      borderRadius: '50%',
    },
    text: {
      borderRadius: 2,
    },
    rect: {},
  },
};

const wave = keyframes({
  '0%': {
    transform: 'translateX(-100%)',
  },
  '60%': {
    // +0.5s of delay between each loop
    transform: 'translateX(100%)',
  },
  '100%': {
    transform: 'translateX(100%)',
  },
});

const Skeleton = ({ variant = 'text', ...props }) => {
  const modifierStyle = useModifiers({ variant }, modifiers);

  // Light color mode
  const zinc100 = useTheme('colors', 'zinc.100');
  const zinc200 = useTheme('colors', 'zinc.200');

  // Dark color mode
  const zinc600 = useTheme('colors', 'zinc.600');
  const zinc700 = useTheme('colors', 'zinc.700');

  return (
    <div
      {...props}
      css={[
        {
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: zinc200,
          '&::after': {
            animation: `${wave} 1.6s linear 0.5s infinite`,
            // prettier-ignore
            backgroundImage: `linear-gradient(90deg, ${hexToRgbA(zinc200, 0)}, ${zinc100}, ${hexToRgbA(zinc200, 0)})`,
            content: '""',
            position: 'absolute',
            transform: 'translateX(-100%)', // Avoid flash during server-side hydration
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
            '> *': { visibility: 'hidden' },
          },
          [darkColorMode]: {
            backgroundColor: zinc700,
            '&::after': {
              backgroundImage: `linear-gradient(90deg, ${hexToRgbA(
                zinc700,
                0
              )}, ${zinc600}, ${hexToRgbA(zinc700, 0)})`,
            },
          },
        },
        modifierStyle,
      ]}
    />
  );
};

Skeleton.propTypes = {
  variant: PropTypes.oneOf(['circle', 'text', 'rect']),
};

export default Skeleton;
