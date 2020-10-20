import styled from 'styled-components';

export const HomeStyles = styled.div`
  background-color: #000;
  padding: 20px;
  font-family: 'Fira Sans', sans-serif;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #2095f2;
    font-weight: bold;
    font-family: Sanchez, serif;
    margin: 0 0 1em 0;
    padding: 0;
    line-height: 1.3;
  }
  main {
    /* min-height: calc(100vh - 195px); */
    text-align: center;
  }
`;

export const CenterContent = styled.section`
  color: white;
  max-width: 680px;
  padding: 0 5px;
  margin: 0 auto;
  text-align: left;
  section {
    margin: 0 0 20px 0;
    background-color: #222;
    border-radius: 8px;
    padding: 20px;
  }

  .table {
    margin-top: 11px;
  }
  .table th {
    background-color: #f9e034;
    color: #343433;
  }

  .center-it {
    text-align: center;
  }

  p {
    padding-bottom: 0.25em;
  }
  .btn,
  .btn:visited {
    font-weight: 400;
    text-transform: uppercase;
    color: #fff;
  }
  .btn:hover {
    opacity: 0.82;
    color: #fff;
  }
  .btn-participate {
    width: 180px;
    text-align: center;
    margin-bottom: 8px;
    white-space: nowrap;
  }
  .hero-buttons .btn:nth-child(1) {
    background-color: #f6e05a;
    color: #333;
  }
  .hero-buttons .btn:nth-child(2) {
    background-color: #0fa513;
  }

  .ways-to-participate dt:nth-child(14n + 1) .btn {
    background-color: #f6e05a;
    color: #333;
  }
  .ways-to-participate dt:nth-child(14n + 3) .btn {
    background-color: #0fa513;
  }
  .ways-to-participate dt:nth-child(14n + 5) .btn {
    background-color: #2095f2;
  }
  .ways-to-participate dt:nth-child(14n + 7) .btn {
    background-color: #6516d9;
  }
  .ways-to-participate dt:nth-child(14n + 9) .btn {
    background-color: #b113ba;
  }
  .ways-to-participate dt:nth-child(14n + 11) .btn {
    background-color: #e81d62;
  }
  .ways-to-participate dt:nth-child(14n + 13) .btn {
    background-color: #fe5621;
  }

  .ways-to-participate {
    padding-bottom: 0;
  }
  dl.ways-to-participate dt {
    float: left;
    clear: both;
    width: 140px;
  }
  dl.ways-to-participate dd {
    height: 90px;
    float: right;
    max-width: 425px;
  }
  dt,
  dd {
    line-height: 1.42857143;
  }
  dd {
    margin-bottom: 0;
  }
  b,
  strong,
  legend,
  label,
  button,
  th,
  dt {
    font-weight: 500;
  }

  a,
  a:hover,
  a:visited {
    color: #2095f2;
  }

  .sisters {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  .sister {
    flex: 100px;
    text-align: center;
    margin-bottom: 20px;
    display: block;
  }
  .sister-img,
  .sister-name {
    display: block;
    margin: 0 auto;
  }
  .sister-name {
    margin-top: 5px;
  }

  @media (max-width: 520px) {
    dl.ways-to-participate dt {
      float: none;
      text-align: center;
      width: auto;
    }
  }
`;
