import { ratingsConfig } from '../config/ratingsConfig';
import Image from './Image';
import RatingStars from './RatingStars';

const GoogleStars = (props) => {
  return (
    <div
      {...props}
      css={{
        display: 'flex',
        gap: 2,
      }}
    >
      <Image
        alt={`${ratingsConfig.googleReviews} rating on Google`}
        height="20"
        width="20"
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/logos/google.webp`}
        loading="eager"
      />
      <RatingStars rating={ratingsConfig.googleReviews} />
    </div>
  );
};

export default GoogleStars;
