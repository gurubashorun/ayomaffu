import dynamic from 'next/dynamic';
import ColorSchemeImage from './ColorSchemeImage';

const placeholderImageLight = `${process.env.NEXT_PUBLIC_ASSETS_URL}/video/animation-still-light.webp`;
const placeholderImageDark = `${process.env.NEXT_PUBLIC_ASSETS_URL}/video/animation-still-dark.webp`;

const width = 292;
const height = 534;

const HeroVideo = dynamic(
  () => {
    return import('./HeroVideo');
  },
  {
    ssr: false,
    loading() {
      return (
        <ColorSchemeImage
          lightSrc={placeholderImageLight}
          darkSrc={placeholderImageDark}
          width={width}
          height={height}
          alt="BTC Markets Mobile App"
        />
      );
    },
  }
);

const HeroVideoLoader = () => {
  return (
    <div
      css={{
        display: 'flex',
        width,
        maxWidth: '100%',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <HeroVideo
        placeholderImageLight={placeholderImageLight}
        placeholderImageDark={placeholderImageDark}
        width={width}
        height={height}
      />
    </div>
  );
};

export default HeroVideoLoader;
