import React from 'react';
import { Global, css } from '@emotion/core';

export function GlobalStyle({ bg, fg, selectionBg, selectionFg }) {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        html {
          height: 100%;
        }

        body,
        #root {
          margin: 0;
          padding: 0;
          min-height: 100%;
        }

        body {
          background-color: ${bg};
          color: ${fg};
          transition: background-color 150ms ease-in-out;
        }

        ::selection {
          background-color: ${selectionBg};
          color: ${selectionFg};
        }
      `}
    />
  );
}

export default GlobalStyle;
