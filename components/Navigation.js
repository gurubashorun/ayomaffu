import Button from '@ngin-io/components/public/components/Button/Button.js';
import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import IconChartCandles from '@ngin-io/components/public/components/Icons/IconChartCandles.js';
import IconChevron from '@ngin-io/components/public/components/Icons/IconChevron.js';
import IconCircular from '@ngin-io/components/public/components/Icons/IconCircular.js';
import IconMicrochip from '@ngin-io/components/public/components/Icons/IconMicrochip.js';
import IconMobile from '@ngin-io/components/public/components/Icons/IconMobile.js';
import IconUserVIP from '@ngin-io/components/public/components/Icons/IconUserVIP.js';
import Label from '@ngin-io/components/public/components/Label/Label.js';
import useResponsiveValue from '@ngin-io/components/public/hooks/useResponsiveValue.js';
import hexToRgbA from '@ngin-io/components/public/lib/hexToRgbA.js';
import darkColorMode from 'mystical/darkColorMode.js';
import useTheme from 'mystical/useTheme.js';
import PropTypes from 'prop-types';
import { Fragment, useEffect, useRef } from 'react';
import Image from './Image';
import Link from './Link';
import Logo from './Logo';
import Section from './Section';
import IconHamburger from './icons/IconHamburger';

const NavUL = ({ columnCount, ...props }) => {
  return (
    <ul
      {...props}
      css={[
        {
          width: '100%',
          maxWidth: '100%',
          display: 'flex',
          gap: 3,
          flexBasis: 'auto',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: 0,
          textAlign: 'left',
          li: {
            width: ['100%', , , 'auto'],
            display: 'flex',
            listStyleType: 'none',
          },
        },
        columnCount && {
          display: 'grid',
          gridTemplateColumns: ['1fr', `repeat(${columnCount}, 1fr)`],
        },
      ]}
    />
  );
};

NavUL.propTypes = {
  columnCount: PropTypes.number,
};

const NavLabel = (props) => {
  return <Label {...props} variant="small" css={{ width: '100%' }} />;
};

const clickableNavItemStyles = {
  display: 'flex',
  width: '100%',
  gap: 2,
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'underline',
  textDecorationThickness: '0.2em',
  textUnderlineOffset: '0.3em',
  textDecorationColor: ['transparent', , , 'brand.electric.200'],
  ':not(:hover)': {
    textDecorationColor: ['transparent', , , 'transparent'],
  },
};

const NavLinkHeading = (props) => {
  return (
    <Heading {...props} as={Link} variant="h5" css={clickableNavItemStyles} />
  );
};

const NavLinkLabel = (props) => {
  return (
    <Label {...props} as={Link} variant="large" css={clickableNavItemStyles} />
  );
};

const NavLinkProduct = ({ icon: Icon, subTitle, title, ...props }) => {
  return (
    <NavLinkHeading
      {...props}
      css={{
        alignItems: 'flex-start',
        textDecorationColor: ['transparent', , , 'transparent'],
        '&:hover .hoverUnderline': {
          textDecorationLine: 'underline',
          textDecorationColor: ['transparent', , , 'brand.electric.200'],
        },
      }}
    >
      <Icon css={{ fontSize: '1.5em' }} />
      <span
        css={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Heading
          as="span"
          variant="h5"
          className="hoverUnderline"
          css={{ marginBottom: 2 }}
        >
          {title}
        </Heading>
        <Label variant="small">{subTitle}</Label>
      </span>
    </NavLinkHeading>
  );
};

NavLinkProduct.propTypes = {
  icon: PropTypes.elementType.isRequired,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const NavLinkBuyAsset = ({ assetFullName, buyAssetLink, src, ...props }) => {
  return (
    <NavLinkHeading href={buyAssetLink} {...props}>
      <Image
        width="30"
        height="30"
        src={src}
        alt={`Learn how to buy ${assetFullName}`}
        loading="eager"
      />
      <Heading as="span" variant="h5">
        {assetFullName}
      </Heading>
    </NavLinkHeading>
  );
};

NavLinkBuyAsset.propTypes = {
  assetFullName: PropTypes.string.isRequired,
  buyAssetLink: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

const NavLIExpandable = ({
  children,
  activeDropdown,
  isMobileNav,
  linkText,
  setActiveDropdown,
  ...props
}) => {
  const ref = useRef();
  const expanded = activeDropdown === linkText;

  useEffect(() => {
    /**
     * Scroll to nav item if expanded
     */
    if (expanded && isMobileNav) {
      if (ref && ref.current) {
        // ? Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        const { top } = ref.current.getBoundingClientRect();
        if (top <= 0) {
          ref.current.scrollIntoView();
        }
      }
    }
  }, [expanded, isMobileNav]);

  return (
    <li
      {...props}
      ref={ref}
      onClick={() => {
        return setActiveDropdown(expanded ? null : linkText);
      }}
      onMouseOver={() => {
        if (!isMobileNav) {
          if (activeDropdown && !expanded) {
            return setActiveDropdown(linkText);
          }
        }
      }}
      css={{ flexDirection: 'column' }}
    >
      <Label
        as="button"
        variant="large"
        aria-haspopup="true"
        aria-expanded={expanded}
        onClick={(e) => {
          e.preventDefault();
        }}
        css={{
          ...clickableNavItemStyles,
          paddingLeft: 0,
          paddingRight: 0,
          backgroundColor: 'transparent',
          borderWidth: 0,
          fontFamily: 'inherit',
        }}
      >
        <span>{linkText}</span>
        <IconChevron
          aria-label={expanded ? 'collapse' : 'expand'}
          css={[
            {
              fontSize: '0.75em',
              display: 'inline-block',
            },
            expanded && {
              transform: 'rotate(-180deg)',
            },
          ]}
        />
      </Label>
      <span
        css={[
          {
            willChange: 'display',
            width: '100%',
            display: 'none',
            gap: 4,
            flexWrap: 'wrap',
            flexGrow: 1,
            flexDirection: 'column',
            position: ['relative', , , 'absolute'],
            top: 'calc(100% + 8px)',
            left: 0,
            paddingTop: 4,
            paddingBottom: 4,
            '> ul': {
              flexDirection: 'column',
              alignItems: 'flex-start',
            },
          },
          expanded && {
            display: 'flex',
          },
        ]}
      >
        {children}
      </span>
    </li>
  );
};

NavLIExpandable.propTypes = {
  children: PropTypes.node.isRequired,
  activeDropdown: PropTypes.oneOf(['Products', 'Buy', 'Learn', 'Help']),
  isMobileNav: PropTypes.bool.isRequired,
  linkText: PropTypes.string.isRequired,
  setActiveDropdown: PropTypes.func.isRequired,
};

const Navigation = ({
  activeDropdown,
  buyAssets,
  setActiveDropdown,
  setShowMobileNav,
  showNav = true,
  showMobileNav,
  route,
  ...props
}) => {
  const isMobileNav = useResponsiveValue([true, true, true, false]);
  const shadowColor = useTheme('colors', 'black');
  const shadowRgbA = hexToRgbA(shadowColor, 0.6);

  const showDropdown = !!activeDropdown;

  const pricesLink = route === '/prices' ? '#' : '/prices';

  return (
    <Fragment>
      <Section
        {...props}
        onMouseLeave={() => {
          if (!isMobileNav) {
            return setActiveDropdown(null);
          }
        }}
        css={[
          {
            willChange: 'background-color',
            display: ['block', , , 'flex'],
            paddingTop: 4,
            paddingBottom: [4, , , 0],
            zIndex: 3,
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            borderBottomColor: 'transparent',
          },
          showMobileNav && {
            borderBottomColor: ['zinc.200', , , 'transparent'],
            backgroundColor: ['white', , , 'transparent'],
            [darkColorMode]: {
              borderBottomColor: ['zinc.700', , , 'transparent'],
              backgroundColor: ['zinc.800', , , 'transparent'],
            },
          },
        ]}
      >
        <span
          css={{
            width: '100%',
            display: ['block', , , 'flex'],
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            zIndex: 4,
          }}
        >
          <span
            css={{
              display: 'flex',
              flexBasis: 'auto',
              flexGrow: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Logo
              css={{
                width: '182px',
                height: '19px',
                color: 'brand.electric.900',
                [darkColorMode]: {
                  color: 'zinc.50',
                },
              }}
            />
            {showNav && (
              <span
                css={{
                  display: ['flex', , , 'none'],
                  color: 'zinc.700',
                  [darkColorMode]: {
                    color: 'zinc.50',
                  },
                }}
              >
                <IconHamburger
                  open={showMobileNav}
                  onClick={() => {
                    setShowMobileNav(!showMobileNav);
                  }}
                />
              </span>
            )}
          </span>
          {showNav && (
            <nav
              role="navigation"
              css={{
                willChange: 'display',
                display: [showMobileNav ? 'flex' : 'none', , , 'flex'],
                paddingTop: [4, , , 0],
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <NavUL
                css={{
                  position: 'relative',
                  flexDirection: ['column', , , 'row'],
                  gap: [0, , , 4],
                  '> li': {
                    '&:not(:last-of-type)': {
                      '> a, > button': {
                        paddingTop: [3, , , 0],
                        paddingBottom: [3, , , 0],
                      },
                    },
                    '&:not(:last-of-type):not(:nth-last-of-type(2))': {
                      borderBottomWidth: 1,
                      borderBottomStyle: 'solid',
                      borderBottomColor: ['zinc.200', , , 'transparent'],
                      [darkColorMode]: {
                        borderBottomColor: ['zinc.700', , , 'transparent'],
                      },
                    },
                  },
                }}
              >
                <NavLIExpandable
                  linkText="Products"
                  activeDropdown={activeDropdown}
                  isMobileNav={isMobileNav}
                  setActiveDropdown={setActiveDropdown}
                >
                  <NavLabel>Explore our products</NavLabel>
                  <NavUL columnCount={2} css={{ gap: 4 }}>
                    <li>
                      <NavLinkProduct
                        title="Exchange"
                        subTitle="Digital asset trading"
                        href={`${process.env.NEXT_PUBLIC_PRODUCT_URL}/buy-sell`}
                        icon={IconChartCandles}
                      />
                    </li>
                    <li>
                      <NavLinkProduct
                        title="Mobile App"
                        subTitle="Trade on the go"
                        href="/mobile-app"
                        icon={IconMobile}
                      />
                    </li>
                    <li>
                      <NavLinkProduct
                        title="OTC Trading"
                        subTitle="For large trades"
                        href="/otc-trading"
                        icon={IconCircular}
                      />
                    </li>
                    <li>
                      <NavLinkProduct
                        title="Developer API"
                        subTitle="Automate your trading"
                        href="https://docs.btcmarkets.net/doc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        icon={IconMicrochip}
                      />
                    </li>
                    <li>
                      <NavLinkProduct
                        title="VIP Program"
                        subTitle="Perks for top traders"
                        href="/vip"
                        icon={IconUserVIP}
                      />
                    </li>
                  </NavUL>
                </NavLIExpandable>
                <li>
                  <NavLinkLabel href={pricesLink}>Prices</NavLinkLabel>
                </li>
                <NavLIExpandable
                  linkText="Buy"
                  activeDropdown={activeDropdown}
                  isMobileNav={isMobileNav}
                  setActiveDropdown={setActiveDropdown}
                >
                  <NavLabel>How to buy digital assets</NavLabel>
                  {/* <NavUL columnCount={2}>
                    {buyAssets.map((buyAsset) => {
                      return (
                        <li key={`NavLinkBuyAsset-${buyAsset.assetName}`}>
                          <NavLinkBuyAsset
                            assetFullName={buyAsset.assetFullName}
                            buyAssetLink={buyAsset.buyAssetLink}
                            src={buyAsset.src}
                          />
                        </li>
                      );
                    })}
                  </NavUL> */}
                  <span>
                    <Button as={Link} href={pricesLink} size="small">
                      View all assets
                    </Button>
                  </span>
                </NavLIExpandable>
                <li>
                  <NavLinkLabel href="/otc-trading">OTC</NavLinkLabel>
                </li>
                <NavLIExpandable
                  linkText="Learn"
                  activeDropdown={activeDropdown}
                  isMobileNav={isMobileNav}
                  setActiveDropdown={setActiveDropdown}
                >
                  <NavLabel>BTC Markets</NavLabel>
                  <NavUL>
                    <li>
                      <NavLinkHeading href="/about-us">About us</NavLinkHeading>
                    </li>
                    <li>
                      <NavLinkHeading href="/blog">Blog</NavLinkHeading>
                    </li>
                    <li>
                      <NavLinkHeading href="/smsf-bitcoin-investment">
                        SMSF
                      </NavLinkHeading>
                    </li>
                    <li>
                      <NavLinkHeading href="/investor-study-report">
                        Investor Study Report
                      </NavLinkHeading>
                    </li>
                    <li>
                      <NavLinkHeading href="/protect-yourself-online">
                        Online Safety
                      </NavLinkHeading>
                    </li>
                  </NavUL>
                </NavLIExpandable>
                <NavLIExpandable
                  linkText="Help"
                  activeDropdown={activeDropdown}
                  isMobileNav={isMobileNav}
                  setActiveDropdown={setActiveDropdown}
                  css={{ marginBottom: [4, , , 0] }}
                >
                  <NavLabel>Find the answers you need</NavLabel>
                  <NavUL>
                    <li>
                      <NavLinkHeading
                        href="https://support.btcmarkets.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Support Center
                      </NavLinkHeading>
                    </li>
                    <li>
                      <NavLinkHeading
                        href="https://support.btcmarkets.net/hc/en-us/requests/new"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Submit a Ticket
                      </NavLinkHeading>
                    </li>
                    <li>
                      <NavLinkHeading href="/frequently-asked-questions">
                        FAQs
                      </NavLinkHeading>
                    </li>
                    <li>
                      <NavLinkHeading
                        href="https://support.btcmarkets.net/hc/en-us/articles/6865917288217-Tax-Reporting"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tax Reporting
                      </NavLinkHeading>
                    </li>
                  </NavUL>
                </NavLIExpandable>
                <li
                  css={{
                    flexDirection: ['column', 'row'],
                    gap: [3, , , 2],
                  }}
                >
                  <Button
                    as="a"
                    href={`${process.env.NEXT_PUBLIC_PRODUCT_URL}/login`}
                    size="small"
                  >
                    Log in
                  </Button>
                  <Button
                    as="a"
                    href={`${process.env.NEXT_PUBLIC_ONBOARDING_URL}?from=marketing_nav`}
                    size="small"
                    variant="brand"
                  >
                    Sign up
                  </Button>
                </li>
              </NavUL>
            </nav>
          )}
        </span>
        <div
          css={[
            {
              willChange: 'display',
              display: 'none',
              width: '100%',
              height: '370px',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 3,
              backgroundColor: 'white',
              [darkColorMode]: {
                backgroundColor: 'zinc.800',
              },
            },
            showDropdown && {
              display: ['none', , , 'block'],
            },
          ]}
        />
      </Section>
      {showNav && (
        <div
          css={[
            {
              willChange: 'display',
              display: 'none',
              width: '100%',
              height: '100%',
              position: 'fixed',
              top: 0,
              left: 0,
              backgroundColor: shadowRgbA,
              zIndex: 2,
            },
            showDropdown && {
              display: ['none', , , 'block'],
            },
          ]}
        />
      )}
    </Fragment>
  );
};

Navigation.propTypes = {
  activeDropdown: PropTypes.oneOf(['Products', 'Buy', 'Learn', 'Help']),
  buyAssets: PropTypes.arrayOf(
    PropTypes.shape({
      assetFullName: PropTypes.string.isRequired,
      buyAssetLink: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
  setActiveDropdown: PropTypes.func.isRequired,
  setShowMobileNav: PropTypes.func.isRequired,
  showNav: PropTypes.bool,
  showMobileNav: PropTypes.bool.isRequired,
  route: PropTypes.string,
};

export default Navigation;
