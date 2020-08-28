import React from 'react';
import { Global, css } from '@emotion/core';

export function GlobalFonts() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Text';
          font-display: fallback;
          src: url('/fonts/Text.woff') format('woff'),
            url('/fonts/Text.woff2') format('woff2');
          font-style: normal;
          font-weight: normal;
        }

        @font-face {
          font-family: 'Text';
          font-display: fallback;
          src: url('/fonts/TextBold.woff') format('woff'),
            url('/fonts/TextBold.woff2') format('woff2');
          font-style: normal;
          font-weight: bold;
        }

        @font-face {
          font-family: 'Nikolai';
          font-display: fallback;
          src: url('/fonts/Nikolai.woff') format('woff'),
            url('/fonts/Nikolai.woff2') format('woff2');
          font-style: normal;
          font-weight: bold;
        }
      `}
    />
  );
}

export default GlobalFonts;
