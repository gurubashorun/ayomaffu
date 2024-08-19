import IconFacebook from '@ngin-io/components/public/components/Icons/IconFacebook.js';
import IconInstagram from '@ngin-io/components/public/components/Icons/IconInstagram.js';
import IconLinkedIn from '@ngin-io/components/public/components/Icons/IconLinkedIn.js';
import IconTelegram from '@ngin-io/components/public/components/Icons/IconTelegram.js';
import IconTwitter from '@ngin-io/components/public/components/Icons/IconTwitter.js';
import Label from '@ngin-io/components/public/components/Label/Label.js';
import darkColorMode from 'mystical/darkColorMode.js';
import PropTypes from 'prop-types';
import Image from './Image';
import Link from './Link';
import Logo from './Logo';
import Section from './Section';

const FooterLink = (props) => {
  return (
    <Label
      {...props}
      variant="small"
      as={Link}
      css={{
        display: 'block',
        paddingTop: 1,
        paddingBottom: 1,
        marginBottom: 2,
        textDecorationLine: 'none',
        verticalAlign: 'text-bottom',
        lineHeight: 'inherit',
        color: 'zinc.700',
        [darkColorMode]: {
          color: 'zinc.200',
        },
        ':hover': {
          textDecorationLine: 'underline',
        },
        svg: {
          fontSize: '1.35em',
          marginRight: 2,
          verticalAlign: 'inherit',
        },
      }}
    />
  );
};

FooterLink.propTypes = {
  as: PropTypes.oneOf(['a', '']),
};

const Column = (props) => {
  return (
    <div
      {...props}
      css={{
        display: 'flex',
        flexDirection: 'column',
        flexBasis: ['50%', 'auto'],
        marginBottom: 5,
        paddingRight: [4, 5],
      }}
    />
  );
};

const ColumnHeader = (props) => {
  return (
    <Label
      {...props}
      variant="capsSmall"
      css={{
        fontWeight: 'bold',
        marginBottom: 4,
      }}
    />
  );
};

const Footer = (props) => {
  return (
    <Section
      {...props}
      css={{
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      <footer
        role="contentinfo"
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          lineHeight: 'looser',
        }}
      >
        <div css={{ flexBasis: '100%', marginBottom: 5 }}>
          <Logo
            css={{
              width: '172px',
              height: '18px',
              color: 'brand.electric.900',
              [darkColorMode]: {
                color: 'zinc.50',
              },
            }}
          />
        </div>

        <Column>
          <ColumnHeader>About</ColumnHeader>
          <FooterLink href="/about-us">About us</FooterLink>
          <FooterLink href="/mobile-app">Mobile app</FooterLink>
          <FooterLink href="/staking">Staking</FooterLink>
          <FooterLink href="/smsf-bitcoin-investment">
            Self Managed Super Funds
          </FooterLink>
          <FooterLink href="/otc-trading">OTC Trading</FooterLink>
          <FooterLink href="/vip">VIP Program</FooterLink>
          <FooterLink href="/investor-study-report">
            Investor Study Report
          </FooterLink>
          <FooterLink
            href="https://support.btcmarkets.net/hc/en-us/requests/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </FooterLink>
          <FooterLink href="/blog">Blog</FooterLink>
        </Column>

        <Column>
          <ColumnHeader>Legal</ColumnHeader>
          <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
          <FooterLink href="/regulation">AML/CTF Policy</FooterLink>
          <FooterLink href="/protect-yourself-online">
            Protect Yourself Online
          </FooterLink>
          <FooterLink href="/information-requests">
            Information Requests
          </FooterLink>
        </Column>

        <Column>
          <ColumnHeader>Help</ColumnHeader>
          <FooterLink
            href="https://support.btcmarkets.net/hc/en-us"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support
          </FooterLink>
          <FooterLink href="/feedback-and-complaints">Complaints</FooterLink>
          <FooterLink href="/frequently-asked-questions">FAQs</FooterLink>
          <FooterLink href="/fees">Fees</FooterLink>
          <FooterLink href="/bug-bounty">Bug Bounty</FooterLink>
          <FooterLink
            href="https://docs.btcmarkets.net/doc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            API
          </FooterLink>
          <FooterLink
            href="https://support.btcmarkets.net/hc/en-us/articles/6865917288217-Tax-Reporting"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tax Reporting
          </FooterLink>
        </Column>

        <Column>
          <ColumnHeader>Follow</ColumnHeader>
          <FooterLink
            href="https://twitter.com/BTCMarkets"
            target="_blank"
            rel="noopener noreferrer"
            title="BTC Markets on Twitter"
          >
            <IconTwitter />
            Twitter
          </FooterLink>
          <FooterLink
            href="https://facebook.com/BTCMarkets"
            target="_blank"
            rel="noopener noreferrer"
            title="BTC Markets on Facebook"
          >
            <IconFacebook />
            Facebook
          </FooterLink>
          <FooterLink
            href="https://linkedin.com/company/btc-markets"
            target="_blank"
            rel="noopener noreferrer"
            title="BTC Markets on Linkedin"
          >
            <IconLinkedIn />
            LinkedIn
          </FooterLink>
          <FooterLink
            href="https://t.me/BTCMkts"
            target="_blank"
            rel="noopener noreferrer"
            title="BTC Markets on Telegram"
          >
            <IconTelegram />
            Telegram
          </FooterLink>
          <FooterLink
            href="https://www.instagram.com/btcmarkets_"
            target="_blank"
            rel="noopener noreferrer"
            title="BTC Markets on Instagram"
          >
            <IconInstagram />
            Instagram
          </FooterLink>
        </Column>

        <Column>
          <ColumnHeader>Get Started</ColumnHeader>
          <FooterLink href={`${process.env.NEXT_PUBLIC_PRODUCT_URL}/login`}>
            Log in
          </FooterLink>
          <FooterLink
            href={
              process.env.NEXT_PUBLIC_ONBOARDING_URL + '?from=marketing_nav'
            }
          >
            Sign up
          </FooterLink>
          <FooterLink
            href="https://apps.apple.com/au/app/btc-markets/id1546957530"
            target="_blank"
            rel="noopener noreferrer"
            css={{
              marginTop: 1,
              marginBottom: 0,
            }}
          >
            <Image
              alt="Download the BTC Markets app on the App Store"
              height="24"
              width="72"
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/badges/appleStore.webp`}
            />
          </FooterLink>
          <FooterLink
            href="https://play.google.com/store/apps/details?id=com.btcmarket.btcm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="Get the BTC Markets app on Google Play"
              height="24"
              width="81"
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/badges/googlePlay.webp`}
            />
          </FooterLink>
        </Column>

        <div
          css={{
            display: 'flex',
            flexBasis: '100%',
            flexDirection: ['column', 'row'],
            alignItems: [, 'center'],
            gap: 3,
            marginBottom: 3,
          }}
        >
          <Column css={{ marginBottom: 0, order: 0 }}>
            <Label
              variant="capsSmall"
              css={{
                marginBottom: 2,
                color: 'inherit',
              }}
            >
              ACN 164 093 887 | ABN 45 164 093 887
            </Label>
            <Label variant="small" css={{ color: 'inherit' }}>
              ©{process.env.COPYRIGHT_YEAR} BTC Markets Pty Ltd. All rights
              reserved.
            </Label>
          </Column>
          <div
            css={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              order: [-1, 1],
            }}
          >
            <FooterLink
              href="https://www.fintechaustralia.org.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width="39"
                height="39"
                alt="FinTech Australia Member"
                src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/badges/fintech-australia-member-2x.png`}
              />
            </FooterLink>
            <FooterLink
              href="https://blockchainaustralia.org/members/#certified-exchanges"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width="105"
                height="39"
                alt="Blockchain Australia - Certified Digital Currency Business"
                src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/badges/blockchain-australia-2x.png`}
              />
            </FooterLink>
            <FooterLink
              href="https://www.bsigroup.com/en-AU/validate-bsi-issued-certificates/client-directory-certificate/IS%20737848"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width="77"
                height="39"
                alt="ISO/IEC 27001 Information Security Management CERTIFIED"
                src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/badges/ISOIEC-27001-2x.png`}
                css={{
                  [darkColorMode]: {
                    filter: 'invert(1)',
                  },
                }}
              />
            </FooterLink>
          </div>
        </div>

        <div
          css={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 4,
          }}
        >
          <Label
            variant="small"
            css={{
              maxWidth: '100%',
              textAlign: 'center',
              color: 'inherit',
            }}
          >
            BTC Markets Pty Ltd ACN 164 093 887 is an authorised representative
            (AR No. 1297122) of BTCM Payments Pty Ltd ACN 643 241 829 (AFSL No.
            525840)
          </Label>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
