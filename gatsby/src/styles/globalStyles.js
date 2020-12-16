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
  h1, h2, h3 {
    margin-top: 22px;
    margin-bottom: 11px;
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
  a {
	color: #ff9000;
  text-decoration: none;
  }
  a:hover,
  a:focus,
  a:visited {
    color: #ff9000;
    text-decoration: none;
  }
  main {
    background-color: #fff;
    min-height: calc(100vh - 195px);
    text-align: center;
  }
  .center-it {
    text-align: center;
  }
  .center-content {
    max-width: 1240px;
    padding: 0 20px;
    margin: 0 auto;
    text-align: left;
  }
  .btn {
    font-size: 15px;
    text-transform: uppercase;
  }
  .btn-primary,
  a.btn.btn-primary {
    color: #fff;
    background-color: #dd7d00;
    border-color: transparent;
  }
  .btn.btn-primary:hover {
    background-color: #ff9000
  }
  .btn-secondary {
    border-color: #fae034;
    background-color: #fae034;
    color: #343434;
  }
  .btn-secondary:hover {
    border-color: #fff28b;
    background-color: #fff28b;
    color: #000;
  }
`;

export default GlobalStyles;
