import React from 'react';
import { Global, css } from '@emotion/core';

export function GlobalSelection({ selectionBg, selectionFg }) {
  return (
    <Global
      styles={css`
        ::selection {
          background-color: ${selectionBg};
          color: ${selectionFg};
        }
      `}
    />
  );
}

export default GlobalSelection;
