import { useEffect, useState } from 'react';
import { breakpoints } from './breakpoints';
const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: windowWidth <= breakpoints.mobile,
    isTablet: windowWidth <= breakpoints.tablet,
    isDesktop: windowWidth > breakpoints.tablet,
  };
};

export default useResponsive;
