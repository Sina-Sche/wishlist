import { createGlobalStyle } from 'styled-components';
import bg from './assets/bg.jpg';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
  width: 100vw;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: block;
    background-image: url(${bg}); 
    background-color: black;
    background-size: cover;
    color: #4C0013;
    text-decoration: none;
  }

  Link {
    text-decoration: none;
  }
`;

export default GlobalStyle;
