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

const PrivacyPolicyPage = () => {
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
              Privacy Policy
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
              <Link href="#gathering-and-use-of-personal-information">
                Gathering and Use of Personal Information
              </Link>
              <Link href="#ip-addresses">IP Addresses</Link>
              <Link href="#cookies">Cookies</Link>
              <Link href="#disclosure-of-personal-information">
                Disclosure of Personal Information
              </Link>
              <Link href="#access-and-changing-of-personal-information">
                Access and Changing of Personal Information
              </Link>
              <Link href="#security">Security</Link>
              <Link href="#retention-of-personal-information">
                Retention of Personal Information
              </Link>
              <Link href="#links">Links</Link>
              <Link href="#changes">Changes</Link>
              <Link href="#contact-us">Contact Us</Link>
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
                BTC Markets Pty Ltd and its affiliates (hereinafter, "the
                Company", "we", "us" or "our") are committed to protecting and
                respecting your privacy. In addition, we are subject to the
                Privacy Act 1988 and the National Privacy Principles which form
                part of that Act.
              </Paragraph>
              <Paragraph variant="medium">
                This Privacy Policy (together with our Terms and Services)
                governs our collection, processing and use of your Personal
                Information.
              </Paragraph>
              <Paragraph variant="medium">
                "Personal Information" is information which identifies you
                personally or by which your identity can reasonably be
                ascertained. This may include your name, address, e-mail
                address, and other contact details.
              </Paragraph>
              <Paragraph variant="medium">
                The purpose of this Privacy Policy is to inform you of:
              </Paragraph>
              <TextList as="ol">
                <Paragraph as="li" variant="medium">
                  the kinds of Personal Information which we may collect about
                  you and how it may be used;
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  our use of information regarding IP Addresses and our use of
                  cookies;
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  how your Personal Information may be disclosed to third
                  parties;
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  your ability to access, correct, update and delete your
                  Personal Information; and
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  the security measures we have in place to prevent the loss,
                  misuse, or alteration of Personal Information under our
                  control.
                </Paragraph>
              </TextList>
            </Article>

            <Article id="gathering-and-use-of-personal-information">
              <Heading as="h2" variant="h3">
                Gathering and Use of Personal Information
              </Heading>
              <Paragraph variant="medium">
                We may collect your personal information if you use the site;
                open an account to use the platform; or perform any transactions
                on the platform.
              </Paragraph>
              <Paragraph variant="medium">
                We may also collect personal information about you from
                recordings of telephone conversations between us and you (or
                your representatives) and from publicly available registers.
              </Paragraph>
              <Paragraph variant="medium">
                Some of the personal information we collect is required to meet
                legal and regulatory obligations (e.g. to verify your identity).
                Otherwise, the personal information we collect is required to
                provide our services efficiently and effectively.
              </Paragraph>
              <Paragraph variant="medium">
                The types of personal information may include: your name;
                photographic identification; your address; phone number; e-mail
                address; banking details including account numbers; date of
                birth; and information about your transactions.
              </Paragraph>
              <Paragraph variant="medium">
                We may use your personal information for the following purposes:
              </Paragraph>
              <TextList as="ol">
                <Paragraph as="li" variant="medium">
                  to allow you to open and operate an account
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  to enable you to complete transactions on the platform
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  to correspond with you in relation to your account and your
                  transactions
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  to analyse use of our site and the services we provide
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  as required for legal and regulatory purposes, including for
                  dispute resolution purposes
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  to provide you with information about products, services and
                  promotions that may be of interest to you, from ourselves and
                  third parties
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  for market research, e.g. surveying users' needs and opinions
                  on issues, such as our performance.
                </Paragraph>
              </TextList>
              <Paragraph variant="medium">
                You should note that you are not obliged to give your personal
                information to the company. If you choose not to do so, we may
                not be able to provide our services, or your access to our
                services may be limited.
              </Paragraph>
            </Article>

            <Article id="ip-addresses">
              <Heading as="h2" variant="h3">
                IP Addresses
              </Heading>
              <Paragraph variant="medium">
                We may collect information about your computer. This includes
                where available your IP address, operating system and browser
                type. This is for system administration and to report aggregate
                information to our advertisers. It is statistical data about our
                users' browsing actions and patterns and does not identify any
                individual.
              </Paragraph>
            </Article>

            <Article id="cookies">
              <Heading as="h2" variant="h3">
                Cookies
              </Heading>
              <Paragraph variant="medium">
                We may use a browser feature known as a ‘cookie’ which assigns a
                unique identifier to your computer.
              </Paragraph>
              <Paragraph variant="medium">
                Cookies are typically stored on your computer's hard drive.
                Information collected from cookies is used by us to evaluate the
                effectiveness of our site, analyse trends, and administer the
                platform.
              </Paragraph>
              <Paragraph variant="medium">
                Information collected from cookies allows us to determine for
                example which parts of our site are most visited, or any
                difficulties in accessing our site.
              </Paragraph>
              <Paragraph variant="medium">
                With this knowledge, we can improve the quality of your
                experience on the platform.
              </Paragraph>
              <Paragraph variant="medium">
                We also use cookies and/or a technology known as web bugs or
                clear GIFs. They are typically stored in emails to confirm your
                receipt and response to our emails. It also provides a more
                personalised experience when using our site.
              </Paragraph>
              <Paragraph variant="medium">
                We may use third party service provider(s), to assist us in
                better understanding the use of our site. Our service
                provider(s) may place cookies on the hard drive of your
                computer. It may receive information that we select on how
                visitors navigate our site, what products are browsed, and
                general transaction information.
              </Paragraph>
              <Paragraph variant="medium">
                Our service provider(s) analyses this information and provides
                us with aggregate reports. This information will be used to
                understand visitor interest in our site and how to better serve
                those interests. The information collected by our service
                provider(s) may be linked to and combined with information that
                we collect about you while you are using the site. Our service
                providers are contractually restricted from using information
                they receive from our site other than to assist us.
              </Paragraph>
              <Paragraph variant="medium">
                By using our site you agree that we may use cookies for the
                purposes set out above.
              </Paragraph>
            </Article>

            <Article id="disclosure-of-personal-information">
              <Heading as="h2" variant="h3">
                Disclosure of Personal Information
              </Heading>
              <Paragraph variant="medium">
                We use personal information for the purposes indicated at the
                time you provided us with the information. It is also used for
                purposes set out in this privacy policy and/or as otherwise
                permitted by law.
              </Paragraph>
              <Paragraph variant="medium">
                We may make the personal information available to our
                affiliates, agents, representatives, service providers and
                contractors for these purposes.
              </Paragraph>
              <Paragraph variant="medium">
                We may share the personal information with financial
                institutions or insurance companies as required for the purposes
                of the company's dealings with those institutions.
              </Paragraph>
              <Paragraph variant="medium">
                It may also be shared with other companies in the case of a
                merger, divestiture, or other corporate re-organization.
              </Paragraph>
              <Paragraph variant="medium">
                We may share users' personal information with the Australian
                Securities & Investments Commission; AUSTRAC; any financial
                dispute resolution scheme to which the company subscribes. This
                includes other law enforcement bodies; regulatory agencies;
                courts; arbitration bodies; and dispute resolution schemes. This
                may be both in Australia and internationally, as may be required
                by law.
              </Paragraph>
              <Paragraph variant="medium">
                If you request in writing, we may share your personal
                information with your nominated advisers. Except where
                disclosure of your personal information is required by law or
                requested by you, we will generally require any third party
                which receives, or has access to, personal information to
                protect it. Also to use it only to carry out the services they
                are performing for you or for us, unless otherwise required or
                permitted by law.
              </Paragraph>
              <Paragraph variant="medium">
                We will ensure that any such third party is aware of our
                obligations under this privacy policy.
              </Paragraph>
              <Paragraph variant="medium">
                We will take reasonable steps to ensure that contracts we enter
                with such third parties binds them to terms no less protective
                of any personal information disclosed to them than the
                obligations we undertake to you under this privacy policy, or
                which are imposed on us under applicable data protection laws.
              </Paragraph>
            </Article>

            <Article id="access-and-changing-of-personal-information">
              <Heading as="h2" variant="h3">
                Access and Changing of Personal Information
              </Heading>
              <Paragraph variant="medium">
                You have the right to access the personal information we hold
                about you.
              </Paragraph>
              <Paragraph variant="medium">
                You have the right to require the correction, updating and
                blocking of inaccurate and/or incorrect data by sending an email
                to us.
              </Paragraph>
              <Paragraph variant="medium">
                We will usually respond to your request within 14 days. You may
                also request the deletion or destruction of your personal
                information, your account details or your transaction details by
                sending an email to us.
              </Paragraph>
              <Paragraph variant="medium">
                The company will act on your request only when it is not
                inconsistent with its legal and regulatory obligations and
                compliance procedures.
              </Paragraph>
              <Paragraph variant="medium">
                Upon your written request, we will inform you of the use and
                general disclosure of your personal information. Depending on
                the nature of your request, there may be a minimal charge for
                accessing your personal information.
              </Paragraph>
            </Article>

            <Article id="security">
              <Heading as="h2" variant="h3">
                Security
              </Heading>
              <Paragraph variant="medium">
                We take reasonable steps to protect your personal information
                from misuse, loss, unauthorised access, modification or
                disclosure, including implementing appropriate security
                measures.
              </Paragraph>
              <Paragraph variant="medium">
                The security measures in place will, from time to time, be
                reviewed in line with legal and technical developments. However,
                we give no guarantee that such misuse, loss, unauthorised
                access, modification or disclosure will not occur.
              </Paragraph>
            </Article>

            <Article id="retention-of-personal-information">
              <Heading as="h2" variant="h3">
                Retention of Personal Information
              </Heading>
              <Paragraph variant="medium">
                We will hold your personal information only for as long as it is
                necessary for us to do so, having regard to the purposes
                described in this privacy policy and our own legal and
                regulatory requirements.
              </Paragraph>
              <Paragraph variant="medium">
                In general, personal information relating to your account is
                held for at least a period of five years after your account is
                closed.
              </Paragraph>
              <Paragraph variant="medium">
                Similarly, we usually retain information about transactions on
                your account for a period of five years from the date of the
                transaction. Personal information which is collected for other
                purposes will be discarded in accordance with our policies in
                place from time to time.
              </Paragraph>
            </Article>

            <Article id="links">
              <Heading as="h2" variant="h3">
                Links
              </Heading>
              <Paragraph variant="medium">
                There may be links from our site to other sites and resources
                provided by third parties. This privacy policy applies only to
                our site. Accessing those third party sites or sources requires
                you to leave our site.
              </Paragraph>
              <Paragraph variant="medium">
                We do not control those third party sites or any of the content
                contained therein. You agree that we are in no way responsible
                or liable for any of those third party sites. This includes
                without limitation, their content, policies, failures,
                promotions, products, services or actions and/or any damages,
                losses, failures or problems caused by, related to or arising
                from those sites.
              </Paragraph>
              <Paragraph variant="medium">
                We encourage you to review all policies, rules, terms and
                regulations, including the privacy policies, of each site that
                you visit.
              </Paragraph>
            </Article>

            <Article id="changes">
              <Heading as="h2" variant="h3">
                Changes
              </Heading>
              <Paragraph variant="medium">
                Our policies, content, information, promotions, disclosures,
                disclaimers and features may be revised, modified, updated,
                and/or supplemented at any time and without prior notice at the
                sole and absolute discretion of the company. If we change this
                privacy policy, we will take steps to notify all users by a
                notice on our website and will post the amended privacy policy
                on the website.
              </Paragraph>
            </Article>

            <Article id="contact-us">
              <Heading as="h2" variant="h3">
                Contact Us
              </Heading>
              <Paragraph variant="medium">
                If you have any questions, comments, or concerns regarding our
                privacy policy and/or practices as it or they relate to the
                platform, please contact us. If you have a complaint about how
                your personal information has been used, please contact us in
                the first instance. If we cannot resolve your complaint to your
                satisfaction, you may complain to the Privacy Commissioner who
                may investigate your complaint further.
              </Paragraph>
            </Article>
          </Cell>
        </CellContainer>
      </Section>
    </Layout>
  );
};

export default PrivacyPolicyPage;
