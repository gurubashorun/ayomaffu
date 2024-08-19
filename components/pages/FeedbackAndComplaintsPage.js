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

const FeedbackAndComplaintsPage = () => {
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
              Feedback and Complaints
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
              <Link href="#have-some-suggestions">Have some suggestions?</Link>
              <Link href="#how-to-make-a-complaint">
                How to make a complaint?
              </Link>
              <Link href="#how-long-does-it-take">How long does it take?</Link>
              <Link href="#what-happens-during-the-process">
                What happens during the process?
              </Link>
              <Link href="#if-you-are-not-satisfied-with-the-outcome">
                If you're not satisfied with the outcome
              </Link>
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
                BTC Markets is committed to being responsive to the needs and
                concerns of our customers and potential customers. If we have
                not lived up to this promise and you have a concern or
                complaint, we commit to resolving your issue as quickly as
                possible.
              </Paragraph>
            </Article>
            <Article id="have-some-suggestions">
              <Heading as="h2" variant="h3">
                Have some suggestions?
              </Heading>
              <Paragraph variant="medium">
                <Link
                  href="https://support.btcmarkets.net/hc/en-us/requests/new"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Post feedback and suggestions
                </Link>{' '}
                that other users can view and vote on. We use this to help plan
                future development.
              </Paragraph>
            </Article>
            <Article id="how-to-make-a-complaint">
              <Heading as="h2" variant="h3">
                How to make a complaint?
              </Heading>
              <Paragraph variant="medium">
                A complaint can be lodged to BTC Markets in the following ways:
              </Paragraph>
              <TextList>
                <Paragraph as="li" variant="medium">
                  <strong>Step 1</strong> -{' '}
                  <Link
                    href="https://support.btcmarkets.net/hc/en-us/requests/new"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact customer support
                  </Link>{' '}
                  directly.
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  <strong>Step 2</strong> - If you are not satisfied with the
                  response from customer support, please contact senior
                  management at complaints@btcmarkets.net.
                </Paragraph>
              </TextList>
              <Paragraph variant="medium">
                All complaints must be received in writing.
              </Paragraph>
            </Article>
            <Article id="how-long-does-it-take">
              <Heading as="h2" variant="h3">
                How long does it take?
              </Heading>
              <Paragraph variant="medium">
                Where possible, we'll resolve your issue on the spot. However,
                depending on the nature of the issue, this may take up to 10
                business days (however, this may not always be possible on every
                occasion). If we need some additional time, we'll let you know.
              </Paragraph>
            </Article>
            <Article id="what-happens-during-the-process">
              <Heading as="h2" variant="h3">
                What happens during the process?
              </Heading>
              <Paragraph variant="medium">
                During the initial review or investigation stage, BTC Markets
                may need to seek further clarification or documentation from you
                to assist in resolving the issue. If BTC Markets has sought
                clarification or additional documentation from you and is
                waiting on you to provide this information, BTC Markets may not
                be able to meet the 10-business day finalisation commitment. In
                such circumstances, upon receipt of your clarification or
                additional documentation, BTC Markets will indicate to you when
                we expect to be able to finalise the issue. Once the issue has
                been finalised, you will be advised of the findings and any
                action BTC Markets has taken. BTC Markets will communicate this
                in writing.
              </Paragraph>
            </Article>
            <Article id="if-you-are-not-satisfied-with-the-outcome">
              <Heading as="h2" variant="h3">
                If you're not satisfied with the outcome
              </Heading>
              <Paragraph variant="medium">
                If you feel we haven't resolved your concern fairly, you can
                have your concern reviewed by the Australian Financial
                Complaints Authority (AFCA). Time limits apply to complain to
                AFCA. Please refer to the AFCA website set out below for
                details.
              </Paragraph>
              <br />
              <address>
                <Paragraph variant="medium">
                  <strong>
                    Australian Financial Complaints Authority (AFCA)
                  </strong>
                  <br />
                  GPO Box 3
                  <br />
                  Melbourne VIC 3001
                  <br />
                  <strong>Phone:</strong> 1800 931 678
                  <br />
                  <strong>Email:</strong> info@afca.org.au
                  <br />
                  <strong>Website:</strong>{' '}
                  <Link
                    href="https://www.afca.org.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.afca.org.au
                  </Link>
                </Paragraph>
              </address>
            </Article>
          </Cell>
        </CellContainer>
      </Section>
    </Layout>
  );
};

export default FeedbackAndComplaintsPage;
