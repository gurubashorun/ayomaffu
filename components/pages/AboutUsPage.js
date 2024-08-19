import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import IconCalendar from '@ngin-io/components/public/components/Icons/IconCalendar.js';
import IconChartLine from '@ngin-io/components/public/components/Icons/IconChartLine.js';
import IconLock from '@ngin-io/components/public/components/Icons/IconLock.js';
import IconTickCircle from '@ngin-io/components/public/components/Icons/IconTickCircle.js';
import IconTickShield from '@ngin-io/components/public/components/Icons/IconTickShield.js';
import IconUpCircle from '@ngin-io/components/public/components/Icons/IconUpCircle.js';
import IconUser from '@ngin-io/components/public/components/Icons/IconUser.js';
import IconUserVerified from '@ngin-io/components/public/components/Icons/IconUserVerified.js';
import Label from '@ngin-io/components/public/components/Label/Label.js';
import Paragraph from '@ngin-io/components/public/components/Paragraph/Paragraph.js';
import darkColorMode from 'mystical/darkColorMode.js';
import PropTypes from 'prop-types';
import CTACreateAccount from '../CTACreateAccount';
import DisplayHeading from '../DisplayHeading';
import HeaderBlock from '../HeaderBlock';
import Image from '../Image';
import Layout from '../Layout';
import Section from '../Section';

const IconItem = ({ icon: Icon, title, ...props }) => {
  return (
    <div
      {...props}
      css={{
        minWidth: '13rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '3 2',
        boxShadow: 100,
        borderRadius: 2,
        backgroundColor: 'white',
        [darkColorMode]: {
          backgroundColor: 'zinc.800',
        },
      }}
    >
      <div
        css={{
          display: 'flex',
          borderRadius: 3,
          marginBottom: 3,
          fontSize: '7.2rem',
          color: 'zinc.900',
          [darkColorMode]: {
            color: 'zinc.50',
          },
        }}
      >
        <Icon aria-label={title} />
      </div>
      <Heading as="span" variant="h5">
        {title}
      </Heading>
    </div>
  );
};

IconItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

const IconContentItem = ({ description, icon: Icon, title, ...props }) => {
  return (
    <div
      {...props}
      css={{
        width: ['100%', , , '25%'],
        maxWidth: '30rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 3,
        marginBottom: 4,
      }}
    >
      <div
        css={{
          display: 'inline-flex',
          borderRadius: 3,
          padding: 3,
          marginBottom: 3,
          fontSize: '4rem',
          color: 'zinc.900',
          backgroundColor: 'brand.sand.50',
          [darkColorMode]: {
            color: 'zinc.50',
            backgroundColor: 'zinc.900',
          },
        }}
      >
        <Icon aria-label={`${title} ${description}`} />
      </div>
      <DisplayHeading as="h3" variant="small" gradient>
        {title}
      </DisplayHeading>
      <Paragraph variant="medium">{description}</Paragraph>
    </div>
  );
};

IconContentItem.propTypes = {
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.node.isRequired,
};

const IconContentSection = ({
  alignImage,
  children,
  description,
  image,
  title,
  ...props
}) => {
  return (
    <Section {...props} align="center" size="small">
      <div
        css={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          columnGap: 2,
          rowGap: 5,
          marginBottom: 4,
        }}
      >
        <div
          css={{
            maxWidth: ['100%', , , '50%'],
            order: [1, , , 0],
          }}
        >
          <Label
            as="h2"
            variant="large"
            css={{
              textTransform: 'uppercase',
              marginBottom: 3,
              display: 'inline-block',
            }}
          >
            {title}
          </Label>
          <Heading variant="h1" as="h3">
            {description}
          </Heading>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              '> div': {
                flexBasis: ['100%', , , '46%'],
              },
            }}
          >
            {children}
          </div>
        </div>
        <div
          css={[
            {
              width: ['100%', , , '48%'],
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            },
            alignImage === 'left' && { order: -1 },
            alignImage === 'right' && { justifyContent: [, , , 'flex-end'] },
          ]}
        >
          {image}
        </div>
      </div>
    </Section>
  );
};

IconContentSection.propTypes = {
  alignImage: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

const AboutUsPage = ({
  audTraded,
  numberOfCustomers,
  uptimeSinceLaunch,
  yearFounded,
}) => {
  return (
    <Layout
      header={
        <HeaderBlock>
          <Section
            align="center"
            size="small"
            css={{
              paddingTop: [5, , , 6],
              paddingBottom: [5, , , 6],
            }}
          >
            <DisplayHeading
              as="h1"
              variant="large"
              gradient
              css={{ textAlign: 'center' }}
            >
              Who are we?
            </DisplayHeading>
            <Paragraph variant="large" css={{ textAlign: 'center' }}>
              At BTC Markets, our goal is to offer sophisticated digital
              financial products, via an intuitive reliable platform, to the
              investor community.
            </Paragraph>
          </Section>
        </HeaderBlock>
      }
    >
      <Section align="center">
        <div
          css={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            columnGap: 'inherit',
            rowGap: 'inherit',
            padding: 4,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 3,
            boxShadow: 100,
            backgroundColor: 'white',
            [darkColorMode]: {
              backgroundColor: 'zinc.800',
            },
          }}
        >
          <IconContentItem
            description="Year founded"
            title={yearFounded}
            icon={IconCalendar}
          />
          <IconContentItem
            description="Australian traders"
            title={`${new Intl.NumberFormat('en-AU').format(
              numberOfCustomers
            )}+`}
            icon={IconUser}
          />
          <IconContentItem
            description="Traded on our exchange"
            title={new Intl.NumberFormat('en-AU', {
              currency: 'AUD',
              notation: 'compact',
              style: 'currency',
            }).format(audTraded)}
            icon={IconChartLine}
          />
          <IconContentItem
            description="Uptime since launch"
            title={`${uptimeSinceLaunch}%`}
            icon={IconUpCircle}
          />
        </div>
      </Section>

      <Section
        align="center"
        css={{
          paddingTop: [5, 6],
          paddingBottom: [5, 6],
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderBottomColor: 'zinc.100',
          [darkColorMode]: {
            borderBottomColor: 'zinc.700',
          },
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: ['column', 'row'],
            alignSelf: ['flex-start', 'center'],
            gap: 4,
          }}
        >
          <div
            css={{
              maxWidth: '100%',
              width: '151px',
              height: '151px',
              overflow: 'hidden',
              borderRadius: 2,
              marginTop: 1,
            }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/about-us/caroline-bowler.webp`}
              alt="Caroline Bowler: CEO, BTC Markets"
              width="151"
              height="151"
            />
          </div>
          <figure css={{ maxWidth: '52rem', margin: 0 }}>
            <Paragraph
              as="blockquote"
              variant="large"
              css={{ margin: 0, marginBottom: [3, 3] }}
            >
              “Our vision is to build the digital financial infrastructure for
              the future. We are moving forward with that overarching and
              audacious strategy, and can clearly see how this will roll out.”
            </Paragraph>
            <Heading
              as="figcaption"
              variant="h5"
              css={{
                display: 'flex',
                gap: 3,
                alignItems: 'baseline',
              }}
            >
              Caroline Bowler
              <Label as="cite" variant="small" css={{ fontStyle: 'normal' }}>
                CEO, BTC Markets
              </Label>
            </Heading>
          </figure>
        </div>
      </Section>

      <IconContentSection
        title="Our Mission"
        description="Our core values are at the heart of everything we do"
        image={
          <div
            css={{
              maxWidth: ['28rem', '32rem'],
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              gap: [3, 4],
              paddingTop: [, , , 4],
            }}
          >
            <IconItem title="Security" icon={IconLock} />
            <IconItem title="Integrity" icon={IconTickShield} />
            <IconItem title="Responsibility" icon={IconTickCircle} />
            <IconItem title="Reliability" icon={IconUserVerified} />
          </div>
        }
        alignImage="right"
        backgroundStyle="gradient"
        css={{
          paddingTop: [5, 6],
          paddingBottom: [5, 6],
        }}
      >
        <Paragraph variant="medium">
          Our mission is to make it easy for our clients to buy, sell and trade
          cryptocurrencies securely and efficiently. We believe that everyone
          should have access to the benefits of investing in cryptocurrency,
          regardless of their knowledge level or trading experience.
        </Paragraph>
        <Paragraph variant="medium">
          We are committed to providing our clients with exceptional technology
          and local support so they can focus on what matters most to them,
          securing their future.
        </Paragraph>
      </IconContentSection>

      <IconContentSection
        title="Our Story"
        description="Australia’s very first cryptocurrency exchange"
        image={
          <div
            css={{
              maxWidth: '100%',
              width: '424px',
              height: 'auto',
            }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/about-us/our-story.webp`}
              alt="Our Story"
              width={424}
              height={304}
            />
          </div>
        }
        alignImage="left"
        backgroundStyle="solid"
        css={{
          paddingBottom: [5, 6],
        }}
      >
        <Paragraph variant="medium">
          Back in 2013, our two crypto enthusiastic founders saw an opportunity
          to provide Australians with a safe and secure way to buy, sell, and
          trade Bitcoin and other cryptocurrencies. BTC Markets, Australia’s
          very first cryptocurrency exchange, was launched.
        </Paragraph>
        <Paragraph variant="medium">
          Since then, we’ve experienced numerous bull and bear markets,
          countless pumps and dumps, forks, halving events, and black swan
          events. We’re still passionate leaders in the industry, partnering
          with our clients to help grow their digital asset portfolios in a
          secure environment.
        </Paragraph>
      </IconContentSection>

      <CTACreateAccount />
    </Layout>
  );
};

AboutUsPage.propTypes = {
  articles: PropTypes.array,
  audTraded: PropTypes.number.isRequired,
  numberOfCustomers: PropTypes.number.isRequired,
  uptimeSinceLaunch: PropTypes.number.isRequired,
  yearFounded: PropTypes.number.isRequired,
};

export default AboutUsPage;
