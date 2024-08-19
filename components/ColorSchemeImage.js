import PropTypes from 'prop-types';
import Image from './Image';

const ColorSchemeImage = ({ alt, darkSrc, lightSrc, ...props }) => {
  if (process.env.NEXT_PUBLIC_ENABLE_DARK_MODE === 'true') {
    return (
      <picture>
        <source srcSet={darkSrc} media="(prefers-color-scheme: dark)" />
        <Image {...props} src={lightSrc} alt={alt} />
      </picture>
    );
  }

  return <Image {...props} src={lightSrc} alt={alt} />;
};

ColorSchemeImage.propTypes = {
  alt: PropTypes.string.isRequired,
  darkSrc: PropTypes.string.isRequired,
  lightSrc: PropTypes.string.isRequired,
};

export default ColorSchemeImage;
