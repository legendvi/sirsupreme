import React, { useState } from 'react';
import { AppColors } from '../colors';
import { commonStyles, typography } from '../common';
import { Menu, X } from 'lucide-react';
import { zIndex } from '../constants/zIndex';
import useResponsive from '../hooks/useResponsive';
import { spacing } from '../hooks/breakpoints';

const { primary, white, mango } = AppColors;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useResponsive();
  const styles = makeStyles(isMobile);
  return (
    <header style={styles.headerContainer}>
      <div style={styles.logo}>
        <img
          width={isMobile ? 38 : 54}
          height={isMobile ? 38 : 54}
          style={styles.logoImg}
          src="/images/SirSupremeLogo.png"
          alt="Logo"
        />
        <span style={styles.logoText}>Sir Supreme</span>
      </div>

      {isMobile ? (
        <>
          <button
            style={styles.menuTrigger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} color={primary} />
            ) : (
              <Menu size={24} color={primary} />
            )}
          </button>

          <div
            style={{
              ...styles.mobileNav,
              opacity: isMenuOpen ? 1 : 0,
              visibility: isMenuOpen ? 'visible' : 'hidden',
            }}
          >
            <div style={styles.mobileNavContent}>
              {['about', 'channels', 'articles'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item}`}
                  style={{
                    ...styles.mobileNavItem,
                    transform: isMenuOpen
                      ? 'scale(1) rotate(0deg)'
                      : 'scale(0) rotate(-180deg)',
                    transitionDelay: `${index * 0.1}s`,
                  }}
                >
                  {item}
                </a>
              ))}
              <button
                style={{
                  ...styles.mobileContactButton,
                  transform: isMenuOpen
                    ? 'scale(1) rotate(0deg)'
                    : 'scale(0) rotate(-180deg)',
                  transitionDelay: '0.3s',
                }}
              >
                Contact US
              </button>
            </div>
          </div>
        </>
      ) : (
        <nav style={styles.nav}>
          <a href="#about" style={styles.navItem}>
            about
          </a>
          <a href="#channels" style={styles.navItem}>
            channels
          </a>
          <a href="#articles" style={styles.navItem}>
            articles
          </a>
          <button style={styles.button}>Contact US</button>
        </nav>
      )}
    </header>
  );
};

const makeStyles = (isMobile: boolean) =>
  ({
    headerContainer: {
      ...commonStyles.container,
      backgroundColor: mango,
      margin: isMobile ? spacing.container.mobile : spacing.container.desktop,
      padding: isMobile ? spacing.padding.mobile : spacing.padding.desktop,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: zIndex.headerNav,
      display: 'flex',
      maxHeight: '10vh',
      borderBottomLeftRadius: '50px',
      borderBottomRightRadius: '50px',
      justifyContent: 'space-between',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        margin: '0 2rem',
        padding: '15px',
      },
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      zIndex: zIndex.headerLogo,
    },
    logoImg: {
      borderRadius: '50%',
    },
    logoText: {
      ...commonStyles.heading4,
      fontFamily: typography.fontFamily.special,

      color: primary,
      marginLeft: '10px',
      '@media (max-width: 768px)': {
        fontSize: 'calc(1.8rem + 1vw)',
      },
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      zIndex: zIndex.headerNav,
    },
    navItem: {
      ...commonStyles.link,
      fontSize: typography.fontSize.navText,
      color: primary,
      fontFamily: typography.fontFamily.primaryMedium,
    },
    button: {
      ...commonStyles.button,
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSize.navText,
      backgroundColor: primary,
      color: white,
      padding: '10px 20px',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
    },
    menuTrigger: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      zIndex: zIndex.menuTrigger,
      width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      transition: 'background-color 0.3s ease',
      ':hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
      },
    },
    mobileNav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease-in-out',
      zIndex: zIndex.mobileNavOverlay,
    },
    mobileNavContent: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      gap: '2rem',
      zIndex: zIndex.mobileNavContent,
    },
    mobileNavItem: {
      ...commonStyles.link,
      color: primary,
      fontFamily: typography.fontFamily.special,
      fontSize: 'calc(2.4rem + 1vw)',
      transition: 'all 0.5s ease',
      textTransform: 'capitalize' as const,
      position: 'relative',
      '::after': {
        content: '""',
        position: 'absolute',
        bottom: '-5px',
        left: '50%',
        width: '0',
        height: '2px',
        backgroundColor: primary,
        transition: 'all 0.3s ease',
        transform: 'translateX(-50%)',
      },
      ':hover::after': {
        width: '100%',
      },
    },
    mobileContactButton: {
      ...commonStyles.button,
      backgroundColor: primary,
      color: white,
      padding: '15px 30px',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      fontSize: 'calc(1.6rem + 1vw)',
      marginTop: '2rem',
      transition: 'all 0.5s ease',
      ':hover': {
        transform: 'scale(1.05)',
      },
    },
  } as const);

export default Header;
