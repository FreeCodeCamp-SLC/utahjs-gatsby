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
  font-size: 16px;

}
h1 {
  font-size: 24px;
}
h2 {
  font-size: 24px;
}
h3 {
  font-size: 20px;
}
h4 {
  font-size: 18px;
}
h5 {
  font-size: 16px;
}
h6 {
  font-size: 16px;
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
  a{
    text-decoration: none;
    color: #222222;
  }
  a:hover{
    text-decoration: none;
    color: #222222;
  }
  
`;

export default GlobalStyles;
