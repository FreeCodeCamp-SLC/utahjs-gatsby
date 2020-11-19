import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Sponsas = styled.div`
  max-width: 600px;
  padding-left: 100px;
  font-family: Domine, serif;
  h2 {
    font-weight: bold;
    border-bottom: 2px dotted #ccc;
  }
  .wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .spacer{
    margin-top: 10px;
  }
  }
`;

const Sponsors = () => {
  const data = useStaticQuery(graphql`
    query {
      workfront: file(relativePath: { eq: "workfront.png" }) {
        childImageSharp {
          fixed(height: 32, width: 185) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      auth: file(relativePath: { eq: "auth.png" }) {
        childImageSharp {
          fixed(height: 54, width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Sponsas>
      <h2>Thank you to our 2020 sponsors!</h2>
      <div className="wrapper">
        <div className="spacer">
          <a href="https://www.workfront.com/">
            <Img
              fixed={data.workfront.childImageSharp.fixed}
              alt="workfront logo"
            />
          </a>
        </div>
        <br />
        <a href="https://www.authO.com/">
          <Img fixed={data.auth.childImageSharp.fixed} alt="authO logo" />
        </a>
      </div>
    </Sponsas>
  );
};

export default Sponsors;
