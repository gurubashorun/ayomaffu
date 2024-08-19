import Button from '@ngin-io/components/public/components/Button/Button.js';
import ErrorFallback from '@ngin-io/components/public/components/ErrorFallback/ErrorFallback.js';
import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import IconChartCandles from '@ngin-io/components/public/components/Icons/IconChartCandles.js';
import IconChatDots from '@ngin-io/components/public/components/Icons/IconChatDots.js';
import IconCoins from '@ngin-io/components/public/components/Icons/IconCoins.js';
import IconImport from '@ngin-io/components/public/components/Icons/IconImport.js';
import IconLightning from '@ngin-io/components/public/components/Icons/IconLightning.js';
import IconLocation from '@ngin-io/components/public/components/Icons/IconLocation.js';
import IconLock from '@ngin-io/components/public/components/Icons/IconLock.js';
import IconMobile from '@ngin-io/components/public/components/Icons/IconMobile.js';
import IconPieSegment from '@ngin-io/components/public/components/Icons/IconPieSegment.js';
import IconSafe from '@ngin-io/components/public/components/Icons/IconSafe.js';
import IconUpDown from '@ngin-io/components/public/components/Icons/IconUpDown.js';
import IconUser from '@ngin-io/components/public/components/Icons/IconUser.js';
import IconWallet from '@ngin-io/components/public/components/Icons/IconWallet.js';
import Label from '@ngin-io/components/public/components/Label/Label.js';
import Paragraph from '@ngin-io/components/public/components/Paragraph/Paragraph.js';
import Text from '@ngin-io/components/public/components/Text/Text.js';
import darkColorMode from 'mystical/darkColorMode.js';
import PropTypes from 'prop-types';
import { ratingsConfig } from '../../config/ratingsConfig';
import CTACreateAccount from '../CTACreateAccount';
import Cell from '../Cell';
import CellContainer from '../CellContainer';
import ColorSchemeImage from '../ColorSchemeImage';
import ContentCards from '../ContentCards';
import DisplayHeading from '../DisplayHeading';
import ErrorBoundary from '../ErrorBoundary';
import GoogleStars from '../GoogleStars';
import HeaderBlock from '../HeaderBlock';
import HeroVideoLoader from '../HeroVideoLoader';
import IconColumn from '../IconColumn';
import IconColumnContainer from '../IconColumnContainer';
import Image from '../Image';
import Layout from '../Layout';
import Link from '../Link';
import { offset } from '../MarketsSummaryStructure';
import RatingStars from '../RatingStars';
import Section from '../Section';
import StartTradingSection from '../StartTradingSection';

const MARKETS_SUMMARY_TABLE_QTY = 5;



const IconContentSection = ({
  alignImage,
  children,
  description,
  gradient = false,
  imageProps,
  title,
  ...props
}) => {
  return (
    <Section
      {...props}
      background={gradient ? 'gradient' : null}
      align="left"
      css={{
        paddingTop: [5, , 6],
      }}
    >
      <div
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          rowGap: 5,
          paddingBottom: 5,
        }}
      >
        <div css={{ maxWidth: ['100%', , , '50%'] }}>
          <Label
            variant="large"
            css={{
              textTransform: 'uppercase',
              marginBottom: 3,
              display: 'inline-block',
            }}
          >
            {title}
          </Label>
          <Heading variant="h1" as="h2" css={{ marginBottom: 5 }}>
            {description}
          </Heading>
          <div
            css={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: 4,
              '> div': {
                flexBasis: ['100%', , '46%'],
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
              alignItems: 'center',
              justifyContent: 'center',
            },
            alignImage === 'left' && { order: [0, , , -1] },
          ]}
        >
          <div
            css={{
              maxWidth: '100%',
              width: `${imageProps.width}px`,
              height: 'auto',
            }}
          >
            <ColorSchemeImage {...imageProps} alt={description} />
          </div>
        </div>
      </div>
    </Section>
  );
};

IconContentSection.propTypes = {
  alignImage: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  gradient: PropTypes.bool,
  imageProps: PropTypes.shape({
    darkSrc: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    lightSrc: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

const IconContentItem = ({ description, icon: Icon, title, ...props }) => {
  return (
    <div {...props}>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          marginBottom: 3,
          fontSize: '3.2rem',
          [darkColorMode]: {
            color: 'zinc.50',
          },
        }}
      >
        <Icon aria-label={title} />
        <Heading as="h3" variant="h5">
          {title}
        </Heading>
      </div>
      <Paragraph variant="medium">{description}</Paragraph>
    </div>
  );
};

IconContentItem.propTypes = {
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

const VIPIconContentItem = ({ icon: Icon, text, ...props }) => {
  return (
    <Heading {...props} as="h3" variant="h5">
      <span
        css={{
          marginRight: 2,
          verticalAlign: 'top',
          fontSize: '2.4rem',
        }}
      >
        <Icon aria-label={text} />
      </span>
      {text}
    </Heading>
  );
};

VIPIconContentItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};

const IndexPage = ({ articles, MarketsSummary }) => {
  return (
    <Layout
      header={
        <HeaderBlock>
          <Section
            align="left"
            css={{
              paddingTop: [4, , , 6],
              overflow: 'hidden',
            }}
          >
            <div
              css={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: ['column', , 'row'],
                justifyContent: 'space-between',
              }}
            >
              <div
                css={{
                  maxWidth: [, , '65%'],
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  css={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 3,
                    paddingTop: [, , 4],
                    paddingBottom: offset, // Prevent MarketSummary overlap
                  }}
                >
                  <DisplayHeading
                    as="h2"
                    variant="large"
                    gradient
                    css={{ maxWidth: '10em' }}
                  >
                    Buy, sell and trade crypto today
                  </DisplayHeading>
                  <Text
                    as="h1"
                    variant="large"
                    css={{ maxWidth: '28em', marginBottom: 3 }}
                  >
                    Trade with confidence and build your future with Australia’s
                    fastest crypto exchange.
                  </Text>
                  <div
                    css={{
                      width: '100%',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 3,
                    }}
                  >
                    <Button
                      as={Link}
                      href={`${process.env.NEXT_PUBLIC_ONBOARDING_URL}?from=marketing_header`}
                      variant="brand"
                    >
                      Get started
                    </Button>
                    <Button
                      as={Link}
                      href={`${process.env.NEXT_PUBLIC_PRODUCT_URL}/buy-sell`}
                    >
                      View exchange
                    </Button>
                  </div>
                  <div>
                    <GoogleStars />
                    <Link
                      unstyled
                      href="https://www.btcmarkets.net/blog/award-winning-australian-digital-currency-exchange"
                    >
                      <div
                        css={{
                          marginTop: 4,
                          display: 'flex',
                          borderWidth: 1,
                          borderStyle: 'solid',
                          borderColor: 'zinc.300',
                          borderRadius: '12px',
                          padding: 1,
                          [darkColorMode]: {
                            borderColor: 'zinc.700',
                          },
                        }}
                      >
                        <div
                          css={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'white',
                            borderRadius: 3,
                            paddingLeft: 2,
                            paddingRight: 3,
                            alignItems: 'center',
                            [darkColorMode]: {
                              backgroundColor: 'zinc.800',
                            },
                          }}
                        >
                          <div css={{ paddingRight: 2 }}>
                            <Image
                              alt="Blockchain Australia"
                              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/badges/blockchain-australia-inline.webp`}
                              width="41"
                              height="32"
                            />
                          </div>
                          <Label as="span" variant="small" bold>
                            2022 Digital Exchange of the Year
                          </Label>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                css={{
                  width: ['100%', , '35%'],
                  paddingLeft: 3,
                  paddingRight: 3,
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <HeroVideoLoader />
              </div>
            </div>
          </Section>
        </HeaderBlock>
      }
      css={{ color: 'zinc.800' }}
    >
      {process.env.NEXT_PUBLIC_HIDE_SUMMARY === 'true' ? (
        <div
          css={{
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            borderBottomColor: 'zinc.300',
            [darkColorMode]: {
              borderBottomColor: 'zinc.600',
            },
          }}
        />
      ) : (
        <div>
          <ErrorBoundary
            fallback={
              <Section>
                <ErrorFallback
                  css={{
                    width: '100%',
                    height: '510px',
                  }}
                />
              </Section>
            }
          >
            <MarketsSummary qty={MARKETS_SUMMARY_TABLE_QTY} />
          </ErrorBoundary>
        </div>
      )}

      <Section
        size="small"
        css={{
          paddingTop: [5, , 6],
          paddingBottom: 0,
          textAlign: 'center',
        }}
      >
        <DisplayHeading
          as="h2"
          variant="small"
          gradient
          css={{ maxWidth: '12em', marginBottom: 5 }}
        >
          Why BTC Markets?
        </DisplayHeading>
        <IconColumnContainer css={{ paddingTop: [0, , 4] }}>
          <IconColumn
            title="Security"
            description="Multiple layers of account security, 2FA, address whitelisting, Biometrics."
            icon={IconLock}
          />
          <IconColumn
            title="Speed"
            description="Fast trade executions with an industry leading uptime of 99.99%."
            icon={IconLightning}
          />
          <IconColumn
            title="Support"
            description="100% Australian-based customer support, OTC desk and VIP Program."
            icon={IconChatDots}
          />
        </IconColumnContainer>
      </Section>

      <IconContentSection
        title="Trade"
        description="Buy, sell and trade crypto with confidence"
        alignImage="right"
        imageProps={{
          height: 414,
          width: 524,
          darkSrc: `${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/trade-dark.webp`,
          lightSrc: `${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/trade-light.webp`,
        }}
        css={{ paddingBottom: [, , , 4] }}
      >
        <IconContentItem
          title="Simple buy & sell options"
          description="Buy and sell cryptocurrency quickly and easily."
          icon={IconUpDown}
        />
        <IconContentItem
          title="Advanced trading"
          description="Access advanced order types including limit, market, stop limit and dollar cost averaging."
          icon={IconChartCandles}
        />
        <IconContentItem
          title="Portfolio tracking"
          description="Track your total asset holdings, values and equity over time."
          icon={IconPieSegment}
        />
        <IconContentItem
          title="Mobile app"
          description="Monitor markets, manage your portfolio, and trade crypto on the go."
          icon={IconMobile}
        />
      </IconContentSection>

      <IconContentSection
        title="Wallet"
        description="Simple and secure wallet services"
        alignImage="left"
        gradient
        imageProps={{
          height: 460,
          width: 524,
          darkSrc: `${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/wallet-dark.webp`,
          lightSrc: `${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/wallet-light.webp`,
        }}
        css={{ paddingBottom: [5, , 6] }}
      >
        <IconContentItem
          title="Secure asset storage"
          description="We use multi-signature technology to securely store your assets."
          icon={IconSafe}
        />
        <IconContentItem
          title="Assets held in Australia"
          description="100% Australian-based custody of your assets."
          icon={IconLocation}
        />
        <IconContentItem
          title="Multi-coin wallet"
          description="Store multiple assets simultaneously in one wallet."
          icon={IconWallet}
        />
        <IconContentItem
          title="Fast funding"
          description="Credit your wallet with AUD in seconds using Osko PayID."
          icon={IconImport}
        />
      </IconContentSection>

      <Section
        css={{
          backgroundColor: 'zinc.50',
          [darkColorMode]: {
            backgroundColor: 'zinc.800',
          },
          paddingTop: [5, , 6],
          paddingBottom: 0,
          textAlign: 'center',
        }}
      >
        <Label variant="large" css={{ marginBottom: 3 }}>
          VIP Program
        </Label>
        <Heading as="h2" variant="h1" css={{ maxWidth: '14em' }}>
          When you need more than just a crypto exchange
        </Heading>
        <Paragraph variant="medium" css={{ maxWidth: '100%' }}>
          Access world-class APIs, a lower fee structure and a dedicated Account
          Manager.
        </Paragraph>
        <div
          css={{
            width: '100%',
            maxWidth: '80rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            gap: 4,
            paddingTop: 4,
            marginBottom: 5,
          }}
        >
          <VIPIconContentItem icon={IconLightning} text="API integrations" />
          <VIPIconContentItem icon={IconCoins} text="Lower fees" />
          <VIPIconContentItem
            icon={IconUser}
            text="Dedicated Account Manager"
          />
        </div>
        <Button as={Link} href="/vip" css={{ marginBottom: 5 }}>
          Learn more
          <span css={{ fontSize: '0rem' }}> about our VIP Program</span>
        </Button>
        <div
          css={{
            maxWidth: '100%',
            width: '1082px',
            height: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <ColorSchemeImage
            alt="VIP Program"
            width="1082"
            height="492"
            darkSrc={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/vip-program-dark.webp`}
            lightSrc={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/vip-program-light.webp`}
          />
        </div>
      </Section>

      <StartTradingSection />

      <Section
        css={{
          paddingTop: [5, , 6],
          paddingBottom: 0,
          overflow: 'hidden',
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderBottomColor: 'zinc.300',
          [darkColorMode]: {
            borderBottomColor: 'zinc.700',
          },
        }}
      >
        <CellContainer css={{ alignItems: 'center', gap: 4 }}>
          <Cell
            css={{
              maxWidth: '52rem',
              display: 'flex',
              flexDirection: 'column',
              flexBasis: ['100%', , , '428px'],
              flexGrow: 1,
              alignItems: ['center', , , 'flex-start'],
              textAlign: ['center', , , 'left'],
              marginBottom: 4,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <DisplayHeading as="h2" variant="small" gradient>
              Trade on the go
            </DisplayHeading>
            <Paragraph variant="medium" css={{ marginBottom: [4, 4] }}>
              Place simple and advanced trades on the go with the BTC Markets
              app. You can also manage your portfolio, monitor prices, and track
              market movements, anywhere, anytime.
            </Paragraph>
            <div
              css={{
                display: 'flex',
                gap: 4,
                flexWrap: 'wrap',
                justifyContent: ['center', 'flex-start'],
                marginBottom: 4,
                '> a': {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  textDecoration: 'none',
                },
              }}
            >
              <Link
                unstyled
                href="https://apps.apple.com/au/app/btc-markets/id1546957530"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="Download the BTC Markets app on the App Store"
                  height="40"
                  width="120"
                  src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/badges/appleStore.webp`}
                />
                <RatingStars rating={ratingsConfig.mobileApp.ios} />
              </Link>
              <Link
                unstyled
                href="https://play.google.com/store/apps/details?id=com.btcmarket.btcm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="Get the BTC Markets app on Google Play"
                  height="40"
                  width="135"
                  src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/badges/googlePlay.webp`}
                />
                <RatingStars rating={ratingsConfig.mobileApp.android} />
              </Link>
            </div>
            <Label
              as={Link}
              variant="large"
              href="/mobile-app"
              css={{
                padding: 0,
                whiteSpace: 'nowrap',
              }}
            >
              Learn more
              <span
                css={{
                  width: 0,
                  height: 0,
                  display: 'inline-block',
                  overflow: 'hidden',
                }}
              >
                {' '}
                about the BTC Markets app
              </span>
            </Label>
          </Cell>
          <Cell
            css={{
              width: '425px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <ColorSchemeImage
              alt="Trade crypto on the go with the BTC Markets app"
              width="425"
              height="474"
              darkSrc={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/trade-on-the-go-dark.webp`}
              lightSrc={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/trade-on-the-go-light.webp`}
            />
          </Cell>
        </CellContainer>
      </Section>

      <ContentCards articles={articles} />

      <CTACreateAccount />
    </Layout>
  );
};

IndexPage.propTypes = {
  articles: PropTypes.array,
  MarketsSummary: PropTypes.elementType.isRequired,
};

export default IndexPage;
