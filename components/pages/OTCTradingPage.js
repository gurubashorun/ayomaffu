import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import Paragraph from '@ngin-io/components/public/components/Paragraph/Paragraph.js';
import TextList from '@ngin-io/components/public/components/TextList/TextList.js';
import Article from '../Article';
import CTACreateAccount from '../CTACreateAccount';
import Cell from '../Cell';
import CellContainer from '../CellContainer';
import DisplayHeading from '../DisplayHeading';
import HeaderBlock from '../HeaderBlock';
import Layout from '../Layout';
import Section from '../Section';

const OTCTradingPage = () => {
  return (
    <Layout
      header={
        <HeaderBlock>
          <Section
            align="left"
            backgroundStyle="gradient"
            css={{
              paddingTop: [5, , , 6],
              paddingBottom: [5, , , 6],
              textAlign: 'left',
            }}
          >
            <DisplayHeading as="h1" variant="small" gradient>
              OTC Trading
            </DisplayHeading>
            <Paragraph variant="large">
              High-volume trades enjoy tighter spreads
            </Paragraph>
          </Section>
        </HeaderBlock>
      }
    >
      <Section
        align="left"
        backgroundStyle="solid"
        css={{
          paddingBottom: 6,
        }}
      >
        <div
          css={{
            columnCount: [1, , 2],
            columnGap: 5,
            rowGap: 0,
            article: {
              marginTop: 0,
              breakInside: 'avoid',
              p: {
                breakInside: 'inherit',
              },
            },
          }}
        >
          <Article
            css={{
              columnSpan: 'all',
              columnCount: 'inherit',
              columnGap: 'inherit',
              rowGap: 'inherit',
            }}
          >
            <Heading
              as="h2"
              variant="h3"
              css={{
                columnSpan: 'all',
                maxWidth: '100%',
              }}
            >
              What is OTC?
            </Heading>
            <Paragraph variant="medium">
              Over-the-counter or OTC trading allows you to execute high-volume
              trades with minimal price slippage.
            </Paragraph>
            <Paragraph variant="medium">
              It routes large orders via our trading desk, who facilitate your
              deal directly. This reduces the impact of large trades on the
              market price of the coin or token. It also minimises exposure to
              market fluctuations.
            </Paragraph>
            <Paragraph variant="medium">
              Another advantage of OTC is tighter spreads for larger orders,
              resulting in cost savings for our customers.
            </Paragraph>
          </Article>
          <Article>
            <Heading as="h2" variant="h3">
              Why trade OTC with BTC Markets?
            </Heading>
            <Paragraph variant="medium">
              BTC Markets OTC is our discreet, high-volume trading service. We
              offer personalised assistance for orders worth AU$100,000 or more.
            </Paragraph>
          </Article>
          <Article>
            <Heading as="h2" variant="h3">
              OTC allows you to
            </Heading>
            <TextList>
              <Paragraph as="li" variant="medium">
                Execute large trades outside our public exchange
              </Paragraph>
              <Paragraph as="li" variant="medium">
                Access our global network of liquidity providers
              </Paragraph>
              <Paragraph as="li" variant="medium">
                Lock in rates, reducing exposure to market fluctuations
              </Paragraph>
              <Paragraph as="li" variant="medium">
                Competitive OTC rate
              </Paragraph>
            </TextList>
          </Article>
        </div>
      </Section>

      <Section
        align="left"
        backgroundStyle="solid"
        css={{
          paddingBottom: 5,
        }}
      >
        <Heading
          as="h2"
          variant="h3"
          css={{
            maxWidth: '30em',
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 6,
          }}
        >
          The OTC desk is available 9AM to 5PM, Monday to Friday (except public
          holidays). Contact us for a quote today.
        </Heading>
        <CellContainer
          css={{
            columnGap: 4,
            rowGap: 5,
            justifyContent: 'space-evenly',
            '> div': {
              width: '36rem',
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            },
          }}
        >
          <Cell>
            <Heading as="h3" variant="h4">
              Safe and transparent
            </Heading>
            <Paragraph variant="medium">
              Established in 2013, BTC Markets is Australia&apos;s most trusted
              and reliable exchange.
            </Paragraph>
          </Cell>
          <Cell>
            <Heading as="h3" variant="h4">
              Personal trading support
            </Heading>
            <Paragraph variant="medium">
              Private consultation with our experienced traders straight through
              to settlement.
            </Paragraph>
          </Cell>
          <Cell>
            <Heading as="h3" variant="h4">
              Deep liquidity
            </Heading>
            <Paragraph variant="medium">
              Access BTC Markets global network of liquidity providers.
            </Paragraph>
          </Cell>
        </CellContainer>
      </Section>

      <CTACreateAccount />
    </Layout>
  );
};

export default OTCTradingPage;
