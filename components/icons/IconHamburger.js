import PropTypes from 'prop-types';

const IconHamburger = ({ open, ...props }) => {
  return (
    <div
      {...props}
      css={{
        width: '24px',
        height: '16px',
        div: {
          width: '24px',
          height: '2px',
          transition: '0.4s',
          backgroundColor: 'currentColor',
        },
      }}
    >
      <div
        css={{
          willChange: 'transform',
          transform: open && 'rotate(-45deg) translate(-5.5px, 4.25px)',
        }}
      />
      <div
        css={{
          willChange: 'opacity',
          opacity: open && 0,
          margin: '5px 0',
        }}
      />
      <div
        css={{
          willChange: 'transform',
          transform: open && 'rotate(45deg) translate(-5.5px, -4.25px)',
        }}
      />
    </div>
  );
};

IconHamburger.propTypes = {
  open: PropTypes.bool,
};

export default IconHamburger;
