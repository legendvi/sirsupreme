import React, { useEffect, useState } from 'react';
import { AppColors } from '../colors';
import { commonStyles, typography } from '../common';
import { useAnimations } from '../hooks/useAnimations';
import { mediaQuery } from '../hooks/breakpoints';

const { white, orange, christmasRed, primary, grayText } = AppColors;

// Types for channel data
type SocialPlatform = 'youtube' | 'instagram';

type MockState = { [key: string]: number };
interface Channel {
  id: string;
  name: string;
  platform: SocialPlatform;
  url: string;
  handle: string;
}

interface ChannelStats {
  followers: number;
  loading: boolean;
  error: boolean;
}

// Channel data remains the same
const channels: Channel[] = [
  {
    id: '1',
    name: 'Sir Supreme main',
    platform: 'youtube',
    url: 'https://youtube.com/c/sirsupreme',
    handle: '@sirsupreme',
  },
  {
    id: '2',
    name: 'Sir Supreme Kanada',
    platform: 'youtube',
    url: 'https://youtube.com/c/sirsupreme',
    handle: '@sirsupreme',
  },
  {
    id: '3',
    name: 'Sir Supreme Tech',
    platform: 'youtube',
    url: 'https://youtube.com/c/sirsupreme',
    handle: '@sirsupreme',
  },
  {
    id: '4',
    name: 'Sir Supreme Hindi',
    platform: 'youtube',
    url: 'https://youtube.com/c/sirsupreme',
    handle: '@sirsupreme',
  },
];

const ChannelCard: React.FC<{ channel: Channel }> = ({ channel }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [stats, setStats] = useState<ChannelStats>({
    followers: 0,
    loading: true,
    error: false,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockStats: {
          youtube: MockState;
          instagram: MockState;
        } = {
          youtube: {
            '@sirsupreme': 1200000,
            '@supremegaming': 800000,
            '@supremeshorts': 500000,
            '@supremevlogs': 300000,
          },
          instagram: {
            '@sirsupreme': 250000,
          },
        };

        setStats({
          followers: mockStats[channel.platform][channel.handle],
          loading: false,
          error: false,
        });
      } catch (error) {
        setStats((prev) => ({ ...prev, loading: false, error: true }));
      }
    };

    fetchStats();
  }, [channel]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  return (
    <div
      style={{
        ...styles.channelCard,
        ...(isHovered ? styles.channelCardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(channel.url, '_blank')}
    >
      <div style={styles.iconWrapper}>
        <img src="/images/SirSupremeLogo.png" style={styles.IconImage} alt="" />
      </div>
      <h3 style={styles.channelName}>{channel.name}</h3>
      <p style={styles.handle}>{channel.handle}</p>
      <div style={styles.statsWrapper}>
        {stats.loading ? (
          <p style={styles.loadingText}>Loading...</p>
        ) : stats.error ? (
          <p style={styles.loadingText}>Error loading stats</p>
        ) : (
          <>
            <span style={styles.stats}>{formatNumber(stats.followers)}</span>
            <span style={styles.label}>
              {channel.platform === 'youtube' ? 'Subscribers' : 'Followers'}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

const SocialChannels: React.FC = () => {
  const { setItemRef, getAnimationStyles } = useAnimations(channels.length, {
    type: 'stagger',
    baseDelay: 0.6,
    duration: 2,
    threshold: 0.2,
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Channels</h2>
      <p style={styles.subHeading}>
        Join millions of followers across our social media channels and be part
        of our growing community
      </p>
      <div style={styles.channelsGrid}>
        {channels.map((channel, index) => (
          <div
            key={channel.id}
            ref={(el) => setItemRef(el, index)}
            className="stagger-item"
          >
            <ChannelCard channel={channel} />
          </div>
        ))}
      </div>

      <style>
        {`
          .stagger-item {
            opacity: 0;
            transform: translateY(30px);
            visibility: hidden;
          }
          ${getAnimationStyles()}
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    ...commonStyles.container,
    backgroundColor: primary,
    padding: '6rem 2rem',
    [mediaQuery.tablet]: {
      padding: '4rem 1rem',
    },
  },
  heading: {
    ...commonStyles.heading2,
    fontFamily: typography.fontFamily.special,
    color: white,
    textAlign: 'center',
    marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
  },
  subHeading: {
    ...commonStyles.text,
    color: grayText,
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto 4rem auto',
    [mediaQuery.tablet]: {
      margin: '0 auto 3rem',
    },
  },
  channelName: {
    ...commonStyles.text,
    color: white,
    marginBottom: '0.5rem',
  },
  stats: {
    ...commonStyles.heading3,
    fontFamily: typography.fontFamily.primaryMedium,
    color: white,
  },
  handle: {
    ...commonStyles.text,
    color: orange,
  },
  channelsGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    [mediaQuery.tablet]: {
      gap: '2rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    },
    [mediaQuery.mobile]: {
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
    },
  },
  channelCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: 'clamp(1.5rem, 3vw, 3rem)',
  },
  channelCardHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  },
  iconWrapper: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  IconImage: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
  },
  statsWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  label: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '0.9rem',
  },
  loadingText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '1.2rem',
  },
} as const;

export default SocialChannels;
