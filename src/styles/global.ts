import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    outline: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html {
    height: auto;
  }

  body {
    background: hsl(0, 0%, 98%);
    color: hsl(200, 15%, 8%);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Nunito Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
