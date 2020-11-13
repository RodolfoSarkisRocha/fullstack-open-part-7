import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Roboto;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;    
  }
  #root { 
    height: 100vh;
  }
`;

export default GlobalStyle;
