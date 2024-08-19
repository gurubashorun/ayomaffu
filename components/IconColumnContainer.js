import PropTypes from 'prop-types';

const IconColumnContainer = ({ as: C = 'ul', ...props }) => {
  return (
    <C
      {...props}
      css={{
        minWidth: '100%',
        display: 'flex',
        flexDirection: ['column', , 'row'],
        flexWrap: 'wrap',
        gap: 3,
        alignItems: ['center', , 'flex-start'],
        justifyContent: 'space-evenly',
        paddingLeft: 0,
        marginTop: [0, , 3],
        marginBottom: [0, , 3],
      }}
    />
  );
};

IconColumnContainer.propTypes = {
  as: PropTypes.oneOf(['ul', 'ol']),
};

export default IconColumnContainer;
