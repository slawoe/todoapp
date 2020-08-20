import { Global, css } from "@emotion/core";
import React from "react";

const GlobalStyles = () => (
  <Global
    styles={css`
      *:before,
      *:after {
        box-sizing: border-box;
        margin: 0;
      }

      body {
        position: fixed;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }
    `}
  />
);

export default GlobalStyles;
