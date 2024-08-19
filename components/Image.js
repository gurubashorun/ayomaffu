/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';


const Image = ({ loading = 'lazy', ...props }) => {
  return (
    <>
       {/* <img
        alt='b'
        {...props}
        loading={loading}
        css={{
          display: 'flex',
          maxWidth: '100%',
          height: 'auto',
      }}
      /> */}
    </>
   
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  loading: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default Image;
