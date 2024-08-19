import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { bannerAnnouncement } from '../config/bannerAnnoucement';
import ErrorBoundary from './ErrorBoundary';
import NavigationContainer from './NavigationContainer';
import SkipToContent from './SkipToContent';
import ThemeProvider from './ThemeProvider';
import BannerAnnouncementContext from './lib/BannerAnnouncementContext';
import GlobalContainerContext from './lib/GlobalContainerContext';
import queryClient from './lib/queryClient';
import ErrorPageContainer from './pages/ErrorPageContainer';

const context = {
  NavigationContainer,
};

const AppContainer = ({ children }) => {
  const router = useRouter();
  return (
    <ThemeProvider>
      <ErrorBoundary fallback={<ErrorPageContainer />}>
        <QueryClientProvider client={queryClient}>
          <GlobalContainerContext.Provider value={context}>
            <BannerAnnouncementContext.Provider value={bannerAnnouncement}>
              <SkipToContent
                router={router}
                css={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translate(-50%, -101%)',
                  transition: 'transform 0.3s',
                  zIndex: 4,
                  ':focus': {
                    transform: 'translate(-50%, 0%)',
                    outlineOffset: '0px',
                  },
                }}
              />
              {children}
              <ReactQueryDevtools />
            </BannerAnnouncementContext.Provider>
          </GlobalContainerContext.Provider>
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
