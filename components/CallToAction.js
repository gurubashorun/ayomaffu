import Paragraph from '@ngin-io/components/public/components/Paragraph/Paragraph.js';
import PropTypes from 'prop-types';
import ColorSchemeImage from './ColorSchemeImage';
import DisplayHeading from './DisplayHeading';
import Section from './Section';

const CallToAction = ({ actions, subTitle, title, ...props }) => {
  return (
    <Section
      {...props}
      backgroundStyle="gradient"
      size="small"
      css={{
        paddingTop: [5, , 6],
        paddingLeft: [4, 4],
        paddingRight: [4, 4],
        textAlign: ['center', , 'left'],
      }}
    >
      <div
        css={{
          width: '100%',
          display: 'flex',
          justifyContent: ['center', , 'space-between'],
          alignItems: 'center',
          flexWrap: ['wrap', , 'nowrap'],
          gap: 4,
          'a, button': {
            display: 'inline-block',
          },
        }}
      >
        <div
          css={{
            maxWidth: '50rem',
            marginTop: [, , 4],
            marginBottom: 4,
          }}
        >
          <DisplayHeading
            as="h3"
            variant="small"
            gradient
            css={{ marginBottom: 4 }}
          >
            {title}
          </DisplayHeading>
          {subTitle && <Paragraph variant="large">{subTitle}</Paragraph>}
          {actions}
        </div>
        <div
          css={{
            overflow: 'hidden',
            alignSelf: 'flex-end',
          }}
        >
          <div
            css={{
              maxWidth: '100%',
              width: '246px',
              height: 'auto',
            }}
          >
            <ColorSchemeImage
              alt={title}
              width="247"
              height="383"
              darkSrc={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/prices-dark.webp`}
              lightSrc={`${process.env.NEXT_PUBLIC_ASSETS_URL}/images/marketing/prices-light.webp`}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

CallToAction.propTypes = {
  actions: PropTypes.node.isRequired,
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default CallToAction;
