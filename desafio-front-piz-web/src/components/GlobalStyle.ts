import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  //   /* 🕵️‍♂️ MODO RAIO-X ATIVADO (Apague depois de achar o erro!) */
  //   outline: 2px solid red !important; 
  // }

  body {
    overflow-x: hidden; 
  }
`;