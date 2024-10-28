// styles/common.ts

export const typography = {
  fontFamily: {
    primary: 'Ruh1, sans-serif',
    primaryMedium: 'Ruh1 Medium, sans-serif',
    special: 'GreatVibes, sans-serif',
  },
  fontSize: {
    header1: 'var(--header1)',
    header2: 'var(--header2)',
    header3: 'var(--header3)',
    header4: 'var(--header4)',
    text: 'var(--text)',
    navText: 'var(--nav-text)',
    bigText: 'var(--bigText)',
  },
};

export const commonStyles = {
  container: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box' as const,
  },
  heading1: {
    fontSize: typography.fontSize.header1,
    fontFamily: typography.fontFamily.special,
  },
  heading2: {
    fontSize: typography.fontSize.header2,
    fontFamily: typography.fontFamily.primary,
  },
  heading3: {
    fontSize: typography.fontSize.header3,
    fontFamily: typography.fontFamily.primary,
  },
  heading4: {
    fontSize: typography.fontSize.header4,
    fontFamily: typography.fontFamily.primary,
  },
  text: {
    fontSize: typography.fontSize.text,
    fontFamily: typography.fontFamily.primary,
  },
  bigText: {
    fontSize: typography.fontSize.bigText,
    fontFamily: typography.fontFamily.special,
  },
  link: {
    fontSize: typography.fontSize.text,
    fontFamily: typography.fontFamily.primary,
    textDecoration: 'none',
    color: 'inherit',
  },
  button: {
    fontSize: typography.fontSize.text,
    fontFamily: typography.fontFamily.primaryMedium,
  },
};
