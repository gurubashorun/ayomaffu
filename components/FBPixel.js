/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React from 'react';

/**
 * ? Reference: https://developers.facebook.com/docs/facebook-pixel/implementation#base-code
 */

const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
const USE_FACEBOOK_PIXEL = process.env.NEXT_PUBLIC_USE_FACEBOOK_PIXEL;
const isProduction = process.env.NODE_ENV.toLowerCase() === 'production';

/**
 * Using next/head here to load the inline script in the head after next-seo meta data
 * ? Reference: https://nextjs.org/docs/api-reference/next/head
 * Currently a blocking issue preventing the use of next/script:
 * ? https://github.com/vercel/next.js/issues/26343
 */

const FBPixel = () => {
  if (isProduction && USE_FACEBOOK_PIXEL === 'true') {
    return (
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', ${FACEBOOK_PIXEL_ID});
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <>
            {/* <img
              alt='a'
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
            />   */}
          </>
          
        </noscript>
      </Head>
    );
  }

  return null;
};

export default FBPixel;
