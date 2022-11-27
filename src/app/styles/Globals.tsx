import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    * {
      font-family: 'Roboto', sans-serif;
    }

    html, 
    body {
        height: 100%;
    }

    :root {
      --blue30: #2D4071;
      --blue20: #D8DCFF;
      --blue40: #0094FF;
      --blue50: #0F1D40;
      --gray10: #F5F8FA;
      --gray20: #F0F0F0;
      --gray40: #8C939F;
      --green10: #ABE9CE;
      --orange10: #FFDFBA;
      --red10: #FEC6B7;
      --red40: #F21247;
      --purple30: #F2BAE1;
      --white: #fff;
    }
`;
