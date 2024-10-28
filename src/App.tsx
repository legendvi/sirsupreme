import { CSSProperties } from 'react';
import { AppColors } from './colors';
import Header from './Sections/Header';
import Hero from './Sections/Hero';
import Newsletter from './Sections/Newsletter';
import SocialChannels from './Sections/SocialChannels';
import MeetSupreme from './Sections/MeetSirSupreme';
import Testimonials from './Sections/Testimonials';
import FeaturedPodcasts from './Sections/FeaturedPodcasts';

type Styles = {
  [key: string]: CSSProperties;
};
const { primary } = AppColors;

function App() {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.sectionsWrapper}>
        <Hero />
        <Newsletter imagePath="images/profile.png" />
      </div>
      <SocialChannels />
      <MeetSupreme />
      <Testimonials />
      <FeaturedPodcasts />
    </div>
  );
}

const styles: Styles = {
  container: {
    backgroundColor: primary,
    minHeight: '100vh',
    overflow: 'hidden',
  },
  sectionsWrapper: {
    position: 'relative',
    // height: '200vh', // Double height to accommodate both sections
  },
  heroSection: {
    position: 'sticky',
    top: 0,
    height: '100vh',
    zIndex: 1,
  },
  newsletterSection: {
    position: 'relative',
    marginTop: '100vh', // Start after hero
    height: '100vh',
    zIndex: 2,
  },
};

export default App;
