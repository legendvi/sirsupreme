import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { AppColors } from '../colors';
import { commonStyles, typography } from '../common';
import { mediaQuery } from '../hooks/breakpoints';
import useResponsive from '../hooks/useResponsive';
const { white, orange, primary, grayText, christmasRed } = AppColors;

const makeStyles = (isTablet: boolean) =>
  ({
    container: {
      ...commonStyles.container,
      backgroundColor: primary,
      minHeight: '50vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: isTablet ? 'column' : 'row',
      position: 'relative',
      padding: 'clamp(2rem, 5vw, 4rem)',
    },
    heading: {
      ...commonStyles.heading2,
      fontFamily: typography.fontFamily.special,
      color: white,
      marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
    },
    description: {
      ...commonStyles.text,
      color: grayText,
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: 1.6,
    },
    meetText: {
      ...commonStyles.text,
      fontFamily: typography.fontFamily.primary,
      color: white,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      width: '100%',
      fontSize: typography.fontSize.header3,
      textAlign: 'center',
    },

    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'clamp(2rem, 5vw, 4rem)',
      maxWidth: '1200px',
      width: '100%',
      flexDirection: isTablet ? 'column' : 'row',
      textAlign: 'center',
      [mediaQuery.tablet]: {
        flexDirection: 'column',
      },
    },
    leftSection: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
      [mediaQuery.tablet]: {
        order: 2,
      },
    },
    middleSection: {
      width: '50rem',
      textAlign: 'center' as const,
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      gap: '1.5rem',
      [mediaQuery.tablet]: {
        order: 1,
      },
    },
    rightSection: {
      flex: '0.3',
      display: 'flex',
      justifyContent: 'center',
      [mediaQuery.tablet]: {
        order: 3,
      },
    },
    heartButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.3s ease',
      width: 'clamp(80px, 20vw, 200px)',
      height: 'clamp(80px, 20vw, 200px)',
    },
    heartButtonHover: {
      transform: 'scale(1.1)',
    },
    heartShape: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      animation: 'heartbeat 1.5s ease-in-out infinite',
    },
    logoContainer: {
      width: 'clamp(120px, 15vw, 150px)',
      height: 'clamp(120px, 15vw, 150px)',
      borderRadius: '50%',
      overflow: 'hidden',
      border: `3px solid ${orange}`,
      boxShadow: '0 8px 24px rgba(255, 107, 0, 0.2)',
      [mediaQuery.tablet]: {
        margin: '0 auto',
      },
    },
    logo: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      borderRadius: '50%',
    },

    highlight: {
      color: orange,
      fontWeight: 'bold',
    },
  } as const);

const HeartButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { isTablet } = useResponsive();
  const styles = makeStyles(isTablet);
  return (
    <button
      style={{
        ...styles.heartButton,
        ...(isHovered ? styles.heartButtonHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={styles.meetText}>
        MEET
        <br /> NOW
      </span>
      <Heart
        size={180}
        color={christmasRed}
        fill={christmasRed}
        style={{
          ...styles.heartShape,
          animation: 'heartbeat 1.5s ease-in-out infinite',
        }}
      />
    </button>
  );
};

const MeetSupreme: React.FC = () => {
  const { isTablet } = useResponsive();
  const styles = makeStyles(isTablet);
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.middleSection}>
          <h2 style={styles.heading}>Meet Sir Supreme</h2>
          <p style={styles.description}>
            Ready to meet the voice behind the microphone? Join us for an
            unforgettable experience at our upcoming meet-and-greet events.
            We're <span style={styles.highlight}>excited to connect</span> with
            our amazing community in person and share moments that go beyond the
            screen.
          </p>
        </div>
        <div style={styles.leftSection}>
          <HeartButton />
        </div>
        <div style={styles.rightSection}>
          <div style={styles.logoContainer}>
            <img
              src="/images/SirSupremeLogo.png"
              alt="Sir Supreme Logo"
              style={styles.logo}
            />
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes heartbeat {
            0% { transform: scale(1); }
            14% { transform: scale(1.1); }
            28% { transform: scale(1); }
            42% { transform: scale(1.1); }
            70% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default MeetSupreme;
