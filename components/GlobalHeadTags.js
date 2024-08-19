import Head from 'next/head';

/**
 * ? Source: https://unpkg.com/default-passive-events@2.0.0/dist/index.umd.js
 * ? Reference: https://github.com/zzarcon/default-passive-events
 */
const disablePassiveEvents = `!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){var e,t=["scroll","wheel","touchstart","touchmove","touchenter","touchend","touchleave","mouseout","mouseleave","mouseup","mousedown","mousemove","mouseenter","mousewheel","mouseover"];if(function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}return e}()){var n=EventTarget.prototype.addEventListener;e=n,EventTarget.prototype.addEventListener=function(n,o,r){var i,s="object"==typeof r&&null!==r,u=s?r.capture:r;(r=s?function(e){var t=Object.getOwnPropertyDescriptor(e,"passive");return t&&!0!==t.writable&&void 0===t.set?Object.assign({},e):e}(r):{}).passive=void 0!==(i=r.passive)?i:-1!==t.indexOf(n)&&!0,r.capture=void 0!==u&&u,e.call(this,n,o,r)},EventTarget.prototype.addEventListener._original=e}});`;

/**
 * ? Reference: https://johnfraney.ca/posts/2019/12/09/improve-page-speed-google-fonts/
 */
const googleFonts = `
  /* latin-ext */
  @font-face {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lexend/v17/wlpwgwvFAVdoq2_v9aQU82RHaBBX.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lexend/v17/wlpwgwvFAVdoq2_v-6QU82RHaA.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lexend/v17/wlpwgwvFAVdoq2_v9aQU82RHaBBX.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lexend/v17/wlpwgwvFAVdoq2_v-6QU82RHaA.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lexend/v17/wlpwgwvFAVdoq2_v9aQU82RHaBBX.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lexend/v17/wlpwgwvFAVdoq2_v-6QU82RHaA.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lexend/v17/wlpwgwvFAVdoq2_v9aQU82RHaBBX.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lexend/v17/wlpwgwvFAVdoq2_v-6QU82RHaA.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;

const GlobalHeadTags = () => {
  return (
    <Head>
      <base href="/" />
      <link rel="preconnect" href={process.env.NEXT_PUBLIC_ASSETS_URL} />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="icon"
        type="image/svg+xml"
        href={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/favicon.svg`}
      />
      <link
        rel="alternate icon"
        href={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/favicon.ico`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/favicon-16x16.png`}
      />
      <link
        rel="mask-icon"
        href={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/favicon.svg`}
        color="#FCFBF8"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: disablePassiveEvents,
        }}
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <style
        dangerouslySetInnerHTML={{
          __html: googleFonts,
        }}
      />
    </Head>
  );
};

export default GlobalHeadTags;
