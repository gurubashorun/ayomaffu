import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import Paragraph from '@ngin-io/components/public/components/Paragraph/Paragraph.js';
import TextList from '@ngin-io/components/public/components/TextList/TextList.js';
import Article from '../Article';
import Cell from '../Cell';
import CellContainer from '../CellContainer';
import DisplayHeading from '../DisplayHeading';
import HeaderBlock from '../HeaderBlock';
import Layout from '../Layout';
import Section from '../Section';

const ListItem = (props) => {
  return (
    <Paragraph
      {...props}
      as="li"
      variant="large"
      css={{
        paddingBottom: 3,
      }}
    />
  );
};

const SelfManagedSuperFundsPage = () => {
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
              Self Managed Super Funds
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
        <CellContainer css={{ gap: 5 }}>
          <Cell
            css={{
              width: ['100%', , '44%'],
            }}
          >
            <Article>
              <Heading as="h2" variant="h3">
                SMSF investment in digital assets
              </Heading>
              <Paragraph variant="medium">
                Australia&lsquo;s largest and most trusted digital asset
                exchange supports SMSF investment in Bitcoin, Ethereum, XRP and
                other listed digital assets.
              </Paragraph>
            </Article>
            <Article>
              <Heading as="h3" variant="h4">
                Legal
              </Heading>
              <Paragraph variant="medium">
                Digital assets such as Bitcoin are legal in Australia and
                considered property. It can be used as a security in NSW court,
                where it is recognised as a “form of investment”.
              </Paragraph>
            </Article>
            <Article>
              <Heading as="h3" variant="h4">
                Asset class
              </Heading>
              <Paragraph variant="medium">
                Digital assets including cryptocurrencies are a new asset class,
                growing in trust and maturity.
              </Paragraph>
            </Article>
            <Article>
              <Heading as="h3" variant="h4">
                Restriction-free
              </Heading>
              <Paragraph variant="medium">
                There are no prohibitions on SMSF investment in digital assets.
                It must, however, meet the investment strategy and risk as per
                52B of the SISA and reg 4.09 of the SISR.
              </Paragraph>
              <Paragraph variant="medium">
                While SMSFs are not prohibited from investing in
                cryptocurrencies, the investment must:
              </Paragraph>
              <TextList>
                <Paragraph as="li" variant="medium">
                  be allowed for under the fund’s trust deed
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  be in accordance with the fund’s investment strategy
                </Paragraph>
              </TextList>
            </Article>
            <Article>
              <Heading as="h3" variant="h4">
                Securities classification
              </Heading>
              <Paragraph variant="medium">
                Cryptocurrencies are also not considered listed securities.
                Therefore, they cannot be acquired from a related party.
              </Paragraph>
            </Article>
            <Article>
              <Heading as="h3" variant="h4">
                Regulations
              </Heading>
              <Paragraph variant="medium">
                Digital Asset Exchanges such as BTC Markets are registered with
                AUSTRAC and meet KYC/AML regulations.
              </Paragraph>
            </Article>
          </Cell>

          <Cell
            css={{
              width: ['100%', , '44%'],
            }}
          >
            <Heading as="h2" variant="h3">
              BTC Markets SMSF offering includes:
            </Heading>
            <TextList>
              <ListItem>
                <Heading as="h3" variant="h4">
                  Tax reporting
                </Heading>
                <Paragraph variant="medium">
                  Tax reporting feature for annual audit preparation.
                </Paragraph>
              </ListItem>
              <ListItem>
                <Heading as="h3" variant="h4">
                  Designated SMSF account
                </Heading>
                <Paragraph variant="medium">
                  Access BTC Markets global network through our liquidity
                  providers.
                </Paragraph>
              </ListItem>
              <ListItem>
                <Heading as="h3" variant="h4">
                  Friendly customer service
                </Heading>
                <Paragraph variant="medium">
                  Established in 2013, BTC Markets is Australia’s most trusted
                  and reliable exchange.
                </Paragraph>
              </ListItem>
              <ListItem>
                <Heading as="h3" variant="h4">
                  Large trades
                </Heading>
                <Paragraph variant="medium">
                  Personalised service for large trades.
                </Paragraph>
              </ListItem>
            </TextList>
          </Cell>
        </CellContainer>
      </Section>
    </Layout>
  );
};

export default SelfManagedSuperFundsPage;
