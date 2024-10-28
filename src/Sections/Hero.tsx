import React, { useEffect, useRef } from 'react';
import { AppColors } from '../colors';
import { typography, commonStyles } from '../common';

const { white, orange, primary, purple, teal, lightOrange } = AppColors;

type FloatingElementProps = {
  children: React.ReactNode;
  animationDelay: number;
  style?: React.CSSProperties;
};

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  animationDelay,
  style,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      const animate = () => {
        const time = Date.now() / 1000;
        const offsetX = Math.sin(time + animationDelay) * 30;
        const offsetY = Math.cos(time + animationDelay) * 30;
        const scale = 1 + Math.sin(time * 2 + animationDelay) * 0.1;

        element.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
        requestAnimationFrame(animate);
      };

      const animation = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animation);
    }
  }, [animationDelay]);

  return (
    <div
      ref={elementRef}
      style={{
        position: 'absolute',
        transition: 'transform 0.1s ease-out',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const styles = {
  container: {
    ...commonStyles.container,
    backgroundColor: primary,
    minHeight: '80vh',
    display: 'flex',
    marginTop: '10vh',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '0 clamp(1rem, 5vw, 8rem)',
  },
  mainContent: {
    textAlign: 'center',
    maxWidth: '70rem',
  },
  heading: {
    ...commonStyles.bigText,
    color: white,
    marginBottom: 'clamp(1rem, 2vw, 2rem)',
    fontWeight: 'normal',
  },
  italicText: {
    ...commonStyles.heading2,
    display: 'block',
    fontStyle: 'italic',
    margin: 'clamp(0.5rem, 1.5vw, 1.5rem) 0',
    fontFamily: typography.fontFamily.special,
  },
  description: {
    ...commonStyles.text,
    color: AppColors.grayText,
    marginBottom: '2rem',
    lineHeight: 1.6,
  },
  button: {
    ...commonStyles.button,
    marginTop: 'clamp(1.5rem, 3vw, 3rem)',
    backgroundColor: orange,
    color: white,
    padding: '0.75rem clamp(1.5rem, 3vw, 2.5rem)',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  highlightSpan: {
    backgroundColor: orange,
    padding: '0.25rem clamp(1rem, 2vw, 1.5rem)',
    borderRadius: '9999px',
    display: 'inline-block',
    margin: '0.5rem 0',
  },
  blockSpan: {
    display: 'block',
    marginTop: 'clamp(0.5rem, 1.5vw, 1.5rem)',
  },
  buttonHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 12px rgba(255, 107, 0, 0.3)',
  },
  floatingCircle: {
    width: 'clamp(4rem, 8vw, 10rem)',
    height: 'clamp(4rem, 8vw, 10rem)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  iconImage: {
    width: 'clamp(4rem, 8vw, 10rem)',
    height: 'clamp(4rem, 8vw, 10rem)',
    borderRadius: '50%',
  },
  floatingContainer1: {
    top: 'clamp(2rem, 15vh, 8rem)',
    left: 'clamp(2rem, 10vw, 8rem)',
  },
  floatingContainer2: {
    top: 'clamp(5rem, 25vh, 12rem)',
    right: 'clamp(2rem, 10vw, 8rem)',
  },
  floatingContainer3: {
    bottom: 'clamp(5rem, 20vh, 10rem)',
    left: 'clamp(4rem, 15vw, 12rem)',
  },
  decorativeDot: {
    position: 'absolute',
    width: '0.5rem',
    height: '0.5rem',
    backgroundColor: white,
    borderRadius: '50%',
    opacity: 0.6,
  },
  decorativeDot1: {
    top: '25%',
    left: '25%',
    animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
  },
  decorativeDot2: {
    top: '75%',
    right: '25%',
    animation: 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
  },
  decorativeDot3: {
    top: '50%',
    right: '33%',
    animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
  },
} as const;

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={styles.container}>
      {/* Floating Elements */}
      <FloatingElement style={styles.floatingContainer1} animationDelay={0}>
        <div style={{ ...styles.floatingCircle, backgroundColor: purple }}>
          <img
            src="/images/SirSupremeLogo.png"
            alt="Microphone icon"
            style={styles.iconImage}
          />
        </div>
      </FloatingElement>

      <FloatingElement style={styles.floatingContainer2} animationDelay={2}>
        <div style={{ ...styles.floatingCircle, backgroundColor: teal }}>
          <img
            src="/images/SirSupremeLogo.png"
            alt="YouTube icon"
            style={styles.iconImage}
          />
        </div>
      </FloatingElement>

      <FloatingElement style={styles.floatingContainer3} animationDelay={4}>
        <div style={{ ...styles.floatingCircle, backgroundColor: lightOrange }}>
          <img
            src="/images/SirSupremeLogo.png"
            alt="Social icon"
            style={styles.iconImage}
          />
        </div>
      </FloatingElement>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <h1 style={styles.heading}>
          We are a<span style={styles.italicText}>content creator</span>
          that <span style={styles.highlightSpan}>inspires</span> people
          <span style={styles.blockSpan}>through meaningful conversations</span>
        </h1>

        <button
          style={{
            ...styles.button,
            ...(isHovered ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Watch Latest Episode
        </button>
      </div>

      {/* Decorative Dots */}
      <div style={{ ...styles.decorativeDot, ...styles.decorativeDot1 }} />
      <div style={{ ...styles.decorativeDot, ...styles.decorativeDot2 }} />
      <div style={{ ...styles.decorativeDot, ...styles.decorativeDot3 }} />
    </div>
  );
};

export default Hero;
