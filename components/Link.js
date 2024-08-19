import NextLink from 'next/image';
import PropTypes from 'prop-types';

const Link = ({ unstyled, ...props }) => {
  return (
    <NextLink
      passHref
      css={
        unstyled
          ? {}
          : {
              textDecoration: 'underline',
              textDecorationColor: 'brand.electric.200',
              textDecorationThickness: '0.2em',
              textUnderlineOffset: '0.3em',
              color: 'inherit',
            }
      }
      {...props}
    />
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
