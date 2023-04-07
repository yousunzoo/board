import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
// reset
${reset}
// normalize
${normalize}

* {
  box-sizing: border-box;
}

body {
  background-color: #4051D1;
  position:relative;
  width:100vw;
  height: 100vh;
}

button {
  cursor: pointer;
  background-color: transparent;
  border: none;
}
`;
