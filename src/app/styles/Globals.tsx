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
      --blue20: #D8DCFF;
      --blue30: #2D4071;
      --blue40: #0094FF;
      --blue50: #0F1D40;
      --gray5: #F3F3F3;
      --gray10: #F5F8FA;
      --gray20: #F0F0F0;
      --gray25: #E1E4E7;
      --gray35: #A5A5A5;
      --gray30: #E8EBEF;
      --gray40: #8C939F;
      --green10: #ABE9CE;
      --orange10: #FFDFBA;
      --red10: #FEC6B7;
      --red40: #F21247;
      --purple30: #F2BAE1;
      --white: #fff;
      --black20: #222222;
      --white5: #F0F1F2;
    }
`;
