import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: "poppins", sans-serif; 
    }

  body {
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased; /* Deixa a fonte mais suave no Chrome/Safari */
  }

  button, input, textarea {
    font-family: inherit;
  }`;