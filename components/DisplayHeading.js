import darkColorMode from 'mystical/darkColorMode.js';
import useModifiers from 'mystical/useModifiers.js';
import useTheme from 'mystical/useTheme.js';
import PropTypes from 'prop-types';

const defaultFontSizes = {
  xsmall: 8,
  small: 9,
  medium: 10,
  large: 12,
};

const modifiers = {
  default: {
    fontWeight: 600,
    letterSpacing: 'tightest',
    marginBottom: 3,
    '&:first-of-type': {
      marginTop: 0,
    },
    '&:last-child': {
      marginBottom: 0,
    },
    [darkColorMode]: {
      color: 'zinc.50',
    },
  },
  variant: {
    xsmall: {
      fontSize: defaultFontSizes.xsmall,
      lineHeight: 'tight',
    },
    small: {
      fontSize: [defaultFontSizes.xsmall, , , defaultFontSizes.small],
      lineHeight: 'tight',
    },
    medium: {
      fontSize: [defaultFontSizes.xsmall, , , defaultFontSizes.medium],
      lineHeight: 'normal',
    },
    large: {
      fontSize: [defaultFontSizes.small, , , defaultFontSizes.large],
      lineHeight: 'normal',
    },
  },
};

const DisplayHeading = ({ as: C, children, gradient, variant, ...props }) => {
  const modifierStyles = useModifiers({ variant }, modifiers);
  const electric200 = useTheme('colors', 'brand.electric.200');
  const electric500 = useTheme('colors', 'brand.electric.500');
  const electric900 = useTheme('colors', 'brand.electric.900');

  return (
    <C {...props} css={modifierStyles}>
      <span
        css={[
          gradient && {
            paddingBottom: '0.1em',
            background: `linear-gradient(115deg, ${electric500}, ${electric900})`,
            backgroundClip: 'text',
            boxDecorationBreak: 'clone',
            color: 'transparent',
            [darkColorMode]: {
              background: `linear-gradient(115deg, ${electric200}, ${electric500})`,
              backgroundClip: 'text',
            },
          },
        ]}
      >
        {children}
      </span>
    </C>
  );
};

DisplayHeading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  children: PropTypes.node.isRequired,
  gradient: PropTypes.bool,
  variant: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']).isRequired,
};

export default DisplayHeading;
