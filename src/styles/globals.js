import { createGlobalStyle } from "styled-components";

import colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    background-color: ${colors.mostDarkestWhite}
  }

  body, input, textarea {
    font-family: 'Source Sans Pro', sans-serif !important;
    font-size: 16px;
  }
`;

export default GlobalStyle;