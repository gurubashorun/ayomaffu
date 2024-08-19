import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import Paragraph from '@ngin-io/components/public/components/Paragraph/Paragraph.js';
import DisplayHeading from '../DisplayHeading';
import Expandable from '../Expandable';
import HeaderBlock from '../HeaderBlock';
import Layout from '../Layout';
import Section from '../Section';

const StakingPage = () => {
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
            }}
          >
            <DisplayHeading as="h1" variant="small" gradient>
              What is Staking?
            </DisplayHeading>
            <Paragraph variant="large">
              How staking can earn you more crypto.
            </Paragraph>
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
        <Paragraph variant="medium">
          Staking can be a great way to grow your crypto portfolio. Staking
          rewards accrue automatically when you allocate eligible digital
          assets, the earnings of which are called crypto rewards.
        </Paragraph>
      </Section>

      <Section
        align="left"
        backgroundStyle="solid"
        css={{
          paddingBottom: 5,
        }}
      >
        <Heading as="h2">Frequently asked questions</Heading>
        <Expandable title="What is staking?">
          <Paragraph variant="medium">
            Staking is a method used to support the operations of a blockchain
            network, through buying, holding and then allocating your crypto to
            a staking pool. In return for doing this, you will automatically
            receive more crypto as payment from the blockchain network. These
            payments are known as ‘crypto rewards’.
          </Paragraph>
        </Expandable>
        <Expandable title="How are crypto rewards determined?">
          <Paragraph variant="medium">
            Crypto rewards are determined in accordance with the rewards program
            conducted by the underlying blockchain network of the eligible
            digital asset.
          </Paragraph>
        </Expandable>
        <Expandable title="Are there fees associated with staking crypto?">
          <Paragraph variant="medium">
            It’s different for every exchange, but fees may be changed for
            facilitating staking, or if assets are redeemed early for locked
            staking products. Always check the specific terms of service on the
            platform you’re using to ensure you understand any fees associated
            with staking.
          </Paragraph>
        </Expandable>
        <Expandable title="How does staking work?">
          <Paragraph variant="medium">
            When you buy and hold eligible digital assets and allocate them to a
            staking pool, you will automatically earn extra crypto on top of
            your existing holdings.
          </Paragraph>
          <Paragraph variant="medium">
            The extra crypto earned from staking is a form of payment from the
            eligible asset’s underlying network. These payments, or crypto
            rewards, are offered by the network for helping to grow and secure
            their blockchain.
          </Paragraph>
          <Paragraph variant="medium">
            Staked asset must be redeemed from the staking pool before they are
            available for trading again.
          </Paragraph>
        </Expandable>
        <Expandable title="Is staking currently available on BTC Markets?">
          <Paragraph variant="medium">
            Due to the existing regulatory regime in Australia, BTC Markets are
            currently unable to offer staking. We are working on offering our
            customers more earning options in the not-too-distant future.
          </Paragraph>
        </Expandable>
      </Section>
    </Layout>
  );
};

export default StakingPage;
