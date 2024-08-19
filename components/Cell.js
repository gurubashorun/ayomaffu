import PropTypes from 'prop-types';

const Cell = ({ order, ...props }) => {
  return (
    <div
      {...props}
      css={{
        maxWidth: '100%',
        order,
      }}
    />
  );
};

Cell.propTypes = {
  order: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
};

export default Cell;
