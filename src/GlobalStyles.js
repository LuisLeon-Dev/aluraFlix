import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa; 
    color: #333; 
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    color: #2c3e50; 
  }

  p {
    line-height: 1.6;
    color: #555; 
  }

  a {
    text-decoration: none;
    color: inherit; 
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
