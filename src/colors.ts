// colors.ts

export const AppColors = {
  primary: '#000',
  white: '#fff',
  orange: '#FF6B00',
  purple: '#9333EA',
  teal: '#2DD4BF',
  lightOrange: '#FB923C',
  background: '#000000',
  special: '#906272',
  grayText: '#525252',
  backgroundAlt: '#414141',
  christmasRed: '#DC143C',
} as const;

export type AppColorsType = typeof AppColors;
