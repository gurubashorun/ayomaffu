import Button from '@ngin-io/components/public/components/Button/Button.js';
import IconCandles from '@ngin-io/components/public/components/Icons/IconCandles.js';
import IconUserVerified from '@ngin-io/components/public/components/Icons/IconUserVerified.js';
import IconWallet from '@ngin-io/components/public/components/Icons/IconWallet.js';
import darkColorMode from 'mystical/darkColorMode.js';
import DisplayHeading from './DisplayHeading';
import GoogleStars from './GoogleStars';
import IconColumn from './IconColumn';
import IconColumnContainer from './IconColumnContainer';
import Link from './Link';
import Section from './Section';

const StartTradingSection = (props) => {
  return (
    <Section
      {...props}
      size="small"
      backgroundStyle="solid"
      css={{
        [darkColorMode]: {
          backgroundColor: 'black',
        },
        paddingTop: [5, , 6],
        paddingBottom: [5, , 6],
        textAlign: 'center',
      }}
    >
      <DisplayHeading
        as="h2"
        variant="small"
        gradient
        css={{ maxWidth: '10em', marginBottom: 5 }}
      >
        Start trading in 3 easy steps
      </DisplayHeading>
      <IconColumnContainer as="ol">
        <IconColumn
          number={1}
          title="Create"
          description="Sign up and verify your free account."
          icon={IconUserVerified}
          variant="secondary"
        />
        <IconColumn
          number={2}
          title="Deposit"
          description="Add AUD or crypto to your wallet using our secure methods."
          icon={IconWallet}
          variant="secondary"
        />
        <IconColumn
          number={3}
          title="Trade"
          description="You’re all set. Buy, sell and trade crypto immediately."
          icon={IconCandles}
          variant="secondary"
        />
      </IconColumnContainer>
      <Button
        as={Link}
        href={process.env.NEXT_PUBLIC_ONBOARDING_URL}
        variant="brand"
        css={{ marginBottom: 4 }}
      >
        Get started
      </Button>
      <GoogleStars />
    </Section>
  );
};

export default StartTradingSection;
