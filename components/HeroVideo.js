import { useEffect, useRef, useState } from 'react';

const videoDark = `${process.env.NEXT_PUBLIC_ASSETS_URL}/video/animation-dark.mp4`;
const videoLight = `${process.env.NEXT_PUBLIC_ASSETS_URL}/video/animation-light.mp4`;

const HeroVideo = ({
  placeholderImageLight,
  placeholderImageDark,
  width,
  height,
}) => {
  const videoRef = useRef();
  const [isDark, setIsDark] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');

    const onChange = (event) => {
      setIsDark(event.matches);
      // Force the video element to render the new video.
      videoRef.current?.load();
    };

    query.addEventListener('change', onChange);

    return () => {
      query.removeEventListener('change', onChange);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay="autoplay"
      loop
      muted
      playsInline
      width={width}
      height={height}
      poster={
        isDark && process.env.NEXT_PUBLIC_ENABLE_DARK_MODE === 'true'
          ? placeholderImageDark
          : placeholderImageLight
      }
    >
      <source
        src={
          isDark && process.env.NEXT_PUBLIC_ENABLE_DARK_MODE === 'true'
            ? videoDark
            : videoLight
        }
        type="video/mp4"
      />
    </video>
  );
};

export default HeroVideo;
