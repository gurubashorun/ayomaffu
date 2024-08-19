import Banner from '@ngin-io/components/public/components/Banner/Banner.js';
import Button from '@ngin-io/components/public/components/Button/Button.js';
import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import IconCoins from '@ngin-io/components/public/components/Icons/IconCoins.js';
import IconLightning from '@ngin-io/components/public/components/Icons/IconLightning.js';
import IconUser from '@ngin-io/components/public/components/Icons/IconUser.js';
import Label from '@ngin-io/components/public/components/Label/Label.js';
import Paragraph from '@ngin-io/components/public/components/Paragraph/Paragraph.js';
import TextList from '@ngin-io/components/public/components/TextList/TextList.js';
import Global from 'mystical/Global.js';
import PropTypes from 'prop-types';
import DisplayHeading from '../DisplayHeading';
import Expandable from '../Expandable';
import HeaderBlock from '../HeaderBlock';
import Image from '../Image';
import Layout from '../Layout';
import Link from '../Link';
import Section from '../Section';
import ThemeProvider from '../ThemeProvider';

const VIP_FORM_LINK_PROPS = {
  href: 'https://support.btcmarkets.net/hc/en-us/requests/new?ticket_form_id=11149413383065',
  target: '_blank',
  rel: 'noopener noreferrer',
};

const SectionWithMargin = (props) => {
  return <Section {...props} css={{ marginBottom: 6 }} />;
};

const IconContentItem = ({ description, icon: Icon, title, ...props }) => {
  return (
    <div
      {...props}
      css={{
        width: ['100%', , , '28%'],
        maxWidth: '30rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: ['center', , , 'flex-start'],
        textAlign: ['center', , , 'left'],
      }}
    >
      <Icon
        aria-label={title}
        css={{
          fontSize: '4.8rem',
          color: 'zinc.50',
          marginBottom: 3,
        }}
      />
      <Heading as="h3" variant="h4">
        {title}
      </Heading>
      <Paragraph variant="medium">{description}</Paragraph>
    </div>
  );
};

IconContentItem.propTypes = {
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

const CallToActionVIP = (props) => {
  return (
    <Section
      {...props}
      size="large"
      backgroundStyle="gradient"
      css={{
        paddingTop: 6,
        paddingBottom: 6,
        textAlign: 'center',
      }}
    >
      <DisplayHeading as="h3" variant="xsmall" css={{ marginBottom: 4 }}>
        Become a BTC Markets VIP today
      </DisplayHeading>
      <Button {...VIP_FORM_LINK_PROPS} as="a" size="large" variant="brand">
        Contact us
      </Button>
    </Section>
  );
};

const Tier = ({ children, description, level, ...props }) => {
  const title = `Tier ${level}`;
  return (
    <div
      {...props}
      css={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        flexBasis: [, , , '300px'],
        maxWidth: '480px',
        marginRight: 'auto',
        marginLeft: 'auto',
      }}
    >
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '-28px',
          position: 'relative',
        }}
      >
        <Image
          alt={title}
          height="136"
          width="110"
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/vip/tier-${level}-dark.svg`}
        />
      </div>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 3,
          paddingRight: 3,
          backgroundColor: 'zinc.700',
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
        }}
      >
        <Heading as="h3" css={{ paddingTop: 4, fontWeight: 'bolder' }}>
          {title}
        </Heading>
        <Label as="p" variant="large" css={{ margin: 0 }}>
          {description}
        </Label>
      </div>
      <div
        css={{
          height: '100%',
          padding: 4,
          backgroundColor: 'zinc.800',
          borderBottomLeftRadius: 3,
          borderBottomRightRadius: 3,
          textAlign: 'left',
          ul: {
            marginBottom: 0,
          },
        }}
      >
        {children}
      </div>
    </div>
  );
};

Tier.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

const options = {
  darkModeForcedBoundary: true,
};

const VIPPage = (props) => {
  return (
    <ThemeProvider options={options}>
      <Global
        styles={{
          body: {
            backgroundColor: 'zinc.900',
          },
        }}
      />
      <Layout
        {...props}
        data-mystical-color-mode="dark"
        header={
          <HeaderBlock variant="tertiary">
            <Section
              align="left"
              css={{
                paddingTop: [5, , , 4],
                paddingBottom: [5, , , 5],
                textAlign: 'left',
              }}
            >
              <div
                css={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 4,
                  paddingTop: 3,
                  paddingBottom: 3,
                }}
              >
                <div
                  css={{
                    width: ['100%', , '52%'],
                    paddingBottom: 3,
                  }}
                >
                  <DisplayHeading as="h1" variant="small">
                    VIP Program
                  </DisplayHeading>
                  <Paragraph variant="large" css={{ marginBottom: [4, 4] }}>
                    Super-charge your trading strategy with our world-class API,
                    a dedicated Account Manager and competitive fee structure.
                  </Paragraph>
                  <div css={{ paddingTop: 3 }}>
                    <Button
                      {...VIP_FORM_LINK_PROPS}
                      as="a"
                      size="large"
                      variant="brand"
                    >
                      Contact us
                    </Button>
                  </div>
                </div>
                <div
                  css={{
                    width: ['100%', , '44%'],
                    paddingRight: 4,
                    marginLeft: 'auto',
                    marginRight: ['auto', , 0],
                  }}
                >
                  <div
                    css={{
                      maxWidth: '523px',
                      height: 'auto',
                    }}
                  >
                    <Image
                      alt="Exclusive benefits"
                      height="353"
                      width="523"
                      src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/vip/header.webp`}
                    />
                  </div>
                </div>
              </div>
            </Section>
          </HeaderBlock>
        }
      >
        <Section align="center" size="large">
          <div
            css={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              columnGap: 4,
              rowGap: [5, , , 6],
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: [4, , 5],
              paddingRight: [4, , 5],
              backgroundColor: 'zinc.800',
              borderRadius: 3,
              textAlign: 'center',
            }}
          >
            <Heading
              as="h2"
              css={{
                maxWidth: '100%',
                width: '100%',
                marginBottom: [0, , 0],
              }}
            >
              Our VIP Program includes
            </Heading>
            <div
              css={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                columnGap: 'inherit',
                rowGap: 'inherit',
              }}
            >
              <IconContentItem
                title="Dedicated support"
                description="Personalised one-on-one client support from an Australian-based Account Manager."
                icon={IconUser}
              />
              <IconContentItem
                title="Low fees"
                description="Competitive, customised, and stable fee structures."
                icon={IconCoins}
              />
              <IconContentItem
                title="Higher API rate limits"
                description="Increased rate limits for our APIs, to utilise more market opportunities."
                icon={IconLightning}
              />
            </div>
            <Paragraph
              variant="medium"
              css={{
                maxWidth: '46em',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              For clients looking to place high-value trades (orders worth
              AU$100,000 or more), contact our{' '}
              <Link href="/otc-trading">OTC Desk</Link> to receive tighter
              spreads and no slippage.
            </Paragraph>
          </div>
        </Section>

        <CallToActionVIP />

        <SectionWithMargin css={{ textAlign: 'center', paddingTop: 5 }}>
          <Heading as="h2" variant="h1" css={{ maxWidth: '100%' }}>
            VIP Program tiers
          </Heading>
          <Paragraph variant="medium" css={{ maxWidth: '100%' }}>
            Our VIP Program has three tiers available for high-volume traders
            and investors.
          </Paragraph>
          <div
            css={{
              display: 'flex',
              alignItems: 'stretch',
              flexWrap: 'wrap',
              columnGap: 4,
              rowGap: 3,
              paddingTop: 3,
              marginBottom: 3,
            }}
          >
            <Tier level="I" description="$500k-$1m*">
              <Label as="p" variant="medium">
                Tier I includes:
              </Label>
              <TextList>
                <Paragraph as="li" variant="small">
                  Access to a low, customised fee agreement
                </Paragraph>
                <Paragraph as="li" variant="small">
                  Personalised service via a dedicated Account Manager
                </Paragraph>
                <Paragraph as="li" variant="small">
                  In-house senior technical support
                </Paragraph>
                <Paragraph as="li" variant="small">
                  Whitelisting of withdrawal addresses
                </Paragraph>
                <Paragraph as="li" variant="small">
                  Ability to transfer your VIP status from another exchange
                </Paragraph>
                <Paragraph as="li" variant="small">
                  Ability to provide input and feedback on future BTC Markets
                  products and features
                </Paragraph>
              </TextList>
            </Tier>
            <Tier level="II" description="$1m-$5m*">
              <Label as="p" variant="medium">
                Includes all the benefits in Tier I, plus:
              </Label>
              <TextList>
                <Paragraph as="li" variant="small">
                  Access to an even lower, customised fee agreement
                </Paragraph>
                <Paragraph as="li" variant="small">
                  Access to a direct support channel on Telegram or Slack
                </Paragraph>
                <Paragraph as="li" variant="small">
                  API - increased rate limits
                </Paragraph>
                <Paragraph as="li" variant="small">
                  BTC Markets VIP Welcome gift**
                </Paragraph>
              </TextList>
            </Tier>
            <Tier level="III" description="$5m+*">
              <Label as="p" variant="medium">
                Includes all the benefits in Tier II, plus:
              </Label>
              <TextList>
                <Paragraph as="li" variant="small">
                  Access to our lowest, customised fee agreement
                </Paragraph>
                <Paragraph as="li" variant="small">
                  Access to a FIX connection, with a sandbox testing environment
                </Paragraph>
                <Paragraph as="li" variant="small">
                  Invitations to exclusive entertainment and industry events***
                </Paragraph>
              </TextList>
            </Tier>
          </div>
          <Label
            variant="medium"
            css={{
              maxWidth: '480px',
              width: '100%',
              alignSelf: [, , , 'flex-start'],
              textAlign: 'left',
            }}
          >
            * 30-day trading volume
            <br />
            ** One gift per account
            <br />
            *** Events will vary based on your location
          </Label>
        </SectionWithMargin>

        <Section
          align="left"
          size="small"
          css={{
            paddingBottom: 5,
          }}
        >
          <Heading as="h2">Frequently asked questions</Heading>
          <Expandable title="Why choose BTC Markets?">
            <Paragraph variant="medium">
              BTC Markets is the exchange of choice for traders and investors
              who are serious about account security, market liquidity, and
              cutting-edge technology. You’ll benefit from our industry-leading
              uptime of 99.99% and multiple best-in-class API integrations,
              including FIX. You can trade with confidence knowing that you are
              protected by institutional-grade security practices and onshore
              custody of your assets.
            </Paragraph>
            <Paragraph variant="medium">
              We have assisted over 325,000 Australian traders in transacting
              over $22 billion on our platform. We offer high-quality trading
              pairs and provide a marketplace where you can trade digital assets
              securely with other Australians, who have been fully verified via
              our KYC/AML processes.
            </Paragraph>
            <Paragraph variant="medium">
              Since our founding in 2013, when the price of Bitcoin was AU$110,
              we have experienced five forks, two halving events, numerous bull
              and bear markets, countless pumps and dumps, black swan events,
              and more FUD and FOMO than any sector should have to deal with.
              However, we&apos;re still here and will continue to be Australia’s
              leading cryptocurrency exchange, partnering with our clients to
              grow their portfolio of digital assets in a secure environment.
            </Paragraph>
          </Expandable>
          <Expandable title="How do I qualify for the VIP Program?">
            <Paragraph variant="medium">
              There are two ways you can qualify for the VIP Program:
            </Paragraph>
            <TextList>
              <Paragraph as="li" variant="small">
                <Heading as="h4">
                  30-day trading volume with BTC Markets
                </Heading>
                <Paragraph variant="medium">
                  We will review client’s 30-day trading volumes at the end of
                  each month. Any customers that reached a new tier during the
                  previous month will be contacted by email (or preferred
                  communication channel if already a member of the VIP Program)
                  on the 5th of the month. This email will confirm your status
                  and benefits, which will be valid for the next three months.
                  During your time as a VIP, volume milestones will be required
                  to maintain your status in that tier.
                </Paragraph>
              </Paragraph>
              <Paragraph as="li" variant="small">
                <Heading as="h4">VIP status transfer</Heading>
                <Paragraph variant="medium">
                  If you are currently earning an equivalent VIP status on a
                  different exchange, you can apply to have your status
                  transferred to the BTC Markets VIP Program by sending a
                  screenshot of your volume and status when filling out the{' '}
                  <Link {...VIP_FORM_LINK_PROPS}>VIP Program inquiry form</Link>
                  . We will review your application and follow up with you as
                  soon as possible. Your status will be confirmed after assets
                  have been moved into your BTC Markets account.
                </Paragraph>
              </Paragraph>
            </TextList>
          </Expandable>
          <Expandable title="What is the 30-day volume requirement?">
            <Paragraph variant="medium">
              Our VIP Program tiers are based on 30-day trading volumes. These
              are calculated as a rolling 30-day total of AUD trading volume,
              across all AUD trades. The rolling 30-day trading volume is
              calculated every hour.
            </Paragraph>
            <Paragraph variant="medium">
              We will review client’s 30-day trading volumes at the end of each
              month. Any customers that reached a new tier during the previous
              month will be contacted by email (or preferred communication
              channel if already a member of the VIP Program) on the 5th of the
              month. This email will confirm your status and benefits, which
              will be valid for the next three months. During your time as a
              VIP, volume milestones will be required to maintain your status in
              that tier.
            </Paragraph>
          </Expandable>
          <Expandable title="Can I transfer my VIP status from another exchange?">
            <Paragraph variant="medium">
              If you are currently earning an equivalent VIP status on a
              different exchange, you can apply to have your status transferred
              to the BTC Markets VIP Program by sending a screenshot of your
              volume and status when filling out the{' '}
              <Link {...VIP_FORM_LINK_PROPS}>VIP Program inquiry form</Link>. We
              will review your application and follow up with you as soon as
              possible. Your status will be confirmed after assets have been
              moved into your BTC Markets account.
            </Paragraph>
          </Expandable>
        </Section>

        <Section>
          <Banner
            title="Legal disclaimer"
            description="BTC Markets reserves the right to review, modify or remove these programs. While the criteria for the programs are public, enrolment to the BTC Markets VIP Program is at BTC Markets sole discretion. BTC Markets reserves the right of final interpretation of these programs."
            variant="info"
            css={{ width: 'fit-content' }}
          />
        </Section>

        <CallToActionVIP />
      </Layout>
    </ThemeProvider>
  );
};

export default VIPPage;
