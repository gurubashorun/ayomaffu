import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import Label from '@ngin-io/components/public/components/Label/Label.js';
import darkColorMode from 'mystical/darkColorMode.js';
import PropTypes from 'prop-types';
import formatDateTZ from '../lib/formatDateTZ';
import { urlFor } from '../lib/sanity/sanity';
import Image from './Image';
import Link from './Link';
import Tags from './Tags';

const maxWidth = 480;

const ContentCard = ({
  publishedAt,
  image,
  title,
  slug,
  categories,
  dateFormat = 'MMM do Y',
  ...props
}) => {
  return (
    <article
      {...props}
      css={{
        maxWidth,
        flexWrap: 'wrap',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: 100,
        backgroundColor: 'white',
        [darkColorMode]: {
          backgroundColor: 'zinc.800',
        },
      }}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: ['103px', '148px'],
          overflow: 'hidden',
          backgroundColor: 'emerald.900',
        }}
      >
        {image && (
          <Image
            src={urlFor(image).width(maxWidth).format('webp').url()}
            alt={title}
            css={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}
      </div>
      <div
        css={{
          display: 'flex',
          height: ['calc(100% - 103px)', 'calc(100% - 148px)'],
          padding: '3 3 4 3',
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'stretch',
          }}
        >
          <div
            css={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              flexGrow: 0,
              gap: 2,
              marginBottom: 3,
            }}
          >
            {categories && <Tags tags={categories} />}
            <Label variant="capsSmall" css={{ whiteSpace: 'nowrap' }}>
              {formatDateTZ(publishedAt, dateFormat)}
            </Label>
          </div>
          <Heading
            as="h3"
            css={{
              flexGrow: 1,
              marginBottom: 4,
            }}
          >
            {title}
          </Heading>
          <div
            css={{
              width: '100%',
              flexGrow: 0,
              alignSelf: 'flex-end',
            }}
          >
            <Label variant="large" as={Link} href={`/blog/${slug}`}>
              Read more
              <span css={{ fontSize: '0rem' }}> - {title}</span>
            </Label>
          </div>
        </div>
      </div>
    </article>
  );
};

ContentCard.propTypes = {
  image: PropTypes.object,
  publishedAt: PropTypes.string.isRequired,
  dateFormat: PropTypes.string,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ),
};

export default ContentCard;
