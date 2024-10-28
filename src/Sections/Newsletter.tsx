import React, { useEffect, useState } from 'react';
import { AppColors } from '../colors';
import { commonStyles, typography } from '../common';
import { mediaQuery } from '../hooks/breakpoints';
import useResponsive from '../hooks/useResponsive';
const { white, orange, grayText } = AppColors;

const Newsletter: React.FC<{ imagePath: string }> = ({ imagePath }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { isTablet } = useResponsive();
  const styles = makeStyles(isTablet);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const windowHeight = window.innerHeight;
      const normalizedScroll = Math.max(
        0,
        Math.min(1, (position - windowHeight / 2) / windowHeight)
      );
      setScrollPosition(normalizedScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTransform = () => {
    if (scrollPosition < 0.5) {
      // Coming into view
      return `translateY(${100 - scrollPosition * 200}%)`;
    } else {
      // Going out of view
      return `translateY(${-((scrollPosition - 0.5) * 200)}%)`;
    }
  };

  const getOpacity = () => {
    // Fade in and out
    return 1 - Math.abs(scrollPosition - 0.5) * 2;
  };

  return (
    <div
      style={{
        ...styles.container,
        transform: getTransform(),
        opacity: getOpacity(),
      }}
    >
      <div style={styles.contentWrapper}>
        <div style={styles.leftSection}>
          <h2 style={styles.heading}>Join the Supreme Community</h2>
          <p style={styles.description}>
            Get exclusive updates, behind-the-scenes content, and early access
            to our latest podcast episodes. Be part of our growing family!
          </p>
          <div style={styles.inputContainer}>
            <input type="text" placeholder="Your Name" style={styles.input} />
            <input type="email" placeholder="Your Email" style={styles.input} />
          </div>
          <button
            style={{
              ...styles.button,
              ...(isHovered ? styles.buttonHover : {}),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Subscribe Now
          </button>
        </div>
        <div style={styles.rightSection}>
          <div style={styles.imageWrapper}>
            <img
              src={imagePath}
              alt="Newsletter Preview"
              style={styles.image}
            />
            <div style={styles.tag}>MUJA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const makeStyles = (isTablet: boolean) =>
  ({
    container: {
      ...commonStyles.container,
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isTablet ? '1rem' : '2rem',
    },
    heading: {
      ...commonStyles.heading2,
      fontFamily: typography.fontFamily.special,
      color: white,
      marginBottom: '1.5rem',
    },
    description: {
      ...commonStyles.text,
      color: grayText,
      marginBottom: '2rem',
      lineHeight: 1.6,
    },
    input: {
      ...commonStyles.text,
      width: '100%',
      padding: '1rem 1.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '12px',
      color: white,
      marginBottom: '1rem',
    },
    button: {
      ...commonStyles.button,
      width: '100%',
      padding: '1rem 1.5rem',
      backgroundColor: orange,
      color: white,
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
    },
    contentWrapper: {
      display: 'flex',
      width: '90%',
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(10px)',
      pointerEvents: 'auto',
      flexDirection: isTablet ? 'column' : 'row',
      alginItems: 'center',
      maxWidth: isTablet ? '100%' : 'auto',
      [mediaQuery.tablet]: {
        maxWidth: '100%',
      },
    },
    leftSection: {
      flex: '1.2',
      padding: '3.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [mediaQuery.tablet]: {
        padding: '2rem',
        textAlign: 'center' as const,
      },
    },
    rightSection: {
      flex: '0.8',
      maxWidth: '400px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [mediaQuery.tablet]: {
        maxWidth: '100%',
        height: '300px',
      },
    },
    inputContainer: {
      marginBottom: '1rem',
    },
    buttonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(255, 107, 0, 0.3)',
    },
    imageWrapper: {
      width: '100%',
      height: '100%',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
    },
    tag: {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      padding: '0.5rem 1.5rem',
      borderRadius: '20px',
      fontWeight: 'bold',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
      fontSize: '1.2rem',
    },
  } as const);

export default Newsletter;
