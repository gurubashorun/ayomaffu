// ? Reference: https://www.npmjs.com/package/next-seo
const defaultName = 'BTC Markets';
const defaultTitle = 'BTC Markets Bitcoin Exchange | Buy & Sell BTC With AUD';

const defaultDescription = 'Australia\'s premier secure cryptocurrency & Bitcoin exchange. Buy, sell and trade Bitcoin (BTC), Ethereum (ETH), XRP and more with AUD today.';

const defaultMetaTags = {
  title: defaultTitle,
  description: defaultDescription,
  canonical: 'https://www.btcmarkets.net/',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://www.btcmarkets.net/',
    description: defaultDescription,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_ASSETS_URL}/images/og-image-1200x1200.jpg`,
        width: 1200,
        height: 1200,
        alt: defaultTitle,
      },
      {
        url: `${process.env.NEXT_PUBLIC_ASSETS_URL}/images/og-image-398x398.jpg`,
        width: 398,
        height: 398,
        alt: defaultTitle,
      },
    ],
    site_name: defaultName,
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@BTCMarkets',
    handle: '@BTCMarkets',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'application-name',
      content: defaultName,
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: defaultName,
    },
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
    {
      name: 'mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'msapplication-config',
      content: '/browserconfig.xml',
    },
    {
      name: 'msapplication-tap-highlight',
      content: 'no',
    },
    {
      name: 'msapplication-TileColor',
      content: '#FCFBF8', // brand.sand.50
    },
    ...(process.env.NEXT_PUBLIC_ENABLE_DARK_MODE === 'true'
      ? [
          {
            name: 'theme-color',
            keyOverride: 'theme-color-light',
            media: '(prefers-color-scheme: light)',
            content: '#FCFBF8', // brand.sand.50
          },
          {
            name: 'theme-color',
            keyOverride: 'theme-color-dark',
            media: '(prefers-color-scheme: dark)',
            content: '#18181B', // zinc.900
          },
        ]
      : [
          {
            name: 'theme-color',
            content: '#FCFBF8', // brand.sand.50
          },
        ]),
  ],
};

export { defaultMetaTags };
