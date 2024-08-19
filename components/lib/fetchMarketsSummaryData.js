import fetchJSON from '../../lib/fetchJSON';

const fetchMarketsSummaryData = ({ limit, sortProperty }) => {
  return fetchJSON(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: /* GraphQL */ `
        query marketsSummary(
          $filter: MarketFilter
          $sort: MarketSort
          $limit: Int
          $fiatSymbol: Boolean
        ) {
          markets(filter: $filter, sort: $sort, limit: $limit) {
            edges {
              node {
                marketPair
                baseAsset {
                  assetFullName
                  icon {
                    svg
                  }
                  assetName
                  ... on AssetCrypto {
                    marketCap {
                      format(compact: true)
                    }
                  }
                  slug
                }
                ticker {
                  lastPrice {
                    format(fiatSymbol: $fiatSymbol)
                  }
                  pricePercent24h {
                    value
                    format
                  }
                  changeDirection
                }
                quoteAsset {
                  assetName
                }
              }
            }
          }
        }
      `,
      variables: {
        fiatSymbol: true,
        filter: {
          status: 'ONLINE',
        },
        limit,
        sort: {
          property: sortProperty,
          direction: 'DESC',
        },
      },
    }),
  }).then((response) => {
    if (response.errors) {
      throw Error(JSON.stringify(response.errors));
    }

    return response.data.markets.edges.map((edge) => {
      return edge.node;
    });
  });
};

export default fetchMarketsSummaryData;
