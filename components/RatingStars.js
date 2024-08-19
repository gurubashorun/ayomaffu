import IconStar from '@ngin-io/components/public/components/Icons/IconStar.js';
import Text from '@ngin-io/components/public/components/Text/Text.js';
import PropTypes from 'prop-types';

const totalStars = 5;
const starsArray = Array.from(Array(totalStars).keys());

const RatingStars = ({ rating = 0, ...props }) => {
  const [whole, decimal] = rating.toFixed(1).toString().split('.');
  return (
    <Text
      as="div"
      variant="small"
      {...props}
      css={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      {starsArray.map((index) => {
        let starType = 'empty';
        if (index < whole) {
          starType = 'full';
        }
        if (decimal && index === parseInt(whole)) {
          // Don't visually round down stars
          starType = decimal > 7 ? 'full' : 'half';
        }
        return (
          <IconStar
            key={index}
            variant={starType}
            css={{
              fontSize: '1.1em',
              color: 'yellow.400',
            }}
          />
        );
      })}
      <span
        css={{
          marginLeft: 2,
          marginBottom: '-0.2rem',
          fontWeight: 'bold',
        }}
      >
        {rating}
      </span>
    </Text>
  );
};

RatingStars.propTypes = {
  rating: PropTypes.number,
};

export default RatingStars;
