import React from 'react';
import { Global, css } from '@emotion/core';

export function GlobalStyle() {
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
          transition: background-color 150ms ease-in-out;
        }
      `}
    />
  );
}

export default GlobalStyle;
