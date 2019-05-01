import React from 'react';
import { Global, css } from '@emotion/core';

export function GlobalBackground({ color }) {
  return (
    <Global
      styles={css`
        body {
          background-color: ${color};
        }
      `}
    />
  );
}

export default GlobalBackground;
