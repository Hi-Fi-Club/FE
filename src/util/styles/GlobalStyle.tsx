import { createGlobalStyle } from "styled-components";
import {
  Nunito_Black,
  Nunito_ExtraBold,
  Nunito_ExtraBoldItalic,
  Nunito_Bold,
  Nunito_SemiBold,
  Nunito_Regular,
  Nunito_Light,
  Nunito_ExtraLight,
} from "assets/fonts";

import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
	* {
    box-sizing: border-box;
  }

  body {
    font-family:'Nunito_Regular';
    font-size: 18px;
    line-height: 21px;
    color: #212529;
  }

  a, a:active, a:hover, a:visited{
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  ul, ol {
    list-style: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  @font-face {
    font-family: 'Nunito_Black';
    src: local('Nunito_Black'),
    url(${Nunito_Black})format('woff');
  }

  @font-face {
    font-family: 'Nunito_ExtraBold';
    src: local('Nunito_ExtraBold'),
    url(${Nunito_ExtraBold})format('woff');
  }

  @font-face {
    font-family: 'Nunito_Bold';
    src: local('Nunito_Bold'),
    url(${Nunito_Bold})format('woff');
  }

  @font-face {
    font-family: 'Nunito_SemiBold';
    src: local('Nunito_SemiBold'),
    url(${Nunito_SemiBold})format('woff');
  }

  @font-face {
    font-family: 'Nunito_Regular';
    src: local('Nunito_Regular'),
    url(${Nunito_Regular})format('woff');
  }

  @font-face {
    font-family: 'Nunito_Light';
    src: local('Nunito_Light'),
    url(${Nunito_Light})format('woff');
  }

  @font-face {
    font-family: 'Nunito_ExtraLight';
    src: local('Nunito_ExtraLight'),
    url(${Nunito_ExtraLight})format('woff');
  }

  @font-face {
    font-family: 'Nunito_ExtraBoldItalic';
    src: local('Nunito_ExtraBoldItalic'),
    url(${Nunito_ExtraBoldItalic})format('woff');
  }
`;

export default GlobalStyle;
