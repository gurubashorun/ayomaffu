import Button from '@ngin-io/components/public/components/Button/Button.js';
import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import Paragraph from '@ngin-io/components/public/components/Paragraph/Paragraph.js';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import CellContainer from '../CellContainer';
import DisplayHeading from '../DisplayHeading';
import HeaderBlock from '../HeaderBlock';
import Image from '../Image';
import Layout from '../Layout';
import Link from '../Link';
import Section from '../Section';

const Report = ({ children, imageSrc, pdfLink, title, ...props }) => {
  return (
    <CellContainer
      {...props}
      css={{
        marginBottom: 5,
        '&:last-child': {
          marginBottom: 0,
        },
      }}
    >
      <Cell css={{ width: ['100%', '50%'] }}>
        <Heading as="h2">{title}</Heading>
        {children}
      </Cell>
      <Cell
        css={{
          width: ['100%', '44%'],
          maxWidth: '411px',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Link
          unstyled
          href={`${process.env.NEXT_PUBLIC_ASSETS_URL}/reports/BTC%20Markets%20Investor%20Study%20Report%20FY20-21.pdf`}
          rel="noopener noreferrer"
          target="_blank"
          css={{ width: '100%' }}
        >
          <Image src={imageSrc} alt={title} width="411" height="578" />
        </Link>
        <Button
          as="a"
          href={pdfLink}
          rel="noopener noreferrer"
          target="_blank"
          size="large"
          variant="brand"
        >
          Download report
        </Button>
      </Cell>
    </CellContainer>
  );
};

Report.propTypes = {
  children: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
  pdfLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const InvestorStudyReportPage = () => {
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
              BTC Markets Investor Study Report
            </DisplayHeading>
            <Paragraph variant="large" css={{ maxWidth: '100%' }}>
              Discover insights from the BTC Markets Investor Study Reports
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
        <div css={{ marginBottom: [5, , 6] }}>
          <Paragraph variant="large">
            In the past few years, the global cryptocurrency market has seen
            unprecedented growth. In 2017 alone, the total market capitalization
            soared from approximately US$17 billion to US$600 billion.
          </Paragraph>
          <Paragraph variant="large">
            As this market continues to grow, it is important for us to
            understand what drives cryptocurrency adoption and how diverse
            groups of investors interact with it.
          </Paragraph>
        </div>
        <Report
          title="Investor Study Report 2021-2022"
          imageSrc={`${process.env.NEXT_PUBLIC_ASSETS_URL}/reports/covers/2022.jpg`}
          pdfLink={`${process.env.NEXT_PUBLIC_ASSETS_URL}/reports/BTC%20Markets%20Investor%20Study%20Report%202021%20(April%202022).pdf`}
        >
          <Paragraph variant="medium">
            Far from the scepticism and misinformation that dominated the
            conversation a year ago, ordinary Australians are now talking to
            each other about crypto. We explored our trading data to understand
            how the cryptocurrency market performed in 2021, gaining insights
            into the attitudes and behaviours of crypto investors.
          </Paragraph>
          <Paragraph variant="medium">
            The Investor Study Report published in April 2022, uses data that
            has been captured from the BTC Markets platform throughout the
            calendar year for 2021. It provides an overview of market
            performance and an in-depth exploration of data related to user
            behaviour and investor confidence.
          </Paragraph>
        </Report>
        <Report
          title="Investor Study Report 2020-2021"
          imageSrc={`${process.env.NEXT_PUBLIC_ASSETS_URL}/reports/covers/2021.jpg`}
          pdfLink={`${process.env.NEXT_PUBLIC_ASSETS_URL}/reports/BTC%20Markets%20Investor%20Study%20Report%20FY20-21.pdf`}
        >
          <Paragraph variant="medium">
            BTC Markets ran a survey in FY20-21 with over 1,800 participants
            from Australia to find out what the average Australian
            cryptocurrency investor looks like. We found Australian investors
            are as diverse in their motivations and reasons for investing as
            their counterparts in traditional markets.
          </Paragraph>
          <Paragraph variant="medium">
            With crypto hitting the mainstream in 2021, this timely report sheds
            light on the state of play in Australia’s crypto industry, why
            investors are increasingly choosing this digital asset class, and
            what the industry in this country needs to do in order to become a
            leader in the global crypto space.
          </Paragraph>
        </Report>
      </Section>
    </Layout>
  );
};

export default InvestorStudyReportPage;
