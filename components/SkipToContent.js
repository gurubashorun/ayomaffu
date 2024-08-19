import Label from '@ngin-io/components/public/components/Label/Label.js';
import darkColorMode from 'mystical/darkColorMode.js';
import PropTypes from 'prop-types';
import Link from './Link';

const SkipToContent = ({ router, ...props }) => {
  return (
    <Label
      {...props}
      variant="medium"
      as={Link}
      href={`${router && router.pathname}#main-content`}
      id="skip-nav"
      css={{
        backgroundColor: 'brand.electric.900',
        padding: '3 4',
        color: 'zinc.50',
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        [darkColorMode]: {
          color: 'zinc.50',
          backgroundColor: 'zinc.500',
        },
      }}
    >
      Skip to content
    </Label>
  );
};

SkipToContent.propTypes = {
  router: PropTypes.object,
};

export default SkipToContent;
