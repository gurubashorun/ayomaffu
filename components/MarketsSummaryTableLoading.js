import PropTypes from 'prop-types';
import MarketsSummaryTableRow from './MarketsSummaryTableRow';
import MarketsSummaryTableStructure from './MarketsSummaryTableStructure';
import Skeleton from './Skeleton';

const SkeletonWithStyles = (props) => {
  return (
    <Skeleton
      {...props}
      css={{
        height: '1.25em', // Represents the lineHeight of loaded text
      }}
    />
  );
};

const MarketsSummaryTableLoading = ({ qty, ...props }) => {
  return (
    <MarketsSummaryTableStructure
      {...props}
      tbodyRows={Array.from(new Array(qty)).map((_, index) => {
        return (
          <MarketsSummaryTableRow
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            icon={
              <SkeletonWithStyles
                variant="circle"
                css={{
                  width: '32px',
                  height: '32px',
                }}
              />
            }
            asset={<SkeletonWithStyles css={{ width: '166px' }} />}
            button={
              <SkeletonWithStyles css={{ width: '57px', height: '33px' }} />
            }
            changePercentage={<SkeletonWithStyles css={{ width: '84px' }} />}
            lastPrice={<SkeletonWithStyles css={{ width: '110px' }} />}
            marketCap={<SkeletonWithStyles css={{ width: '51px' }} />}
          />
        );
      })}
      theadRow={{
        asset: <SkeletonWithStyles css={{ width: '42px' }} />,
        lastPrice: <SkeletonWithStyles css={{ width: '76px' }} />,
        changePercentage: <SkeletonWithStyles css={{ width: '98px' }} />,
        marketCap: <SkeletonWithStyles css={{ width: '79px' }} />,
      }}
    />
  );
};

MarketsSummaryTableLoading.propTypes = {
  qty: PropTypes.number.isRequired,
};

export default MarketsSummaryTableLoading;
