import Label from '@ngin-io/components/public/components/Label/Label.js';
import darkColorMode from 'mystical/darkColorMode.js';
import PropTypes from 'prop-types';
import Link from './Link';

export default function Tags({ tags = [], ...props }) {
  return (
    <div {...props} css={{ display: 'flex' }}>
      {tags.map(({ title, slug }) => {
        return (
          <Label
            as={Link}
            variant="small"
            key={title}
            href={`/blog/${slug}`}
            css={{
              padding: '1 2',
              marginRight: 2,
              textDecoration: 'none',
              backgroundColor: 'brand.electric.50',
              [darkColorMode]: {
                color: 'zinc.900',
              },
            }}
          >
            {title}
          </Label>
        );
      })}
    </div>
  );
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ),
};
