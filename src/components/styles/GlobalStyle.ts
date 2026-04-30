import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: "poppins", sans-serif; 
    }

  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased; /* Deixa a fonte mais suave no Chrome/Safari */

    body {
  margin: 0;
  opacity: 0;
  animation: groundUpPage 1s ease-out forwards;

@keyframes groundUpPage {
  from {
    opacity: 0; 
    transform: translateY(20px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
}
}
  }

  button, input, textarea {
    font-family: inherit;
  }
    
  
  textarea {
    cursor: none;
  };
`
  
