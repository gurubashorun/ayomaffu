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

const ProtectYourselfOnlinePage = () => {
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
              Online Safety
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
              <Link href="#protect-yourself-against-cybercrime">
                Protect Yourself Against Cybercrime
              </Link>
              <Link href="#choose-strong-passwords-keep-them-safe">
                Choose Strong Passwords. Keep Them Safe.
              </Link>
              <Link href="#suspicious-or-poorly-worded-emails-phishing">
                Suspicious or Poorly Worded Emails (Phishing)
              </Link>
              <Link href="#use-two-factor-authentication">
                Use Two-Factor Authentication
              </Link>
              <Link href="#regularly-update-computer-software">
                Regularly Update Computer Software
              </Link>
              <Link href="#watch-out-for-ransomware">
                Watch out for Ransomware
              </Link>
              <Link href="#useful-links">Useful Links</Link>
            </URLHashList>
          </Cell>
          <Cell
            order={0}
            css={{
              width: ['100%', , '55%'],
            }}
          >
            <Article id="protect-yourself-against-cybercrime">
              <Heading as="h2" variant="h3">
                Protect Yourself Against Cybercrime
              </Heading>
             
              <Paragraph variant="medium">
                The security of our client's accounts and assets is of paramount
                important to us.
              </Paragraph>
              <Paragraph variant="medium">
                Help protect yourself against cybercrime by:
              </Paragraph>
              <TextList>
               
                <Paragraph as="li" variant="medium">
                  Restricting the amount of personal information posted online.
                </Paragraph>
               
                <Paragraph as="li" variant="medium">
                  Be suspicious of any unwanted or urgent requests for personal
                  information or money, either by phone or email.
                </Paragraph>
               
                <Paragraph as="li" variant="medium">Be suspicious of offers that are too good to be true.</Paragraph>
               
                <Paragraph as="li" variant="medium">
                  Never create accounts on websites under the instruction of
                  someone else.
                </Paragraph>
               
                <Paragraph as="li" variant="medium">Never give remote access to your personal computer.</Paragraph>
               
                <Paragraph as="li" variant="medium">
                  Research websites, such as for reviews or recommendations,
                  before making any payment for online goods or services.
                </Paragraph>
               
                <Paragraph as="li" variant="medium">Look out for poor spelling and grammar.</Paragraph>
               
                <Paragraph as="li" variant="medium">
                  Regularly review bank and credit card statements for unusual
                  purchases.
                </Paragraph>
               
                <Paragraph as="li" variant="medium">
                  Double-check recipients of money or assets, before you send.
                </Paragraph>
               
                <Paragraph as="li" variant="medium">
                  Please be advised, BTC Markets will never offer any investment
                  advice.
                </Paragraph>
              </TextList>
             
              <Paragraph variant="medium">
                BTC Markets will never ask you for your password over the phone,
                and we will never call you requesting remote access to your
                computer, or make threats if requests aren’t actioned.
              </Paragraph>
             
              <Paragraph variant="medium">
                According to the Australian Cybercrime Security Centre, identity
                theft and online fraud are the two most common cybercrimes.
                These can take the form of:
              </Paragraph>
              <TextList>
                <Paragraph as="li" variant="medium">
                  Brokers scams
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Education scams
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Celebrity endorsements
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Free giveaways/airdrops
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Automated trading bot scams
                </Paragraph>
              </TextList>
             
              <Paragraph variant="medium">
                The following steps will greatly improve your cyber security.
              </Paragraph>
            </Article>

            <Article id="choose-strong-passwords-keep-them-safe">
              <Heading as="h2" variant="h3">
                Choose Strong Passwords. Keep Them Safe.
              </Heading>
             
              <Paragraph variant="medium">
                A strong password is key to a secure account. When creating a
                password, we recommend:
              </Paragraph>
              <TextList>
               
                <Paragraph as="li" variant="medium">
                  Avoiding the use of personal information like names or
                  addresses.
                </Paragraph>
               
                <Paragraph as="li" variant="medium">
                  Using a mixture of characters including letters (upper and
                  lower case), numbers and symbols.
                </Paragraph>
               
                <Paragraph as="li" variant="medium">Using a safe password generator.</Paragraph>
               
                <Paragraph as="li" variant="medium">
                  BTC Markets will never ask you for your password, be that over
                  the phone, via email or in SMS.
                </Paragraph>
              </TextList>
            </Article>

            <Article id="suspicious-or-poorly-worded-emails-phishing">
              <Heading as="h2" variant="h3">
                Suspicious or Poorly Worded Emails (Phishing){' '}
              </Heading>
             
              <Paragraph variant="medium">
                Cybercriminals use social engineering to gather confidential
                personal information. This is known as ‘phishing', a technique
                that is becoming highly sophisticated.
              </Paragraph>
             
              <Paragraph variant="medium">
                Be cautious of links or attachments in emails, text messages or
                social media posts from people you don’t know.
              </Paragraph>
             
              <Paragraph variant="medium">
                Delete any email or message that requests personal information,
                passwords or bank details.
              </Paragraph>
             
              <Paragraph variant="medium">Common traits of dodgy emails are:</Paragraph>
              <TextList>
                <Paragraph as="li" variant="medium">
                  Misspelt words and bad grammar.
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Odd phrases.
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Website addresses with strange extensions.
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  Celebrity endorsements.
                </Paragraph>
              </TextList>
            </Article>

            <Article id="use-two-factor-authentication">
              <Heading as="h2" variant="h3">
                Use Two-Factor Authentication
              </Heading>
             
              <Paragraph variant="medium">
                BTC Markets and many other websites support two-factor
                authentication (2FA).
              </Paragraph>
             
              <Paragraph variant="medium">
                2FA is a second layer of security around your account. First,
                submit your account password on our platform. You then request a
                code via the Google Authentication app on your mobile phone. You
                enter the code on our platform to finally access your account.
                If your password is compromised, this provides an additional
                security roadblock.
              </Paragraph>
             
              <Paragraph variant="medium">
                We highly recommend using 2FA where possible, including on email
                accounts.
              </Paragraph>
            </Article>

            <Article id="regularly-update-computer-software">
              <Heading as="h2" variant="h3">
                Regularly Update Computer Software
              </Heading>
             
              <Paragraph variant="medium">
                Outdated software can leave your computer exposed to cybercrime.
                Regularly updating programs prevents criminals from taking
                advantage of potential system vulnerabilities.
              </Paragraph>
             
              <Paragraph variant="medium">
                Setting a reminder to update software can help maintain good
                security.
              </Paragraph>
            </Article>

            <Article id="watch-out-for-ransomware">
              <Heading as="h2" variant="h3">
                Watch out for Ransomware
              </Heading>
             
              <Paragraph variant="medium">
                Ransomware is malicious software that encrypts files stored on
                local and network drives. The data is held for ransom. Once
                paid, it may decrypt the data.
              </Paragraph>
             
              <Paragraph variant="medium">
                Ransomware is commonly spread by downloading and executing
                infected email attachments. Never open applications (such as
                .exe, .bat, .vbs files) that are attached to emails.
              </Paragraph>
             
              <Paragraph variant="medium">
                Regularly backing up your hard drives is a great way to protect
                your data.
              </Paragraph>
            </Article>

            <Article id="useful-links">
              <Heading as="h2" variant="h3">
                Useful Links
              </Heading>
             
              <Paragraph variant="medium">
                Below are some useful resources about protecting yourself
                online:
              </Paragraph>
              <TextList>
                <Paragraph as="li" variant="medium">
                  <Link
                    href="https://www.scamwatch.gov.au"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ScamWatch
                  </Link>
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  <Link
                    href="https://www.accc.gov.au/consumers"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Australian Competition &amp; Consumer Commission
                  </Link>
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  <Link
                    href="https://www.staysmartonline.gov.au"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stay Smart Online
                  </Link>
                </Paragraph>
                <Paragraph as="li" variant="medium">
                  <Link
                    href="https://www.afp.gov.au/what-we-do/crime-types/cyber-crime"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AFP - Cyber Crimes
                  </Link>
                </Paragraph>
              </TextList>
             
              <Paragraph variant="medium">
                If you or someone you know has been a victim of cybercrime,
                please help by reporting it to Australia Cyber Security Centre
                at{' '}
                <Link
                  href="https://www.cyber.gov.au/acsc/report"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.cyber.gov.au/acsc/report
                </Link>
                .
              </Paragraph>
             
              <Paragraph variant="medium">
                For more information about any of the topics mentioned above,
                feel free to{' '}
                <Link
                  href="https://support.btcmarkets.net/hc/en-us/requests/new"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contact support
                </Link>
                .
              </Paragraph>
            </Article>
          </Cell>
        </CellContainer>
      </Section>
    </Layout>
  );
};

export default ProtectYourselfOnlinePage;
