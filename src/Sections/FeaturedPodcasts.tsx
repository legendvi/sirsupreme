import React, { useState } from 'react';
import { ChevronRight, Play, Clock, Calendar } from 'lucide-react';
import { AppColors } from '../colors';
import { commonStyles, typography } from '../common';

const { white, orange, primary, special, grayText } = AppColors;

// Featured podcasts data
const featuredPodcasts = [
  {
    id: 1,
    title: 'The Creator Lab',
    host: 'Alex Davidson',
    date: '15 March 2024',
    duration: '1h 45m',
    thumbnail: 'images/SirSupremeLogo.png',
    description:
      'Discussing the future of content creation and building sustainable creator businesses.',
    link: 'https://example.com/podcast1',
  },
  {
    id: 2,
    title: 'Digital Marketing Today',
    host: 'Sarah Johnson',
    date: '28 February 2024',
    duration: '2h',
    thumbnail: 'images/SirSupremeLogo.png',
    description:
      'Deep dive into YouTube algorithm and growth strategies for 2024.',
    link: 'https://example.com/podcast2',
  },
  {
    id: 3,
    title: 'Tech Influencers Talk',
    host: 'Mike Chen',
    date: '10 February 2024',
    duration: '1h 30m',
    thumbnail: 'images/SirSupremeLogo.png',
    description:
      'Journey from tech enthusiast to multi-channel content creator.',
    link: 'https://example.com/podcast3',
  },
];

// More podcasts data (shown when expanded)
const morePodcasts = [
  {
    id: 4,
    title: 'Creator Economy Show',
    host: 'Lisa Zhang',
    date: '15 January 2024',
    duration: '1h 15m',
    thumbnail: 'images/SirSupreme.png',
    description:
      'Monetization strategies and building multiple revenue streams.',
    link: 'https://example.com/podcast4',
  },
  // Add more podcasts here
];

const styles = {
  container: {
    ...commonStyles.container,
    backgroundColor: primary,
    padding: '6rem 2rem',
    color: white,
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    marginBottom: '4rem',
    textAlign: 'center' as const,
  },
  title: {
    ...commonStyles.heading2,
    fontFamily: typography.fontFamily.special,
    marginBottom: '1.5rem',
    color: white,
  },
  summary: {
    ...commonStyles.text,
    color: grayText,
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.6,
    fontFamily: typography.fontFamily.primary,
  },
  podcastGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  },
  podcastCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  podcastCardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  },
  thumbnail: {
    width: '100%',
    height: '200px',
    objectFit: 'cover' as const,
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  cardContent: {
    padding: '1.5rem',
  },
  podcastTitle: {
    ...commonStyles.heading4,
    fontFamily: typography.fontFamily.primaryMedium,
    marginBottom: '0.5rem',
    color: white,
  },
  host: {
    ...commonStyles.text,
    fontFamily: typography.fontFamily.special,
    color: orange,
    fontSize: 'calc(1.2rem + 0.2vw)',
    marginBottom: '1rem',
  },
  description: {
    ...commonStyles.text,
    color: grayText,
    marginBottom: '1.5rem',
    lineHeight: 1.5,
    fontSize: 'calc(1.3rem + 0.2vw)',
  },
  metaInfo: {
    display: 'flex',
    gap: '1rem',
    color: 'rgba(255, 255, 255, 0.6)',
  },
  metaItem: {
    ...commonStyles.text,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: 'calc(1.1rem + 0.1vw)',
    fontFamily: typography.fontFamily.primary,
  },
  expandButton: {
    ...commonStyles.button,
    backgroundColor: 'transparent',
    border: `2px solid ${orange}`,
    color: orange,
    padding: '1rem 2rem',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    margin: '0 auto',
    fontSize: 'calc(1.4rem + 0.2vw)',
    fontFamily: typography.fontFamily.primaryMedium,
  },
  expandButtonHover: {
    backgroundColor: orange,
    color: white,
  },
  icon: {
    width: '1.6rem',
    height: '1.6rem',
  },
  dateTime: {
    ...commonStyles.text,
    fontSize: 'calc(1.1rem + 0.1vw)',
    color: grayText,
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  featuredBadge: {
    ...commonStyles.text,
    fontSize: 'calc(1rem + 0.1vw)',
    fontFamily: typography.fontFamily.special,
    color: special,
    backgroundColor: 'rgba(144, 98, 114, 0.1)',
    padding: '0.4rem 1rem',
    borderRadius: '2rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
} as const;

const PodcastCard: React.FC<{
  podcast: (typeof featuredPodcasts)[0];
}> = ({ podcast }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.podcastCard,
        ...(isHovered ? styles.podcastCardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(podcast.link, '_blank')}
    >
      <img
        src={podcast.thumbnail}
        alt={podcast.title}
        style={styles.thumbnail}
      />
      <div style={styles.cardContent}>
        <h3 style={styles.podcastTitle}>{podcast.title}</h3>
        <p style={styles.host}>Hosted by {podcast.host}</p>
        <p style={styles.description}>{podcast.description}</p>
        <div style={styles.metaInfo}>
          <span style={styles.metaItem}>
            <Calendar size={16} />
            {podcast.date}
          </span>
          <span style={styles.metaItem}>
            <Clock size={16} />
            {podcast.duration}
          </span>
        </div>
      </div>
    </div>
  );
};

const FeaturedPodcasts: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const displayedPodcasts = expanded
    ? [...featuredPodcasts, ...morePodcasts]
    : featuredPodcasts;

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <header style={styles.header}>
          <h2 style={styles.title}>Featured Podcast Appearances</h2>
          <p style={styles.summary}>
            Sir Supreme has been featured on numerous leading podcasts, sharing
            insights about content creation, entrepreneurship, and building
            communities. These conversations dive deep into strategies, personal
            experiences, and the future of digital media.
          </p>
        </header>

        <div style={styles.podcastGrid}>
          {displayedPodcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>

        <button
          style={{
            ...styles.expandButton,
            ...(buttonHovered ? styles.expandButtonHover : {}),
          }}
          onClick={() => setExpanded(!expanded)}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          {expanded ? 'Show Less' : 'View More Appearances'}
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default FeaturedPodcasts;
