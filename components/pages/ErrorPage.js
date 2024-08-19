import Button from '@ngin-io/components/public/components/Button/Button.js';
import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import Label from '@ngin-io/components/public/components/Label/Label.js';
import Paragraph from '@ngin-io/components/public/components/Paragraph/Paragraph.js';
import TextList from '@ngin-io/components/public/components/TextList/TextList.js';
import PropTypes from 'prop-types';
import ErrorLayout from '../ErrorLayout';
import Link from '../Link';

const ErrorPage = ({ router }) => {
  return (
    <ErrorLayout router={router}>
      <Heading as="h1">Something went wrong!</Heading>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Heading as="p" variant="h4">
          Please try:
        </Heading>
        <TextList
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingLeft: 0,
          }}
        >
          <Paragraph as="li" variant="large">
            Checking your internet connection
          </Paragraph>
          <Paragraph as="li" variant="large">
            Reloading the page
          </Paragraph>
        </TextList>
      </div>
      <Paragraph variant="medium">
        If you continue to see this page frequently, please{' '}
        <Label
          as={Link}
          variant="large"
          href="https://support.btcmarkets.net/hc/en-us"
          target="_blank"
          rel="noreferrer"
        >
          contact us.
        </Label>
      </Paragraph>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <Button
          as="a"
          onClick={() => {
            location.reload();
          }}
          size="large"
          variant="brand"
        >
          Reload
        </Button>
        <Button
          as="a"
          onClick={() => {
            return router.push('/');
          }}
          size="large"
          variant="secondary"
        >
          Go to homepage
        </Button>
      </div>
    </ErrorLayout>
  );
};

ErrorPage.propTypes = {
  router: PropTypes.object.isRequired,
};

export default ErrorPage;
