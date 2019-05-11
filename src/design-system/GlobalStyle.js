import React from 'react';
import { Global, css } from '@emotion/core';
import { useActiveThemeContext } from '../components/ActiveTheme';

export function GlobalStyle() {
  const { theme } = useActiveThemeContext();

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
          background-color: ${theme.colors.bg};
          color: ${theme.colors.fg};
          transition: background-color 250ms ease-in-out 0s;
        }

        ::selection {
          background-color: ${theme.colors.selectionBg};
          color: ${theme.colors.selectionFg};
        }
      `}
    />
  );
}

export default GlobalStyle;
