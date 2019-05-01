const breakpoints = ['32em', '40em', '56em', '64em'];
const space = [0, 8, 16, 24, 32, 64];

export const fonts = {
  text: '"Text", -apple-system, Helvetica, sans-serif',
  textAlt: '"TextAlt", -apple-system, Helvetica, sans-serif',
};

export const fontSizes = [14, 16, 20, 32];
export const fontWeights = ['normal', 'bold'];
export const lineHeights = ['1.2em', '1.4em', '1.6em'];

export const letterSpacings = {
  normal: '0.02em',
  sparse: '0.04em',
  extreme: '0.25em',
};

export const borders = [
  'none',
  '2px solid transparent',
  '4px solid transparent',
];

export const baseColors = {
  black: '#000000',
  blackAlt: '#141414',
  white: '#ffffff',
  whiteAlt: '#EBEBEB',
  grey: '#808080',
  greyOnBlack: '#A3A3A3',
  greyOnWhite: '#5C5C5C',
  red: '#FF4747',
  redAlt: '#E03F3F',
};

export const modes = {
  light: {
    bg: baseColors.white,
    bgAlt: baseColors.whiteAlt,
    text: baseColors.black,
    textAlt: baseColors.greyOnWhite,
    accent: baseColors.red,
    accentAlt: baseColors.redAlt,
  },
  dark: {
    bg: baseColors.black,
    bgAlt: baseColors.blackAlt,
    text: baseColors.white,
    textAlt: baseColors.greyOnBlack,
    accent: baseColors.red,
    accentAlt: baseColors.redAlt,
  },
};

const theme = {
  breakpoints,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  borders,
  colors: {
    ...modes.light,
    modes,
  },
};

export default theme;
