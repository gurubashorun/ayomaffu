import Button from '@ngin-io/components/public/components/Button/Button.js';
import CallToAction from './CallToAction';

const CTACreateAccount = (props) => {
  return (
    <CallToAction
      {...props}
      actions={
        <Button
          as="a"
          href={`${process.env.NEXT_PUBLIC_ONBOARDING_URL}?from=marketing_cta`}
          variant="brand"
        >
          Get started
        </Button>
      }
      title="Create an account and start trading with us today!"
    />
  );
};

export default CTACreateAccount;
