/* eslint-disable react/no-unescaped-entities */
import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import Paragraph from '@ngin-io/components/public/components/Paragraph/Paragraph.js';
import TextList from '@ngin-io/components/public/components/TextList/TextList.js';
import Article from '../Article';
import Cell from '../Cell';
import CellContainer from '../CellContainer';
import DisplayHeading from '../DisplayHeading';
import HeaderBlock from '../HeaderBlock';
import Layout from '../Layout';
import Link from '../Link';
import Section from '../Section';
import URLHashList from '../URLHashList';

const BugBountyPage = () => {
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
              BTC Markets Bug Bounty
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
              <Link href="#general">General</Link>
              <Link href="#reward-evaluation">Reward Evaluation</Link>
              <Link href="#program-rules">Program Rules</Link>
              <Link href="#eligible-bounties">Eligible bounties</Link>
              <Link href="#issues-that-are-not-eligible-for-reward">
                Issues that aren't eligible for reward
              </Link>
              <Link href="#submitting-an-issue">Submitting an issue</Link>
            </URLHashList>
          </Cell>
          <Cell
            order={0}
            css={{
              width: ['100%', , '55%'],
            }}
          >
            <Article id="general">
              <Heading as="h2" variant="h3">
                General
              </Heading>
              <Paragraph variant="medium">
                Security is a top priority for us, and we take it very
                seriously. We put a lot of effort into our trading platform,
                infrastructure, and processes to ensure that BTC Markets is safe
                and secure for our customers. We also put a lot of effort into
                ensuring the security of our customer’s data. However, in case
                you are able to discover any security vulnerability, we would
                appreciate your help in responsibly reporting the issue to us so
                that we can investigate and address it as soon as possible.
              </Paragraph>
            </Article>

            <Article id="reward-evaluation">
              <Heading as="h2" variant="h3">
                Reward Evaluation
              </Heading>
              <Paragraph variant="medium">
                We will award an amount in one of our listed assets on a
                case-by-case basis depending on the severity of the issue.
                Please note that we only award one bounty per bug.
              </Paragraph>
            </Article>

            <Article id="program-rules">
              <Heading as="h2" variant="h3">
                Program Rules
              </Heading>
              <TextList>
                <Paragraph as="li" variant="medium">
                  Let us know as soon as possible upon discovery of a potential
                  security issue, and we'll make every effort to quickly resolve
                  the issue.
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Please provide us with a reasonable amount of time to resolve
                  the issue before any disclosure to the public or third-party.
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Do not violate customer privacy, destroy data, disrupt or
                  degrade our service. Only interact with accounts you own or
                  with explicit, written permission of the account holder that
                  you can provide to BTC Markets. Otherwise, your actions may be
                  interpreted as an attack rather than an effort to be helpful.
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Please provide detailed reports with reproducible steps. If
                  the report is not detailed enough to reproduce the issue, the
                  issue will not be eligible for a reward.
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Submit one vulnerability per report, unless you need to chain
                  vulnerabilities to provide impact.
                </Paragraph>
              </TextList>
            </Article>

            <Article id="eligible-bounties">
              <Heading as="h2" variant="h3">
                Eligible bounties
              </Heading>
              <Paragraph variant="medium">
                Any design or implementation issue that results in the
                loss/compromise of data or money for BTC Markets or any of its
                customers.
              </Paragraph>
              <Paragraph variant="medium">
                The most common examples are:
              </Paragraph>
              <TextList>
                <Paragraph as="li" variant="medium">
                  Cross-site scripting (XSS)
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Cross-site request forgery (CSRF/XSRF)
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Authentication or authorisation flaws
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Remote code execution
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Click jacking
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Code injection
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Leaks of sensitive data
                </Paragraph>
              </TextList>
            </Article>

            <Article id="issues-that-are-not-eligible-for-reward">
              <Heading as="h2" variant="h3">
                Issues that aren't eligible for reward
              </Heading>
              <Paragraph variant="medium">
                We cannot reward bounties for issues that are outside of our
                direct control, such as:
              </Paragraph>
              <TextList>
                <Paragraph as="li" variant="medium">
                  Issues on sites hosted by third parties unless they lead to a
                  vulnerability on the main website.
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Issues on BTC Markets social media and blog pages
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Issues contingent on physical attack, social engineering,
                  spamming, DDOS attack, etc.
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Issues affecting outdated or unpatched browsers.
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Issues in third-party applications that make use of BTC
                  Market’s API.
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Issues that have not been responsibly investigated and
                  reported.
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Issues that aren't reproducible.
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Issues that we can't reasonably be expected to do anything
                  about.
                </Paragraph>
              </TextList>
            </Article>

            <Article id="submitting-an-issue">
              <Heading as="h2" variant="h3">
                Submitting an issue
              </Heading>
              <TextList>
                <Paragraph as="li" variant="medium">
                  Submit your issue report through{' '}
                  <Link
                    href="https://support.btcmarkets.net/hc/en-us/requests/new?ticket_form_id=8346694192537"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    our support page
                  </Link>
                  . Submissions must be made in English.
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Try to include as much information in your report as you can,
                  including a description of the issue, its potential impact,
                  and steps for reproducing it or proof of concept.
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Prior to claiming your reward, BTC Markets will complete an ID
                  verification check
                </Paragraph>
              </TextList>
            </Article>
          </Cell>
        </CellContainer>
      </Section>
    </Layout>
  );
};

export default BugBountyPage;
