import hexToRgbA from '@ngin-io/components/public/lib/hexToRgbA.js';
import darkColorMode from 'mystical/darkColorMode.js';
import useModifiers from 'mystical/useModifiers.js';
import useTheme from 'mystical/useTheme.js';
import PropTypes from 'prop-types';

const modifiers = {
  default: {
    width: '100%',
  },
  align: {
    left: { alignItems: 'left' },
    center: {
      display: 'flex',
      alignItems: 'center',
    },
    right: { alignItems: 'right' },
  },
  size: {
    small: { maxWidth: 'content.condensed' },
    medium: { maxWidth: 'content.wide' },
    large: { maxWidth: 'page' },
  },
  flow: {
    column: { flexDirection: 'column' },
    row: { flexDirection: 'row' },
  },
};

const Section = ({
  align = 'center',
  backgroundStyle,
  children,
  flow = 'column',
  size = 'medium',
  ...props
}) => {
  const white = useTheme('colors', 'white');
  const zinc800 = useTheme('colors', 'zinc.800');
  const modifierStyle = useModifiers({ align, flow, size }, modifiers);

  return (
    <div
      {...props}
      css={[
        {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingLeft: [3, 4],
          paddingRight: [3, 4],
        },
        backgroundStyle === 'solid' && {
          backgroundColor: white,
          [darkColorMode]: {
            backgroundColor: zinc800,
          },
        },
        backgroundStyle === 'gradient' && {
          background: `linear-gradient(180deg, ${hexToRgbA(
            white,
            0
          )}, ${white} 75%)`,
          [darkColorMode]: {
            background: `linear-gradient(180deg, ${hexToRgbA(
              zinc800,
              0
            )}, ${zinc800} 75%)`,
          },
        },
      ]}
    >
      <div css={modifierStyle}>{children}</div>
    </div>
  );
};

Section.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right', '']),
  backgroundStyle: PropTypes.oneOf(['solid', 'gradient', '']),
  children: PropTypes.node.isRequired,
  flow: PropTypes.oneOf(['column', 'row', '']),
  size: PropTypes.oneOf(['small', 'medium', 'large', '']),
};

export default Section;
