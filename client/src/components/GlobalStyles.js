import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          font-size: 1rem;
          margin: 0;
          font-family: RobotoMono-Regular, Roboto Mono;
          background-color: ${theme.colors.backgroundPrimary};
          color: ${theme.colors.textPrimary};
        }
      `}
    />
  );
}

export default GlobalStyles;
