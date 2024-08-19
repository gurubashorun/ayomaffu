import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import IconFacebook from '@ngin-io/components/public/components/Icons/IconFacebook.js';
import IconInstagram from '@ngin-io/components/public/components/Icons/IconInstagram.js';
import IconLinkedIn from '@ngin-io/components/public/components/Icons/IconLinkedIn.js';
import IconTelegram from '@ngin-io/components/public/components/Icons/IconTelegram.js';
import IconTwitter from '@ngin-io/components/public/components/Icons/IconTwitter.js';
import Label from '@ngin-io/components/public/components/Label/Label.js';
import Scrollbar from '@ngin-io/components/public/components/Scrollbar/Scrollbar.js';
import PropTypes from 'prop-types';
import ContentCard from './ContentCard';
import Link from './Link';
import Section from './Section';

const SocialLink = (props) => {
  return (
    <Label
      {...props}
      as={Link}
      variant="large"
      target="_blank"
      rel="noopener noreferrer"
      css={{
        svg: {
          fontSize: '1.2em',
          marginRight: 2,
          verticalAlign: 'text-bottom',
        },
      }}
    />
  );
};

const ContentCards = ({
  heading = 'Find out the latest crypto news',
  articles,
  linkHref,
  linkTitle,
  ...props
}) => {
  return (
    <div
      {...props}
      css={{
        maxWidth: '100%',
        textAlign: 'center',
        paddingTop: [5, , 6],
      }}
    >
      <Section align="center">
        <Heading
          as="h2"
          css={{
            maxWidth: '58rem',
            marginBottom: 5,
            color: 'zinc.900',
          }}
        >
          {heading}
        </Heading>
      </Section>
      <Scrollbar overflowEffect="mask" showScrollbar={false}>
        <div
          css={{
            width: ['814px', 'content.wide'],
            display: 'flex',
            gap: 4,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: [3, 4],
            paddingRight: [3, 4],
            marginRight: 'auto',
            marginLeft: 'auto',
            textAlign: 'left',
            '> article': {
              flexGrow: 1,
              width: 'min(250px, 480px)',
              marginRight: 'auto',
              marginLeft: 'auto',
              '&:nth-of-type(2)': {
                boxShadow: [, , , , 100],
              },
            },
          }}
        >
          {articles.map(({ categories, image, publishedAt, slug, title }) => {
            return (
              <ContentCard
                key={slug}
                categories={categories}
                image={image}
                publishedAt={publishedAt}
                slug={slug}
                title={title}
              />
            );
          })}
        </div>
      </Scrollbar>
      <div
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
          paddingLeft: 4,
          paddingRight: 4,
          paddingBottom: 4,
        }}
      >
        <div css={{ width: '100%', marginBottom: 4 }}>
          <Label
            as={Link}
            variant="large"
            // TODO - get categoryId/link from global config?
            href={linkHref || '/blog'}
            title="BTC Markets blog & announcements"
          >
            {linkTitle || 'Check out more of our crypto news'}
          </Label>
        </div>
        <SocialLink
          href="https://twitter.com/BTCMarkets"
          title="BTC Markets on Twitter"
        >
          <IconTwitter />
          Twitter
        </SocialLink>
        <SocialLink
          href="https://facebook.com/BTCMarkets"
          title="BTC Markets on Facebook"
        >
          <IconFacebook />
          Facebook
        </SocialLink>
        <SocialLink
          href="https://linkedin.com/company/btc-markets"
          title="BTC Markets on Linkedin"
        >
          <IconLinkedIn />
          LinkedIn
        </SocialLink>
        <SocialLink href="https://t.me/BTCMkts" title="BTC Markets on Telegram">
          <IconTelegram />
          Telegram
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/btcmarkets_"
          title="BTC Markets on Instagram"
        >
          <IconInstagram />
          Instagram
        </SocialLink>
      </div>
    </div>
  );
};

ContentCards.propTypes = {
  articles: PropTypes.array,
  linkHref: PropTypes.string,
  linkTitle: PropTypes.string,
};

export default ContentCards;
