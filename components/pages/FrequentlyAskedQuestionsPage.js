/* eslint-disable react/no-unescaped-entities */
import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import Paragraph from '@ngin-io/components/public/components/Paragraph/Paragraph.js';
import TextList from '@ngin-io/components/public/components/TextList/TextList.js';
import Article from '../Article';
import Cell from '../Cell';
import CellContainer from '../CellContainer';
import DisplayHeading from '../DisplayHeading';
import Expandable from '../Expandable';
import HeaderBlock from '../HeaderBlock';
import Layout from '../Layout';
import Link from '../Link';
import Section from '../Section';
import URLHashList from '../URLHashList';

const FrequentlyAskedQuestionsPage = () => {
  return (
    <Layout
      header={
        <HeaderBlock>
          <Section
            size="small"
            backgroundStyle="gradient"
            css={{
              paddingTop: [5, , , 6],
              paddingBottom: [5, , , 6],
              textAlign: 'center',
            }}
          >
            <DisplayHeading as="h1" variant="small" gradient>
              Frequently Asked Questions
            </DisplayHeading>
          </Section>
        </HeaderBlock>
      }
    >
      <Section
        align="left"
        backgroundStyle="solid"
        css={{
          paddingBottom: 5,
        }}
      >
        <Expandable title="Trading">
          <CellContainer>
            <Cell
              order={1}
              css={{
                display: ['none', , 'flex'],
                width: '40%',
                paddingTop: 3,
              }}
            >
              <URLHashList>
                <Link href="#how-do-i-buy-digital-assets">
                  How do I buy digital assets?
                </Link>
                <Link href="#how-do-i-sell-digital-assets">
                  How do I sell digital assets?
                </Link>
                <Link href="#what-is-the-order-book">
                  What is the Order Book?
                </Link>
                <Link href="#what-is-a-market-order">
                  What is a Market Order?
                </Link>
                <Link href="#what-is-a-limit-order">
                  What is a Limit Order?
                </Link>
                <Link href="#what-is-a-stop-order">What is a Stop Order?</Link>
                <Link href="#what-is-a-stop-limit-order">
                  What is a Stop Limit Order?
                </Link>
                <Link href="#what-is-a-take-profit-order">
                  What is a Take Profit Order?
                </Link>
                <Link href="#what-are-advanced-limit-orders">
                  What are Advanced Limit Orders?
                </Link>
                <Link href="#why-is-my-order-stuck-as-an-open-order">
                  Why is my order stuck as an Open Order?
                </Link>
                <Link href="#i-have-waited-a-long-time-and-my-order-is-still-not-completed">
                  I have waited a long time and my order is still not completed?
                </Link>
                <Link href="#can-i-cancel-a-trade">
                  How are large instructions handled?
                </Link>
              </URLHashList>
            </Cell>
            <Cell
              order={0}
              css={{
                width: ['100%', , '55%'],
              }}
            >
              <Article id="how-do-i-buy-digital-assets">
                <Heading as="h3" variant="h4">
                  How do I buy digital assets?
                </Heading>
                <Paragraph variant="medium">
                  Log in to your BTC Markets account. Click on Account, then
                  Deposit for payments options.
                </Paragraph>
                <Paragraph variant="medium">
                  We support both BPay and instant OSKO payments. Include your
                  BTC Markets deposit reference in your bank message to avoid
                  delays.
                </Paragraph>
                <Paragraph variant="medium">
                  With funds in your account, you can place a buy order.
                </Paragraph>
                <Paragraph variant="medium">
                  Click on Buy/Sell in the top menu.
                </Paragraph>
                <Paragraph variant="medium">
                  The easiest and quickest way to buy any digital asset is to
                  select a{' '}
                  <Link href="#what-is-a-market-order">Market Order</Link>.
                </Paragraph>
                <Paragraph variant="medium">
                  For large instructions over $AUD100k, please contact our{' '}
                  <Link
                    href="https://support.btcmarkets.net/hc/en-us/requests/new?ticket_form_id=360004218213"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OTC support team
                  </Link>
                  .
                </Paragraph>
              </Article>
              <Article id="how-do-i-sell-digital-assets">
                <Heading as="h3" variant="h4">
                  How do I sell digital assets?
                </Heading>
                <Paragraph variant="medium">
                  Log in to your BTC Markets account and click Buy/Sell. Scroll
                  down to the red lettered Sell form and enter the volume and
                  price.
                </Paragraph>
                <Paragraph variant="medium">
                  The easiest and quickest way to sell any digital asset is to
                  select a{' '}
                  <Link href="#what-is-a-market-order">Market Order</Link>.
                </Paragraph>
                <Paragraph variant="medium">
                  For large instructions over $AUD100k, please contact our{' '}
                  <Link
                    href="https://support.btcmarkets.net/hc/en-us/requests/new?ticket_form_id=360004218213"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OTC support team
                  </Link>
                  .
                </Paragraph>
              </Article>
              <Article id="what-is-the-order-book">
                <Heading as="h3" variant="h4">
                  What is the Order Book?
                </Heading>
                <Paragraph variant="medium">
                  The order book is a list of all buy and sell orders currently
                  placed.
                </Paragraph>
              </Article>
              <Article id="what-is-a-market-order">
                <Heading as="h3" variant="h4">
                  What is a Market Order?
                </Heading>
                <Paragraph variant="medium">
                  A market order will buy or sell immediately, at the best
                  available price.
                </Paragraph>
                <Paragraph variant="medium">
                  Check prices in the order book, before placing your trade.
                </Paragraph>
                <Paragraph variant="medium">
                  To create a market order, scroll down to the Market Order tab
                  on the Buy/Sell page.
                </Paragraph>
              </Article>
              <Article id="what-is-a-limit-order">
                <Heading as="h3" variant="h4">
                  What is a Limit Order?
                </Heading>
                <Paragraph variant="medium">
                  When you place a limit order, you decide your price to buy or
                  sell.
                </Paragraph>
                <Paragraph variant="medium">
                  To create a limit order, scroll down to the Limit Order tab on
                  the Buy/Sell page.
                </Paragraph>
                <Paragraph variant="medium">
                  It is added to the order book for someone to then submit a
                  matching order.
                </Paragraph>
              </Article>
              <Article id="what-is-a-stop-order">
                <Heading as="h3" variant="h4">
                  What is a Stop Order?
                </Heading>
                <Paragraph variant="medium">
                  A stop order is an enhanced order type. It allows traders to
                  automatically place a market order, once the stop price has
                  been met.
                </Paragraph>
                <Paragraph variant="medium">
                  The order will execute at the market price until it is fully
                  matched, or there are no other orders to match against.
                </Paragraph>
                <Paragraph variant="medium">
                  It is currently available only for Sell orders.
                </Paragraph>
                <Paragraph variant="medium">
                  To create a stop order, scroll down to the Stop Order tab on
                  the Buy/Sell page.
                </Paragraph>
                <Paragraph variant="medium">
                  Please ensure you read and understand the{' '}
                  <Link
                    href="https://support.btcmarkets.net/hc/en-us/articles/360019557734-Introduction-to-Stop-Orders"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Support Guide
                  </Link>{' '}
                  before placing any enhanced order.
                </Paragraph>
              </Article>
              <Article id="what-is-a-stop-limit-order">
                <Heading as="h3" variant="h4">
                  What is a Stop Limit Order?
                </Heading>
                <Paragraph variant="medium">
                  Stop limit orders are an enhanced order type. It allow traders
                  to place orders that automatically execute when price
                  conditions are met.
                </Paragraph>
                <Paragraph variant="medium">
                  This limit order will execute at the market price until either
                  it is fully matched or the market price moves beyond the limit
                  order.
                </Paragraph>
                <Paragraph variant="medium">
                  To create a limit order, scroll down to the ‘Stop Limit’ tab
                  on the Buy/Sell page.
                </Paragraph>
                <Paragraph variant="medium">
                  Please ensure you read and understand the{' '}
                  <Link
                    href="https://support.btcmarkets.net/hc/en-us/articles/360002061847"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Support Guide
                  </Link>{' '}
                  before placing any enhanced order.
                </Paragraph>
              </Article>
              <Article id="what-is-a-take-profit-order">
                <Heading as="h3" variant="h4">
                  What is a Take Profit Order?
                </Heading>
                <Paragraph variant="medium">
                  Take profit orders are an enhanced order type, used to exit
                  your trade at a profitable position.
                </Paragraph>
                <Paragraph variant="medium">
                  Take profit orders can only be set above the current market
                  price. It allows a trader to automatically place a market
                  order, once the take price has been met.
                </Paragraph>
                <Paragraph variant="medium">
                  It executes at the market price until it is fully matched, or
                  there are no other orders to be matched against.
                </Paragraph>
                <Paragraph variant="medium">
                  To create a Take Profit order, scroll down to the ‘Take
                  Profit’ tab on the Buy/Sell page.
                </Paragraph>
                <Paragraph variant="medium">
                  Please ensure you read and understand the{' '}
                  <Link
                    href="https://support.btcmarkets.net/hc/en-us/articles/360019558294-Introduction-to-Take-Profit-Orders"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Support Guide
                  </Link>{' '}
                  before placing any enhanced order.
                </Paragraph>
              </Article>
              <Article id="what-are-advanced-limit-orders">
                <Heading as="h3" variant="h4">
                  What are Advanced Limit Orders?
                </Heading>
                <Paragraph variant="medium">
                  BTC Markets currently supports Time-in-Force and Post-Only
                  orders.
                </Paragraph>
                <Paragraph variant="medium">
                  Time-in-force orders allow traders to control the amount of
                  time an order is active, before it is either executed or
                  expires.
                </Paragraph>
                <Paragraph variant="medium">
                  Three time-in-force orders are explained in our{' '}
                  <Link
                    href="https://support.btcmarkets.net/hc/en-us/articles/360038089793-Advanced-Limit-Orders"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Support Guide
                  </Link>
                  .
                </Paragraph>
                <Paragraph variant="medium">
                  With Post-only options, the order will only be posted to the
                  order book if it does not result in a trade taking place.
                </Paragraph>
                <Paragraph variant="medium">
                  This option is primarily used by market makers and liquidity
                  providers.
                </Paragraph>
                <Paragraph variant="medium">
                  Please ensure you read and understand the{' '}
                  <Link
                    href="https://support.btcmarkets.net/hc/en-us/articles/360038089793-Advanced-Limit-Orders"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Support Guide
                  </Link>{' '}
                  before placing any enhanced order.
                </Paragraph>
              </Article>
              <Article id="why-is-my-order-stuck-as-an-open-order">
                <Heading as="h3" variant="h4">
                  Why is my order stuck as an Open Order?
                </Heading>
                <Paragraph variant="medium">
                  Newly placed orders first go into the order book as an "Open
                  Order".
                </Paragraph>
                <Paragraph variant="medium">
                  When part of your Open Order matches with another user, it
                  becomes a Partially Matched Order.
                </Paragraph>
                <Paragraph variant="medium">
                  When all of your order matches, it becomes a Fully Matched
                  Order or Completed Order.
                </Paragraph>
                <Paragraph variant="medium">
                  Completed orders are removed from the order book.
                </Paragraph>
              </Article>
              <Article id="i-have-waited-a-long-time-and-my-order-is-still-not-completed">
                <Heading as="h3" variant="h4">
                  I have waited a long time and my order is still not completed?
                </Heading>
                <Paragraph variant="medium">
                  If your trade has not completed, check the status via the Open
                  Order tab on the Buy/Sell page.
                </Paragraph>
                <Paragraph variant="medium">
                  Review the price to see if it's near market average. You may
                  have to <Link href="#can-i-cancel-a-trade">cancel</Link> and
                  resubmit a more competitive offer to quickly match your order.
                  This is all part of trading.
                </Paragraph>
              </Article>
              <Article id="can-i-cancel-a-trade">
                <Heading as="h3" variant="h4">
                  Can I cancel a trade?
                </Heading>
                <Paragraph variant="medium">
                  You may cancel your order before it trades, or if it is a
                  partially matched order.
                </Paragraph>
                <Paragraph variant="medium">
                  Click on Buy/Sell then Open Orders. The cancel button is to
                  the left of Open Orders.
                </Paragraph>
              </Article>
              <Article id="how-are-large-instructions-handled">
                <Heading as="h3" variant="h4">
                  How are large instructions handled?
                </Heading>
                <Paragraph variant="medium">
                  If you wish to buy or sell a large number of digital assets
                  please contact our{' '}
                  <Link
                    href="https://support.btcmarkets.net/hc/en-us/requests/new?ticket_form_id=360004218213"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OTC support team
                  </Link>
                  .
                </Paragraph>
              </Article>
            </Cell>
          </CellContainer>
        </Expandable>

        <Expandable title="Withdrawals & Deposits">
          <CellContainer>
            <Cell
              order={1}
              css={{
                display: ['none', , 'flex'],
                width: '40%',
                paddingTop: 3,
              }}
            >
              <URLHashList>
                <Link href="#how-do-i-withdraw-send-digital-assets">
                  How do I withdraw (send) digital assets?
                </Link>
                <Link href="#how-do-i-deposit-receive-digital-assets">
                  How do I deposit (receive) digital assets?
                </Link>
                <Link href="#why-do-i-have-pending-funds">
                  Why do I have Pending Funds?
                </Link>
                <Link href="#i-have-tried-to-withdraw-but-i-get-the-error-insufficient-funds">
                  I have tried to withdraw but I get the error "Insufficient
                  Funds"?
                </Link>
                <Link href="#why-is-my-digital-asset-withdrawal-pending">
                  Why is my digital asset withdrawal pending?
                </Link>
                <Link href="#i-can-not-see-my-digital-asset-on-the-blockchain">
                  I can't see my digital asset on the blockchain?
                </Link>
                {/*<Link href="#why-has-my-deposit-not-been-credited-to-my-account">*/}
                {/*  Why has my deposit not been credited to my account?*/}
                {/*</Link>*/}
              </URLHashList>
            </Cell>
            <Cell
              order={0}
              css={{
                width: ['100%', , '55%'],
              }}
            >
              <Article id="how-do-i-withdraw-send-digital-assets">
                <Heading as="h3" variant="h4">
                  How do I withdraw (send) digital assets?
                </Heading>
                <Paragraph variant="medium">
                  Log in to BTC Markets, click Account and Withdraw.
                </Paragraph>
                <Paragraph variant="medium">
                  Select your withdrawal type (AUD or crypto) and enter your
                  details.
                </Paragraph>
                <Paragraph variant="medium">
                  For crypto withdrawals, please ensure you enter the correct
                  blockchain address.
                </Paragraph>
                <Paragraph variant="medium">
                  There are daily withdrawal limits for both asset types. Small
                  processing <Link href="/fees">fees</Link> are charged for
                  crypto withdrawal.
                </Paragraph>
              </Article>
              <Article id="how-do-i-deposit-receive-digital-assets">
                <Heading as="h3" variant="h4">
                  How do I deposit (receive) digital assets?
                </Heading>
                <Paragraph variant="medium">
                  Log in to BTC Markets, click Account and Deposit.
                </Paragraph>
                <Paragraph variant="medium">
                  Select your deposit type (AUD or crypto).
                </Paragraph>
                <Paragraph variant="medium">
                  For AUD, we support both BPay and instant OSKO payments.
                  Include your BTC Markets deposit reference in your bank
                  message to avoid delays.
                </Paragraph>
                <Paragraph variant="medium">
                  For crypto, choose the specific digital asset and click
                  Generate Address. You use this address to receive specific
                  digital assets to your BTC Markets account.
                </Paragraph>
              </Article>
              <Article id="why-do-i-have-pending-funds">
                <Heading as="h3" variant="h4">
                  Why do I have Pending Funds?
                </Heading>
                <Paragraph variant="medium">
                  When you create an order, it is entered in the order book and
                  the unmatched money shows as pending.
                </Paragraph>
                <Paragraph variant="medium">
                  Pending funds are released if the order is matched or removed
                  if the order is cancelled.
                </Paragraph>
                <Paragraph variant="medium">
                  On <Link href="#can-i-cancel-a-trade">cancelled orders</Link>,{' '}
                  funds are returned to your balance immediately so you may
                  trade again or withdraw.
                </Paragraph>
              </Article>
              <Article id="i-have-tried-to-withdraw-but-i-get-the-error-insufficient-funds">
                <Heading as="h3" variant="h4">
                  I have tried to withdraw but I get the error "Insufficient
                  Funds"?
                </Heading>
                <Paragraph variant="medium">
                  You can only withdraw funds up to the amount of your available
                  balance.
                </Paragraph>
                <Paragraph variant="medium">
                  If you are getting the error "Insufficient Funds"
                  unexpectedly, you may have some open orders that are holding
                  some funds.
                </Paragraph>
                <Paragraph variant="medium">
                  You may wish to{' '}
                  <Link href="#can-i-cancel-a-trade">cancel</Link> your open
                  orders to be able to be able to withdraw those funds.
                </Paragraph>
                <Paragraph variant="medium">
                  Unprocessed withdrawals or open orders (as indicated by
                  pending funds) can be viewed at your Account page.
                </Paragraph>
              </Article>
              <Article id="why-is-my-digital-asset-withdrawal-pending">
                <Heading as="h3" variant="h4">
                  Why is my digital asset withdrawal pending?
                </Heading>
                <Paragraph variant="medium">
                  First-time user withdrawals are subject to a security check to
                  prevent fraud.
                </Paragraph>
                <Paragraph variant="medium">
                  We manage withdrawals to ensure they are timely processing
                  once cleared by our fraud-prevention systems.
                </Paragraph>
              </Article>
              <Article id="i-can-not-see-my-digital-asset-on-the-blockchain">
                <Heading as="h3" variant="h4">
                  I can't see my digital asset on the blockchain?
                </Heading>
                <Paragraph variant="medium">
                  Please contact our{' '}
                  <Link
                    href="https://support.btcmarkets.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    support team
                  </Link>{' '}
                  and provide details of the transaction. We endeavour to ensure
                  all transactions are completed as quickly as possible.
                </Paragraph>
              </Article>
              {/*<Article id="why-has-my-deposit-not-been-credited-to-my-account">*/}
              {/*  <Heading as="h3" variant="h4">*/}
              {/*    Why has my deposit not been credited to my account?*/}
              {/*  </Heading>*/}
              {/*  <Paragraph variant="medium">*/}
              {/*    Please check how many confirmations are required on the*/}
              {/*    deposit page. Currently we wait for 1 Bitcoin confirmation*/}
              {/*    to credit user accounts.*/}
              {/*  </Paragraph>*/}
              {/*</Article>*/}
            </Cell>
          </CellContainer>
        </Expandable>

        <Expandable title="Security">
          <CellContainer>
            <Cell
              order={1}
              css={{
                display: ['none', , 'flex'],
                width: '40%',
                paddingTop: 3,
              }}
            >
              <URLHashList>
                <Link href="#how-do-i-verify-my-account">
                  How do I verify my account?
                </Link>
                <Link href="#why-must-i-verify-my-account">
                  Why must I verify my account?
                </Link>
                <Link href="#is-btc-markets-safe-and-secure">
                  Is BTC Markets safe and secure?
                </Link>
                <Link href="#how-do-i-enable-additional-security-to-my-account">
                  How do I enable additional security to my account?
                </Link>
                <Link href="#what-is-two-factor-authentication-2fa">
                  What is Two-Factor Authentication (2FA)?
                </Link>
                <Link href="#my-two-factor-code-has-stopped-working-and-i-can-not-log-in">
                  My two-factor code has stopped working and I can't log in?
                </Link>
                <Link href="#i-have-lost-my-phone-or-two-factor-code-and-can-not-log-in">
                  I have lost my phone / two-factor code and can't log in?
                </Link>
                <Link href="#how-do-i-change-my-name-listed-in-my-account">
                  How do I change my name listed in my account?
                </Link>
                <Link href="#how-do-i-change-my-password">
                  How do I change my password?
                </Link>
                <Link href="#how-do-i-change-my-email-address">
                  How do I change my email address?
                </Link>
                <Link href="#should-i-store-my-digital-assets-on-your-site">
                  Should I store my digital assets on your site?
                </Link>
                <Link href="#do-you-manage-a-full-reserve">
                  Do you manage a full reserve?
                </Link>
                <Link href="#btc-markets-holds-the-ISO-27001-certification-what-is-that">
                  BTC Markets holds the ISO 27001 certification. What is that?
                </Link>
              </URLHashList>
            </Cell>
            <Cell
              order={0}
              css={{
                width: ['100%', , '55%'],
              }}
            >
              <Article id="how-do-i-verify-my-account">
                <Heading as="h3" variant="h4">
                  How do I verify my account?
                </Heading>
                <Paragraph variant="medium">
                  To deposit or withdraw to/from your account you must be
                  verified. Verification is usually a quick process but in rare
                  cases, it may take a few days.
                </Paragraph>
                <Paragraph variant="medium">
                  Once logged in, click Account then ID Verification. You will
                  be redirected to{' '}
                  <Link
                    href="https://www.vixverify.com/case_study/btc-markets/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    greenID
                  </Link>
                  , an industry-standard verification service. The easiest and
                  quickest way to verify is to use your passport and driver's
                  license.
                </Paragraph>
                <Paragraph variant="medium">
                  Please contact our{' '}
                  <Link
                    href="https://support.btcmarkets.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    support team
                  </Link>{' '}
                  if you experience any issues.
                </Paragraph>
              </Article>
              <Article id="why-must-i-verify-my-account">
                <Heading as="h3" variant="h4">
                  Why must I verify my account?
                </Heading>
                <Paragraph variant="medium">
                  As a reporting entity, BTC Markets complies with all of its
                  obligations under the Australian AML/CTF legislation. More
                  details can be found on our{' '}
                  <Link href="/regulation">AML/CTF Policy</Link> page.
                </Paragraph>
                <Paragraph variant="medium">
                  We ask our users to verify their accounts as part of our KYC
                  (Know Your Customer) policy. We may also ask for additional
                  documentation to confirm your identity.
                </Paragraph>
              </Article>
              <Article id="is-btc-markets-safe-and-secure">
                <Heading as="h3" variant="h4">
                  Is BTC Markets safe and secure?
                </Heading>
                <Paragraph variant="medium">
                  The security and privacy of client data is our top priority.
                  We run regular reconciliations of funds - twice a day for
                  crypto and hourly for AUD - to ensure we have a full reserve.
                </Paragraph>
                <Paragraph variant="medium">
                  We also apply best practices, with continuous development and
                  enhancement of our security measures.
                </Paragraph>
              </Article>
              <Article id="how-do-i-enable-additional-security-to-my-account">
                <Heading as="h3" variant="h4">
                  How do I enable additional security to my account?
                </Heading>
                <Paragraph variant="medium">
                  We recommend all users{' '}
                  <Link
                    href={`${process.env.NEXT_PUBLIC_PRODUCT_URL}/account/twoFactorAuth`}
                  >
                    enable two factor authentication (2FA)
                  </Link>{' '}
                  on their account for additional security.
                </Paragraph>
              </Article>
              <Article id="what-is-two-factor-authentication-2fa">
                <Heading as="h3" variant="h4">
                  What is Two-Factor Authentication (2FA)?
                </Heading>
                <Paragraph variant="medium">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_PRODUCT_URL}/account/twoFactorAuth`}
                  >
                    Two factor authentication (2FA)
                  </Link>{' '}
                  is an extra layer of security. After submitting your account
                  password, you request a code via the Google Authentication app
                  on your phone. You enter the code on our platform to then
                  access your account.
                </Paragraph>
              </Article>
              <Article id="my-two-factor-code-has-stopped-working-and-i-can-not-log-in">
                <Heading as="h3" variant="h4">
                  My two-factor code has stopped working and I can't log in?
                </Heading>
                <Paragraph variant="medium">
                  The two-factor code is very time sensitive. Even if it is out
                  by a few seconds it may prevent you from accessing your
                  account.
                </Paragraph>
                <Paragraph variant="medium">
                  Please check the time and date on your phone is fully
                  synchronised and accurate.
                </Paragraph>
              </Article>
              <Article id="i-have-lost-my-phone-or-two-factor-code-and-can-not-log-in">
                <Heading as="h3" variant="h4">
                  I have lost my phone / two-factor code and can't log in?
                </Heading>
                <Paragraph variant="medium">
                  Please follow the instructions on the{' '}
                  <Link
                    href={`${process.env.NEXT_PUBLIC_PRODUCT_URL}/two-fa-reset`}
                  >
                    Two-Factor Reset
                  </Link>{' '}
                  page to regain access to your account.
                </Paragraph>
              </Article>
              <Article id="how-do-i-change-my-name-listed-in-my-account">
                <Heading as="h3" variant="h4">
                  How do I change my name listed in my account?
                </Heading>
                <Paragraph variant="medium">
                  In many cases name changes are not possible. Please contact
                  our{' '}
                  <Link
                    href="https://support.btcmarkets.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    support team
                  </Link>
                  and provide details related to the name change.
                </Paragraph>
              </Article>
              <Article id="how-do-i-change-my-password">
                <Heading as="h3" variant="h4">
                  How do I change my password?
                </Heading>
                <Paragraph variant="medium">
                  You can change your password by using the{' '}
                  <Link
                    href={`${process.env.NEXT_PUBLIC_PRODUCT_URL}/account/changepassword`}
                  >
                    Change Password
                  </Link>{' '}
                  page; or if you are unable to log in, the{' '}
                  <Link
                    href={`${process.env.NEXT_PUBLIC_PRODUCT_URL}/forgetPassword`}
                  >
                    Password Reset
                  </Link>{' '}
                  page.
                </Paragraph>
              </Article>
              <Article id="how-do-i-change-my-email-address">
                <Heading as="h3" variant="h4">
                  How do I change my email address?
                </Heading>
                <Paragraph variant="medium">
                  For security reasons, we do not allow email address changes.
                </Paragraph>
                <Paragraph variant="medium">
                  If you want to use another email address, please contact our{' '}
                  <Link
                    href="https://support.btcmarkets.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    support team
                  </Link>{' '}
                  to arrange an account migration.
                </Paragraph>
              </Article>
              <Article id="should-i-store-my-digital-assets-on-your-site">
                <Heading as="h3" variant="h4">
                  Should I store my digital assets on your site?
                </Heading>
                <Paragraph variant="medium">
                  Our clients may confidently entrust their cryptocurrency with
                  us. However, our recommendation is that clients should manage
                  and safely secure their own assets.
                </Paragraph>
                <Paragraph variant="medium">
                  We believe digital asset storage reserves should not be
                  reliant upon a single entity, such as a bank, exchange or
                  third-party wallet management system.
                </Paragraph>
                <Paragraph variant="medium">
                  This philosophy is inherent to the nature of peer-to-peer
                  digital assets.
                </Paragraph>
              </Article>
              <Article id="do-you-manage-a-full-reserve">
                <Heading as="h3" variant="h4">
                  Do you manage a full reserve?
                </Heading>
                <Paragraph variant="medium">
                  We use a cold wallet and hot wallet system to securely manage
                  digital assets.
                </Paragraph>
                <Paragraph variant="medium">
                  We maintain a full reserve and process reconciliations
                  regularly.
                </Paragraph>
                <Paragraph variant="medium">
                  This gives confidence that the funds shown in accounts match
                  what is really in our bank and cold wallets.
                </Paragraph>
                <Paragraph variant="medium">
                  Our encrypted cold wallet storage is off-site in multiple
                  locations. Each location is physically secure and physically
                  diverse.
                </Paragraph>
              </Article>
              <Article id="btc-markets-holds-the-ISO-27001-certification-what-is-that">
                <Heading as="h3" variant="h4">
                  BTC Markets holds the ISO 27001 certification. What is that?
                </Heading>
                <Paragraph variant="medium">
                  The ISO 27001 certification, issued by British Standards
                  Institution (BSI), is an internationally recognised award for
                  Information Security Management Systems protocols.
                </Paragraph>
                <Paragraph variant="medium">
                  The ISO 27001 certificate is highly sought-after by banks and
                  other institutions within the financial services sector.
                </Paragraph>
                <Paragraph variant="medium">
                  It signifies that the entity in question has a robust
                  information security management system that meets the highest
                  of industry standards at a global level.
                </Paragraph>
              </Article>
            </Cell>
          </CellContainer>
        </Expandable>

        <Expandable title="General">
          <CellContainer>
            <Cell
              order={1}
              css={{
                display: ['none', , 'flex'],
                width: '40%',
                paddingTop: 3,
              }}
            >
              <URLHashList>
                <Link href="#what-is-the-blockchain">
                  What is the blockchain?
                </Link>
                <Link href="#what-are-digital-assets">
                  What are digital assets?
                </Link>
                <Link href="#what-is-btc-markets">What is BTC Markets?</Link>
                <Link href="#do-you-allow-vpns">Do you allow VPNs?</Link>
                <Link href="#does-btc-markets-buy-and-sell-digital-assets-from-other-exchanges">
                  Does BTC Markets buy and sell digital assets from other
                  exchanges?
                </Link>
                <Link href="#do-i-need-my-own-wallet">
                  Do I need my own wallet?
                </Link>
                <Link href="#do-you-have-an-api">Do you have an API?</Link>
                <Link href="#can-i-use-this-site-to-assist-with-the-paying-of-ransomware">
                  Can I use this site to assist with the paying of ransomware?
                </Link>
                <Link href="#can-i-use-this-site-to-engage-in-illegal-activities">
                  Can I use this site to engage in illegal activities?
                </Link>
                <Link href="#what-does-the-adca-gold-certification-mean">
                  What does the "ADCA Gold Certification" mean?
                </Link>
              </URLHashList>
            </Cell>
            <Cell
              order={0}
              css={{
                width: ['100%', , '55%'],
              }}
            >
              <Article id="what-is-the-blockchain">
                <Heading as="h3" variant="h4">
                  What is the blockchain?
                </Heading>
                <Paragraph variant="medium">
                  The{' '}
                  <Link
                    href="https://en.wikipedia.org/wiki/Bitcoin#Blockchain"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    blockchain
                  </Link>{' '}
                  is the record of every digital asset ever generated and every
                  transfer from one party to another.
                </Paragraph>
                <Paragraph variant="medium">
                  Each digital asset that is based on the same type of
                  technology as Bitcoin has its own blockchain.
                </Paragraph>
              </Article>
              <Article id="what-are-digital-assets">
                <Heading as="h3" variant="h4">
                  What are digital assets?
                </Heading>
                <Paragraph variant="medium">
                  Bitcoin cryptocurrency is an example of a digital asset. You
                  can send Bitcoin as easily as sending an email.
                </Paragraph>
                <Paragraph variant="medium">
                  Like cash, Bitcoin transactions are irreversible. Bitcoin and
                  other digital assets are traded on exchanges worldwide.
                </Paragraph>
              </Article>
              <Article id="what-is-btc-markets">
                <Heading as="h3" variant="h4">
                  What is BTC Markets?
                </Heading>
                <Paragraph variant="medium">
                  BTC Markets is an Australian marketplace for buyers and
                  sellers to exchange digital assets. We are 100% Australian,
                  privately owned with all staff based in Australia.
                </Paragraph>
                <Paragraph variant="medium">
                  You trade with other users of the site. The price you buy or
                  sell is up to you. The price is influenced by demand and
                  supply from buyers and sellers on this exchange.
                </Paragraph>
                <Paragraph variant="medium">
                  The current price shown is the last price at which a buyer and
                  seller agreed to exchange.
                </Paragraph>
              </Article>
              <Article id="do-you-allow-vpns">
                <Heading as="h3" variant="h4">
                  Do you allow VPNs?
                </Heading>
                <Paragraph variant="medium">
                  We do not specifically disallow the use of VPNs. However, the
                  use of a VPN can cause delays in our identity verification
                  systems. This may also impact the processing of deposits and
                  withdrawals.
                </Paragraph>
                <Paragraph variant="medium">
                  Due to these potential issues we recommend not using a VPN
                  while accessing your BTC Markets account.
                </Paragraph>
              </Article>
              <Article id="does-btc-markets-buy-and-sell-digital-assets-from-other-exchanges">
                <Heading as="h3" variant="h4">
                  Does BTC Markets buy and sell digital assets from other
                  exchanges?
                </Heading>
                <Paragraph variant="medium">
                  No. We only provide a service for our users to safely trade
                  with one another. Our digital assets are sourced with deposits
                  from our users. Some of our users are also liquidity
                  providers.
                </Paragraph>
                <Paragraph variant="medium">
                  See our <Link href="/terms-of-service">Terms of Service</Link>
                  for an explanation of how we work with Liquidity Providers.
                </Paragraph>
              </Article>
              <Article id="do-i-need-my-own-wallet">
                <Heading as="h3" variant="h4">
                  Do I need my own wallet?
                </Heading>
                <Paragraph variant="medium">
                  We offer a managed service. Once you have bought digital
                  assets you may send, receive and store them on our exchange.
                  However, we also recommend that users manage their own funds
                  and withdraw to a personal wallet after purchase.
                </Paragraph>
                <Paragraph variant="medium">
                  There are many third-party wallets to choose from, such as the
                  popular{' '}
                  <Link
                    href="https://blockchain.info/wallet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blockchain Wallet
                  </Link>{' '}
                  for Bitcoin or{' '}
                  <Link
                    href="https://electrum-ltc.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Electrum
                  </Link>{' '}
                  for Litecoin. If you prefer to manage your own wallet service,
                  you may choose to download{' '}
                  <Link
                    href="https://bitcoin.org/en/download"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bitcoin Core
                  </Link>{' '}
                  or{' '}
                  <Link
                    href="https://litecoin.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Litecoin Core
                  </Link>
                  . We recommend you read up on how best to manage your
                  blockchain wallets.
                </Paragraph>
              </Article>
              <Article id="do-you-have-an-api">
                <Heading as="h3" variant="h4">
                  Do you have an API?
                </Heading>
                <Paragraph variant="medium">
                  Yes, we do, and all the documentation and sample code can be
                  found on{' '}
                  <Link
                    href="https://github.com/BTCMarkets/API"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                  .
                </Paragraph>
              </Article>
              <Article id="can-i-use-this-site-to-assist-with-the-paying-of-ransomware">
                <Heading as="h3" variant="h4">
                  Can I use this site to assist with the paying of ransomware?
                </Heading>
                <Paragraph variant="medium">
                  No. The use of our services for the purpose of payment to
                  ransomware is strictly forbidden and is against our{' '}
                  <Link href="/terms-of-service">Terms of Service</Link>.
                </Paragraph>
                <Paragraph variant="medium">
                  Any users found to be using our services for such purpose will
                  have their account terminated.
                </Paragraph>
              </Article>
              <Article id="can-i-use-this-site-to-engage-in-illegal-activities">
                <Heading as="h3" variant="h4">
                  Can I use this site to engage in illegal activities?
                </Heading>
                <Paragraph variant="medium">
                  No. The use of our services to engage in any illegal
                  activities is strictly forbidden and is against our{' '}
                  <Link href="/terms-of-service">Terms of Service</Link>.
                </Paragraph>
                <Paragraph variant="medium">
                  Any users found to be using our services for such purposes
                  will have their account terminated.
                </Paragraph>
              </Article>
              <Article id="what-does-the-adca-gold-certification-mean">
                <Heading as="h3" variant="h4">
                  What does the "ADCA Gold Certification" mean?
                </Heading>
                <Paragraph variant="medium">
                  The Australian Digital Currency Industry Code of Conduct is a
                  voluntary scheme that establishes externally auditable best
                  practice standards for businesses operating in the Australian
                  Digital Currency industry.
                </Paragraph>
                <Paragraph variant="medium">
                  The Code of Conduct is administered by the Australian Digital
                  Currency & Commerce Association and is available for adoption
                  by businesses operating in Australia that provide or
                  facilitate the:
                </Paragraph>
                <TextList>
                  <Paragraph as="li" variant="medium">
                    purchase or sale of a Digital Currency; or
                  </Paragraph>
                  <Paragraph as="li" variant="medium">
                    purchase or sale of a fiat currency in connection with a
                    Digital Currency; or
                  </Paragraph>
                  <Paragraph as="li" variant="medium">
                    storage of a Digital Currency.
                  </Paragraph>
                </TextList>
                <Paragraph variant="medium">
                  The Code of Conduct establishes Best Practice Standards
                  covering:
                </Paragraph>
                <TextList>
                  <Paragraph as="li" variant="medium">
                    reputation and general business conduct;
                  </Paragraph>
                  <Paragraph as="li" variant="medium">
                    consumer protection; and,
                  </Paragraph>
                  <Paragraph as="li" variant="medium">
                    AML/CTF obligations.
                  </Paragraph>
                </TextList>
                <Paragraph variant="medium">
                  ADCA Certification means that the participating Digital
                  Currency Business has been assessed to have business
                  processes, systems and policies in place that will ensure
                  consistent compliance with the Code of Conduct, including the
                  Best Practice Standards. Compliance with the Code of Conduct
                  is independently reviewed every two years by an ADCA approved
                  external auditor and self-certified every other year.
                </Paragraph>
                <Paragraph variant="medium">
                  BTC Markets is a member of ADCA and has held ADCA
                  Certification under this Code of Conduct since February 2018.
                  The full text of the Australian Digital Currency Industry Code
                  of Conduct is{' '}
                  <Link
                    href="https://blockchainaustralia.org/wp-content/uploads/2019/08/Digital-Currency-Industry-Code-of-Conduct-July-2019.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    available here
                  </Link>{' '}
                  (PDF).
                </Paragraph>
              </Article>
            </Cell>
          </CellContainer>
        </Expandable>
      </Section>
    </Layout>
  );
};

export default FrequentlyAskedQuestionsPage;
