/* eslint-disable react/prop-types */
// import { getDirection } from '../lib/helpers';
import IconArrowDown from './icons/IconArrowDown';
import IconArrowNeutral from './icons/IconArrowNeutral';
import IconArrowUp from './icons/IconArrowUp';

const ChangeDirectionIndicator = ({ pricePct24h, ...props }) => {
  return getDirection(pricePct24h, {
    positive: <IconArrowUp {...props} css={{ color: 'chart.positive' }} />,
    negative: <IconArrowDown {...props} css={{ color: 'chart.negative' }} />,
    neutral: <IconArrowNeutral {...props} css={{ color: 'chart.neutral' }} />,
  });
};

export default ChangeDirectionIndicator;
