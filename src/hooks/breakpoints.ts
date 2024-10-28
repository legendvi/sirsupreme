export const breakpoints = {
  mobile: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
  largeDesktop: 1440,
};

export const spacing = {
  container: {
    mobile: '0 2rem',
    desktop: '0 8rem',
  },
  padding: {
    mobile: '15px',
    desktop: '20px',
  },
};

export const mediaQuery = {
  mobile: `@media (max-width: ${breakpoints.mobile}px)`,
  tablet: `@media (max-width: ${breakpoints.tablet}px)`,
  laptop: `@media (max-width: ${breakpoints.laptop}px)`,
  desktop: `@media (max-width: ${breakpoints.desktop}px)`,
};
