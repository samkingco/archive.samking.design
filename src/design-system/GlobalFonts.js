import React from 'react';
import { Global, css } from '@emotion/core';
import fontFace from './fonts/font-face';

export function GlobalFonts() {
  return (
    <Global
      styles={css`
        ${fontFace}
      `}
    />
  );
}

export default GlobalFonts;
