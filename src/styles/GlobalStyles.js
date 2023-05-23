import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/colors';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  img{
    display: block;
    max-width: 100%;
  }
  body{
    margin: 0;
    font-family: sans-serif;
    background-color: ${COLORS.bgColor};
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  @font-face {
    font-family: "Cygre Semibold";
    src: url("/Fonts/Package 1 - Cygre Default Full (.ttf)/Cygre-SemiBold.ttf");
  }

  @font-face {
    font-family: "Cygre Book";
    src: url("/Fonts/Package 1 - Cygre Default Full (.ttf)/Cygre-Book.ttf");
  }

  @font-face {
    font-family: "Cygre Regular";
    src: url("/Fonts/Package 1 - Cygre Default Full (.ttf)/Cygre-Regular.ttf");
  }
  @font-face {
    font-family: "Cygre Medium Italic";
    src: url("/Fonts/Package 1 - Cygre Default Full (.ttf)/Cygre-MediumIt.ttf");
  }

  @font-face {
    font-family: "Fungis Bold";
    src: url("/Fonts/FUNGIS-1/fonts/OpenType-TT/FUNGIS Bold.ttf");
  }
`;

export { GlobalStyles };
