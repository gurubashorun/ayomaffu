import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import Scrollbar from '@ngin-io/components/public/components/Scrollbar/Scrollbar.js';
import TextList from '@ngin-io/components/public/components/TextList/TextList.js';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

const URLHashList = ({ children, ...props }) => {
  const [currentHref, setCurrentHref] = useState(null);

  useEffect(() => {
    if (!currentHref) {
      // Set initial currentHref
      setCurrentHref(document.location.hash || children[0].props.href);
    }
  }, [children, currentHref]);

  const updateCurrentHrefOnScroll = useCallback(() => {
    // Highlight the link of the top-most visible section
    if (currentHref) {
      const currentChild = children.find((child) => {
        const section = document.querySelector(child.props.href);
        if (section) {
          const { bottom } = section.getBoundingClientRect();
          return bottom > 0;
        }
      });
      if (currentChild && currentHref !== currentChild.props.href) {
        setCurrentHref(currentChild.props.href);
      }
    }
  }, [children, currentHref]);

  useEffect(() => {
    document.addEventListener('scroll', updateCurrentHrefOnScroll);

    return () => {
      document.removeEventListener('scroll', updateCurrentHrefOnScroll);
    };
  }, [updateCurrentHrefOnScroll]);

  return (
    <div
      css={{
        display: 'flex',
        maxHeight: '100vh',
        position: 'sticky',
        top: 0,
        marginBottom: 'auto',
      }}
    >
      <Scrollbar showScrollbar={false} css={{ flexDirection: 'column' }}>
        <TextList
          {...props}
          css={{
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 3,
          }}
        >
          {children.map((child) => {
            const { href } = child.props;
            return (
              <Heading
                key={href}
                as="li"
                variant="h4"
                css={[
                  {
                    maxWidth: '100%',
                    lineHeight: 'looser',
                  },
                  currentHref !== href && {
                    opacity: 'disabled',
                  },
                ]}
              >
                {child}
              </Heading>
            );
          })}
        </TextList>
      </Scrollbar>
    </div>
  );
};

URLHashList.propTypes = {
  as: PropTypes.oneOf(['ul', 'ol']),
  children: PropTypes.node.isRequired,
};

export default URLHashList;
