const breakpoints = ['32em', '40em', '56em', '64em'];
const space = [0, 8, 16, 24, 32, 64, 128];

const sansStack =
  'system, -apple-system, "Helvetica Neue", Helvetica, "Segoe UI", "Roboto", sans-serif';

export const fonts = {
  text: `"Text", ${sansStack}`,
  textAlt: `"TextAlt", ${sansStack}`,
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
  blackAltAlpha: 'rgba(0, 0, 0, 0.48)',
  white: '#ffffff',
  whiteAlt: '#EBEBEB',
  whiteAltAlpha: 'rgba(255, 255, 255, 0.48)',
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
    selectionBg: baseColors.red,
    selectionFg: baseColors.black,
  },
  dark: {
    bg: baseColors.black,
    bgAlt: baseColors.blackAlt,
    text: baseColors.white,
    textAlt: baseColors.greyOnBlack,
    accent: baseColors.red,
    accentAlt: baseColors.redAlt,
    selectionBg: baseColors.red,
    selectionFg: baseColors.white,
  },
  red: {
    bg: baseColors.red,
    bgAlt: baseColors.redAlt,
    text: baseColors.black,
    textAlt: baseColors.blackAltAlpha,
    accent: baseColors.white,
    accentAlt: baseColors.whiteAltAlpha,
    selectionBg: baseColors.white,
    selectionFg: baseColors.black,
  },
  lyst: {
    bg: baseColors.white,
    bgAlt: baseColors.whiteAlt,
    text: baseColors.black,
    textAlt: baseColors.blackAltAlpha,
    accent: '#0831F5',
    accentAlt: '#0831F5',
    selectionBg: '#0831F5',
    selectionFg: baseColors.white,
  },
  rizon: {
    bg: '#151719',
    bgAlt: '#272D34',
    text: baseColors.white,
    textAlt: baseColors.whiteAltAlpha,
    accent: '#FF4700',
    accentAlt: '#FF6C33',
    selectionBg: '#FF4700',
    selectionFg: baseColors.white,
  },
  sandbox: {
    bg: '#F1F2F4',
    bgAlt: '#FCFDFF',
    text: '#282B2F',
    textAlt: baseColors.blackAltAlpha,
    accent: '#52667A',
    accentAlt: '#282B2F',
    selectionBg: '#52667A',
    selectionFg: baseColors.white,
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
