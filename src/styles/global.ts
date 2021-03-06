import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
  }

  body {
    background: #f9f9f9;
    color: #333333;
    -webkit-font-smoothing : antialiased;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
