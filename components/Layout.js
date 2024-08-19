import PropTypes from 'prop-types';
import { useContext } from 'react';
import BannerAnnouncement from './BannerAnnouncement';
import Footer from './Footer';
import BannerAnnouncementContext from './lib/BannerAnnouncementContext';

const Layout = ({ children, header, ...props }) => {
  // console.log(props);
  const bannerAnnouncement = useContext(BannerAnnouncementContext);

  return (
    <div
      {...props}
      css={{
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {bannerAnnouncement && <BannerAnnouncement {...bannerAnnouncement} />}
      {header}
      <main
        role="main"
        id="main-content"
        css={{
          position: 'relative',
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
};

export default Layout;
