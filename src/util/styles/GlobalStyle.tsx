import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// --- Styled Components ---
const GlobalStyle = createGlobalStyle`
  ${reset};
	* {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, Helvetica, Arial, "hiragino kaku gothic pro", meiryo, "Microsoft YaHei", "ms pgothic", "Apple SD Gothic Neo", "Nanum Gothic", "Malgun Gothic", sans-serif;
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
`;

export default GlobalStyle;