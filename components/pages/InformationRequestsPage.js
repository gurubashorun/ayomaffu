/* eslint-disable react/no-unescaped-entities */
import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import Paragraph from '@ngin-io/components/public/components/Paragraph/Paragraph.js';
import Article from '../Article';
import Cell from '../Cell';
import CellContainer from '../CellContainer';
import DisplayHeading from '../DisplayHeading';
import HeaderBlock from '../HeaderBlock';
import Layout from '../Layout';
import Link from '../Link';
import Section from '../Section';
import URLHashList from '../URLHashList';

const InformationRequestsPage = () => {
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
              Information Requests
            </DisplayHeading>
            
            <Paragraph variant="medium">Our legal obligation to provide information to government agencies</Paragraph>
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
              <Link href="#who-can-request-my-information">
                Who can request my information?
              </Link>
              <Link href="#what-kind-of-information-can-be-requested">
                What kind of information can be requested?
              </Link>
              <Link href="#how-can-requests-be-made">
                How can requests be made?
              </Link>
              <Link href="#how-are-requests-for-information-reviewed">
                How are requests for information reviewed?
              </Link>
              <Link href="#will-i-be-informed-if-a-requested-has-been-made-for-my-information">
                
                Will I be informed if a request has been made for my information?
              </Link>
              <Link href="#where-can-i-get-more-information">
                Where can I get more information?
              </Link>
            </URLHashList>
          </Cell>
          <Cell
            order={0}
            css={{
              width: ['100%', , '55%'],
            }}
          >
            <Article id="who-can-request-my-information">
              
              <Heading as="h2" variant="h3">Who can request my information?</Heading>
              
              <Paragraph variant="medium">BTC Markets is required by law to assist a range of government agencies.</Paragraph>
              
              <Paragraph variant="medium">They may request customer information to enforce criminal law; laws imposing financial penalties; protecting public revenue; and safeguarding national security.</Paragraph>
            </Article>

            <Article id="what-kind-of-information-can-be-requested">
              <Heading as="h2" variant="h3">
                What kind of information can be requested?
              </Heading>
              
              <Paragraph variant="medium">Government agencies can request a range of information.</Paragraph>
              
              <Paragraph variant="medium">This may include personal data for example: name, address, phone number, email address and date of birth.</Paragraph>
              
              <Paragraph variant="medium">Agencies may also request records of transactions, account interactions, IP addresses, digital wallets and communication received by BTC Markets regarding the account.</Paragraph>
            </Article>

            <Article id="how-can-requests-be-made">
              
              <Heading as="h2" variant="h3">How can requests be made?</Heading>
              
              <Paragraph variant="medium">BTC Markets will only accept a warrant, or court orders such as subpoenas and coronial requests which require us to provide customer information.</Paragraph>
            </Article>

            <Article id="how-are-requests-for-information-reviewed">
              <Heading as="h2" variant="h3">
                How are requests for information reviewed?
              </Heading>
              
              <Paragraph variant="medium">Under Australian law, the privacy of your personal information is strictly protected.</Paragraph>
              
              <Paragraph variant="medium">BTC Markets carefully assesses each request and only discloses customer information if in accordance with the law. When responding to lawful requests from agencies, we aim to never interfere with a customer's legitimate use of our services.</Paragraph>
            </Article>

            <Article id="will-i-be-informed-if-a-requested-has-been-made-for-my-information">
              
              <Heading as="h2" variant="h3">Will I be informed if a request has been made for my information?</Heading>
              
              <Paragraph variant="medium">We are prohibited from providing details of specific requests made by law enforcement or national security agencies. Additionally, BTC Markets does not want to jeopardise the work of these or other agencies.</Paragraph>
            </Article>

            <Article id="where-can-i-get-more-information">
              
              <Heading as="h2" variant="h3">Where can I get more information?</Heading>
              
              <Paragraph variant="medium">BTC Markets welcomes enquiries from law enforcement agencies about its policies and procedures. Please contact BTC Markets at <Link href="mailto:compliance@btcmarkets.net">compliance@btcmarkets.net</Link> for enquiries or to submit an information request.</Paragraph>
              
              <Paragraph variant="medium">For information on Australia's privacy principles, contact the <Link href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">Office of the Australian Information Commissioner</Link>.</Paragraph>
            </Article>
          </Cell>
        </CellContainer>
      </Section>
    </Layout>
  );
};

export default InformationRequestsPage;
