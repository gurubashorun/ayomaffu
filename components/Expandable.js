import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import darkColorMode from 'mystical/darkColorMode.js';
import PropTypes from 'prop-types';

const Expandable = ({ children, title, ...props }) => {
  return (
    <details
      {...props}
      css={{
        display: 'flex',
        flexFlow: 'column',
        borderColor: 'zinc.200',
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        ':first-of-type': {
          borderTopStyle: 'solid',
          borderTopWidth: 1,
        },
        '&[open]': {
          paddingBottom: 5,
          summary: {
            ':after': {
              content: '"⊖"',
            },
          },
        },
        [darkColorMode]: {
          borderColor: 'zinc.600',
        },
      }}
    >
      <summary
        css={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          listStyle: 'none',
          paddingTop: 4,
          paddingBottom: 4,
          cursor: 'pointer',
          fontSize: 6,
          '::-webkit-details-marker': {
            display: 'none',
          },
          ':after': {
            content: '"⊕"',
            display: 'inline-block',
            marginLeft: 3,
            fontSize: '3.2rem',
            [darkColorMode]: {
              color: 'zinc.50',
            },
          },
        }}
      >
        <Heading as="h3">{title}</Heading>
      </summary>
      {children}
    </details>
  );
};

Expandable.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Expandable;
