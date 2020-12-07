import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body,
  input,
  select,
  textarea {
    font-family: "Gothic A1", sans-serif;
    font-size: 16px;
    font-weight: normal;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    font-family: Domine, serif;
    color: #000;
  }
  h1 {
    font-size: 26px;
  }
  h2 {
    font-size: 22px;
  }
  h3 {
    font-size: 20px;
  }
  h4 {
    font-size: 18px;
  }
  h5, h6 {
    font-size: 16px;
  }
  b,
  strong,
  legend,
  label,
  button,
  th,
  dt {
    font-weight: 700;
  }
  .btn.btn-primary {
    color: #fff;
    background-color: #dd7d00;
    border-color: transparent;
  }
  .btn.btn-primary:hover {
    background-color: #ff9000
  }
  .btn.btn-secondary {
    color: #222;
    background-color: #fae034;
  }
  .btn.btn-secondary:hover {
    background-color: #fff28b
  }
`;

export default GlobalStyles;
