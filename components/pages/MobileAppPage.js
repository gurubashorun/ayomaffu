import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import Paragraph from '@ngin-io/components/public/components/Paragraph/Paragraph.js';
import TextList from '@ngin-io/components/public/components/TextList/TextList.js';
import PropTypes from 'prop-types';
import AppStoreButtons from '../AppStoreButtons';
import CTACreateAccount from '../CTACreateAccount';
import Cell from '../Cell';
import CellContainer from '../CellContainer';
import ColorSchemeImage from '../ColorSchemeImage';
import DisplayHeading from '../DisplayHeading';
import Expandable from '../Expandable';
import HeaderBlock from '../HeaderBlock';
import Layout from '../Layout';
import Link from '../Link';
import Section from '../Section';

const MobileAppCell = (props) => {
  return (
    <Cell
      {...props}
      css={{
        width: ['100%', , '47%'],
        maxWidth: '100%',
        height: '100%',
        alignSelf: 'center',
      }}
    />
  );
};

const ImageSection = ({
  alignImage,
  children,
  imageProps,
  title,
  ...props
}) => {
  return (
    <Section {...props} size="small" backgroundStyle="solid">
      <div
        css={{
          width: '100%',
          paddingBottom: [5, , 6],
        }}
      >
        <CellContainer>
          <MobileAppCell css={{ paddingBottom: 4 }}>
            <Heading as="h3" variant="h2">
              {title}
            </Heading>
            {children}
          </MobileAppCell>
          <MobileAppCell
            css={{
              order: alignImage === 'left' ? -1 : [-1, , 1],
            }}
          >
            <div
              css={{
                maxWidth: `${imageProps.width}px`,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <ColorSchemeImage {...imageProps} alt={title} />
            </div>
          </MobileAppCell>
        </CellContainer>
      </div>
    </Section>
  );
};

ImageSection.propTypes = {
  alignImage: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  imageProps: PropTypes.shape({
    darkSrc: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    lightSrc: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

const MobileAppPage = () => {
  return (
    <Layout
      header={
        <HeaderBlock>
          <Section
            align="left"
            backgroundStyle="gradient"
            css={{
              paddingTop: 5,
            }}
          >
            <CellContainer>
              <MobileAppCell>
                <DisplayHeading
                  as="h1"
                  variant="medium"
                  gradient
                  css={{
                    maxWidth: '9em',
                    marginBottom: [4, , , 5],
                  }}
                >
                  Trade crypto on the go with the BTC Markets app
                </DisplayHeading>
                <AppStoreButtons />
              </MobileAppCell>
              <MobileAppCell css={{ display: ['none', , 'inline-block'] }}>
                <div css={{ maxWidth: '494px' }}>
                  <ColorSchemeImage
                    alt="Trade crypto on the go with the BTC Markets app"
                    width="494"
                    height="481"
                    darkSrc={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/mobile-app/header-dark.webp`}
                    lightSrc={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/mobile-app/header-light.webp`}
                  />
                </div>
              </MobileAppCell>
            </CellContainer>
          </Section>
        </HeaderBlock>
      }
    >
      <Section
        backgroundStyle="solid"
        css={{
          paddingTop: 5,
        }}
      >
        <div
          css={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: ['flex-start', , 'center'],
            textAlign: ['left', , 'center'],
            paddingTop: [4, , 5],
            paddingBottom: [5, , 6],
          }}
        >
          <Heading as="h2">
            With the BTC Markets app, you can now trade crypto anywhere,
            anytime!
          </Heading>
          <Paragraph variant="large" css={{ maxWidth: '56rem' }}>
            Available for both iOS and Android, the BTC Markets app has a range
            of features, including:
          </Paragraph>
        </div>
      </Section>

      <ImageSection
        title="Quick and easy deposits"
        alignImage="right"
        imageProps={{
          width: 358,
          height: 422,
          darkSrc: `${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/mobile-app/quick-deposits-dark.webp`,
          lightSrc: `${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/mobile-app/quick-deposits-light.webp`,
        }}
      >
        <Paragraph variant="medium">
          Deposit AUD to your account via Osko or BPAY, or deposit crypto from
          external wallets to start trading cryptocurrency.
        </Paragraph>
      </ImageSection>

      <ImageSection
        title="Simple and advanced trading options"
        alignImage="left"
        imageProps={{
          width: 359,
          height: 421,
          darkSrc: `${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/mobile-app/simple-and-advanced-trading-options-dark.webp`,
          lightSrc: `${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/mobile-app/simple-and-advanced-trading-options-light.webp`,
        }}
      >
        <Paragraph variant="medium">
          Buy and sell cryptocurrency quickly and easily with our Simple
          Buy/Sell feature, or place more sophisticated orders with our Advanced
          settings, including:
        </Paragraph>
        <TextList>
          <Paragraph as="li" variant="medium">
            <strong>Limit:</strong> Place a buy or sell order at a specific
            price.
          </Paragraph>
          <Paragraph as="li" variant="medium">
            <strong>Market:</strong> Buy or sell at the best available price.
          </Paragraph>
          <Paragraph as="li" variant="medium">
            <strong>Stop Limit:</strong> Place a buy or sell limit order once a
            specific price is met.
          </Paragraph>
        </TextList>
      </ImageSection>

      <ImageSection
        title="Monitor prices and market movements"
        alignImage="right"
        imageProps={{
          width: 331,
          height: 435,
          darkSrc: `${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/mobile-app/monitor-prices-and-market-movements-dark.webp`,
          lightSrc: `${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/mobile-app/monitor-prices-and-market-movements-light.webp`,
        }}
      >
        <Paragraph variant="medium">
          Keep track of cryptocurrency prices and market movements on the BTC
          Markets exchange, and personalise it with our Watch List feature.
        </Paragraph>
      </ImageSection>

      <ImageSection
        title="Real-time portfolio management"
        alignImage="left"
        imageProps={{
          width: 348,
          height: 434,
          darkSrc: `${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/mobile-app/real-time-portfolio-management-dark.webp`,
          lightSrc: `${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/mobile-app/real-time-portfolio-management-light.webp`,
        }}
      >
        <Paragraph variant="medium">
          View your portfolio’s holdings, values, total equity, trade history,
          and buy/sell order status on the run.
        </Paragraph>
      </ImageSection>

      <ImageSection
        title="Industry-leading security protection"
        alignImage="right"
        imageProps={{
          width: 358,
          height: 424,
          darkSrc: `${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/mobile-app/industry-leading-security-protection-dark.webp`,
          lightSrc: `${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/mobile-app/industry-leading-security-protection-light.webp`,
        }}
      >
        <Paragraph variant="medium">
          Enjoy easy and secure on-going access to your account using PIN, or
          your device&apos;s inbuilt biometric security.
        </Paragraph>
        <Paragraph variant="medium">
          With BTC Markets, your account security is our top priority. The app
          has the same industry-recognised, best security standards that we
          implement on our web app, including SSO login with two-factor
          authentication (2FA), personal data encryption, internal control
          limits, and off-site cold wallet storage.
        </Paragraph>
      </ImageSection>

      <CTACreateAccount />

      <Section
        size="small"
        css={{
          paddingTop: 6,
          paddingLeft: 3,
          paddingRight: 3,
        }}
      >
        <div
          css={{
            width: '100%',
            paddingTop: 4,
            marginBottom: 5,
          }}
        >
          <Heading
            as="h2"
            css={{
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Frequently asked questions
          </Heading>
          <Expandable title="Where can I download the app?">
            <Heading as="h4">iOS:</Heading>
            <Paragraph variant="medium">
              You can download the app for iPhone devices from the{' '}
              <Link
                href="https://apps.apple.com/au/app/btc-markets/id1546957530"
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store
              </Link>
              .
            </Paragraph>
            <Heading as="h4">Android:</Heading>
            <Paragraph variant="medium">
              You can download the app for Android devices from the{' '}
              <Link
                href="https://play.google.com/store/apps/details?id=com.btcmarket.btcm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play
              </Link>
              .
            </Paragraph>
          </Expandable>
          <Expandable title="Why can't I get the app on my device?">
            <Paragraph variant="medium">
              The mobile app is only available for iPhones with an operating
              system of iOS 14 or later, and Android devices running Android OS
              8 or higher. Some display issues may be observed with older
              operating systems.
            </Paragraph>
            <Paragraph variant="medium">
              You may not be able to download the app due to insufficient
              storage space on your device, or if you are in a sanctioned
              country, or a country where cryptocurrency transactions are
              illegal.
            </Paragraph>
          </Expandable>
          <Expandable title="Is the app secure? What if I lose my phone?">
            <Paragraph variant="medium">
              With BTC Markets, your account security is our top priority. Our
              mobile app uses the same industry-recognised, best security
              standards as our web app. We also have some mobile app-specific
              security features to give you peace of mind:{' '}
            </Paragraph>
            <ul>
              <Paragraph as="li" variant="medium">
                The app uses our web-based Single Sign-on (SSO) authentication
                that monitors unusual logins. Any logins identified as unusual
                will be sent an authorisation code in order to proceed with the
                login.
              </Paragraph>
              <Paragraph as="li" variant="medium">
                The app offers PIN and device native biometrics for ongoing
                authentication.
              </Paragraph>
              <Paragraph as="li" variant="medium">
                The app auto-locks after 2 minutes, if backgrounded for 2
                minutes, or the phone goes to sleep for 2 minutes. PIN or
                biometrics must be used again to access your account.
              </Paragraph>
              <Paragraph as="li" variant="medium">
                Customers only have 3 PIN attempts before they have to log in
                using email/username and password again.
              </Paragraph>
              <Paragraph as="li" variant="medium">
                Users cannot login with PIN or biometrics if the app is inactive
                for 7 days. Users will follow the standard login procedure using
                their email/username and password.
              </Paragraph>
            </ul>
          </Expandable>
          <Expandable title="Can I withdraw using the app?">
            <Paragraph variant="medium">
              The withdrawals feature is not available in the first version of
              the mobile app. This feature is currently in development and
              should be available soon.
            </Paragraph>
            <Paragraph variant="medium">
              All crypto withdrawals will need to be completed via the web
              version of BTC Markets. Users can access the web app via their
              browser or via the{' '}
              <Link href="https://www.btcmarkets.net/">www.btcmarkets.net</Link>{' '}
              button on the Account screen in the app.
            </Paragraph>
          </Expandable>
          <Expandable title="What order types are available in the App?">
            <ul>
              <Paragraph as="li" variant="medium">
                Market Order: An order that executes at the best available
                bid/ask price.
              </Paragraph>
              <Paragraph as="li" variant="medium">
                Limit Order: An order that is placed to execute at a specific
                price.
              </Paragraph>
              <Paragraph as="li" variant="medium">
                Stop Limit Order: A limit order that is only placed when a
                trigger price is met or passed.
              </Paragraph>
            </ul>
          </Expandable>
          <Expandable title="How do I place a trade via the app?">
            <Paragraph variant="medium">
              Trades are placed via the Buy/Sell tab. You can choose between a
              simple Buy/Sell order (market order), or tap the “Advanced” tab
              for more order types and market details.
            </Paragraph>
            <Paragraph variant="medium">
              For a more detailed guide on how to place orders via the app,
              please see our help article:{' '}
              <Link
                href="https://support.btcmarkets.net/hc/en-us/articles/5011671840025-How-To-Place-A-Buy-Sell-Trade-Via-The-Mobile-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                How To Place A Buy/Sell Trade Via The Mobile App
              </Link>
              .
            </Paragraph>
          </Expandable>
          <Expandable title="How do I know that my trade has been successful?">
            <Paragraph variant="medium">
              After clicking the “Confirm” button for your order, you will be
              shown a screen advising the order status.{' '}
            </Paragraph>
            <Paragraph variant="medium">
              Your portfolio and available balance will also be automatically
              updated based on your latest order.
            </Paragraph>
            <Paragraph variant="medium">
              You can check order statuses and review order history via the
              “Orders” section on the Account tab.
            </Paragraph>
            <Paragraph variant="medium">
              Current open orders are also listed at the bottom of the Advanced
              Buy/Sell screen (only open orders of the current selected market
              are shown).
            </Paragraph>
          </Expandable>
          <Expandable title="Where can I see my recent orders and transactions?">
            <Heading as="h4">Orders:</Heading>
            <Paragraph variant="medium">
              You can view your previous 50 orders by navigating to the
              ‘Account’ tab on the bottom right of the app, and tapping on
              ‘Orders’. You will be shown a summary list of the last 50 orders
              made on your account. You can select any of these orders to see
              more details.
            </Paragraph>
            <Heading as="h4">Transactions:</Heading>
            <Paragraph variant="medium">
              Unlike orders, transactions also include: deposits, withdrawals,
              rewards, airdrops etc. You can view your previous 50 transactions
              by navigating to the ‘Account’ tab on the bottom right of the app,
              and tapping on ‘Transaction History’. You will be shown a summary
              list of the last 50 transactions on your account. You can select
              any of these transactions to see more details.
            </Paragraph>
          </Expandable>
          <Expandable title="What is the Watch List?">
            <Paragraph variant="medium">
              We understand that users may not be interested in all the markets
              listed here at BTC Markets. The Watch List allows you to focus on
              only the markets that are of most interest to you.
            </Paragraph>
            <Paragraph variant="medium">
              This means you can spend less time scrolling and more time
              trading.
            </Paragraph>
            <Paragraph variant="medium">
              Adding and Removing markets from your watch list is easy, just
              follow our simple guide:{' '}
              <Link
                href="https://support.btcmarkets.net/hc/en-us/articles/5009991746073-Mobile-App-How-To-Use-The-Watch-List"
                target="_blank"
                rel="noopener noreferrer"
              >
                How To Use The Watch List
              </Link>
              .
            </Paragraph>
          </Expandable>
          <Expandable title="Where can I provide feedback or report a bug in the app?">
            <Paragraph variant="medium">
              Your feedback helps us improve the experience for hundreds of
              thousands of our customers, and influences the future direction of
              the app&apos;s design and functionality.
            </Paragraph>
            <Paragraph variant="medium">
              You can provide feedback via our{' '}
              <Link
                href="https://support.btcmarkets.net/hc/en-us/requests/new?ticket_form_id=4588141566745"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mobile App feedback form
              </Link>
              . This is also available via the ‘Provide Feedback’ button in the
              Account tab of the mobile app.
            </Paragraph>
            <Paragraph variant="medium">
              You may also submit crash reports if the app crashes while in use.
              Any reports submitted will help the development team identify
              issue to be resolved.
            </Paragraph>
          </Expandable>
        </div>
      </Section>
    </Layout>
  );
};

export default MobileAppPage;
