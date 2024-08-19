import Button from '@ngin-io/components/public/components/Button/Button.js';
import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import Label from '@ngin-io/components/public/components/Label/Label.js';
import darkColorMode from 'mystical/darkColorMode.js';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import directionColorGraphQL from '../lib/helpers/directionColorGraphQL';
import ChangeDirectionIndicator from './ChangeDirectionIndicator';
import Image from './Image';
import Link from './Link';
import MarketsSummaryTableRow from './MarketsSummaryTableRow';
import MarketsSummaryTableStructure from './MarketsSummaryTableStructure';
import IconArrowNeutral from './icons/IconArrowNeutral';

const MarketsSummaryTableView = ({ marketsSummaryData, ...props }) => {
  return (
    <MarketsSummaryTableStructure
      {...props}
      tbodyRows={marketsSummaryData.map((market) => {
        const buyAssetLink = `/buy/${market.baseAsset.slug}`;
        return (
          <MarketsSummaryTableRow
            key={market.marketPair}
            icon={
              <Link unstyled href={buyAssetLink}>
                <Image
                  width="32"
                  height="32"
                  src={market.baseAsset.icon.svg}
                  alt={`${market.assetFullName} (${market.baseAsset.assetName})`}
                />
              </Link>
            }
            asset={
              <Heading as="h2" variant="h5">
                <Link unstyled href={buyAssetLink}>
                  {market.baseAsset.assetFullName}
                </Link>
              </Heading>
            }
            button={
              <Button
                as="a"
                href={`${process.env.NEXT_PUBLIC_PRODUCT_URL}/buy-sell?market=${market.marketPair}`}
                size="small"
                variant="brand"
              >
                Buy
              </Button>
            }
            changePercentage={
              <div>
                <Label
                  variant="large"
                  css={{
                    color: directionColorGraphQL(market.ticker.changeDirection),
                    [darkColorMode]: {
                      color: directionColorGraphQL(
                        market.ticker.changeDirection
                      ),
                    },
                  }}
                >
                  {market.ticker.pricePercent24h.format}
                </Label>
                <ChangeDirectionIndicator
                  pricePct24h={market.ticker.pricePercent24h.value}
                  css={{
                    width: '16px',
                    height: '16px',
                  }}
                />
              </div>
            }
            lastPrice={
              <Fragment>
                <Label variant="large">{market.ticker.lastPrice.format}</Label>{' '}
                <Label variant="capsLarge" css={{ color: 'zinc.400' }}>
                  {market.quoteAsset.assetName}
                </Label>
              </Fragment>
            }
            marketCap={
              market.baseAsset.marketCap ? (
                <Label variant="large">
                  {market.baseAsset.marketCap.format}
                </Label>
              ) : (
                <IconArrowNeutral />
              )
            }
          />
        );
      })}
      theadRow={{
        asset: 'Asset',
        lastPrice: 'Last Price',
        changePercentage: '24hr Change',
        marketCap: 'Market Cap',
      }}
    />
  );
};

MarketsSummaryTableView.propTypes = {
  marketsSummaryData: PropTypes.array.isRequired,
};

export default MarketsSummaryTableView;
