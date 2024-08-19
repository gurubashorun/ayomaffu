import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import Paragraph from '@ngin-io/components/public/components/Paragraph/Paragraph.js';
import darkColorMode from 'mystical/darkColorMode.js';
import PropTypes from 'prop-types';

const IconColumn = ({
  description,
  icon: Icon,
  number,
  title,
  variant = 'primary',
  ...props
}) => {
  return (
    <li
      {...props}
      css={{
        width: '28rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 4,
        paddingLeft: 0,
        listStyle: 'none',
        '&:before': {
          content: 'none',
        },
      }}
    >
      <div
        css={[
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 3,
            padding: 3,
            marginBottom: 3,
            fontSize: '4rem',
            backgroundColor: 'white',
            [darkColorMode]: {
              backgroundColor: 'zinc.800',
              color: 'zinc.50',
            },
          },
          variant === 'secondary' && {
            backgroundColor: 'brand.sand.50',
            [darkColorMode]: {
              backgroundColor: 'zinc.800',
            },
          },
        ]}
      >
        <Icon aria-label={number ? `Step ${number}: ${title}` : title} />
      </div>
      <Heading as="h3" variant="h4" css={{ width: '100%' }}>
        {number ? `${number}. ${title}` : title}
      </Heading>
      <Paragraph variant="medium">{description}</Paragraph>
    </li>
  );
};

IconColumn.propTypes = {
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  number: PropTypes.number,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default IconColumn;
