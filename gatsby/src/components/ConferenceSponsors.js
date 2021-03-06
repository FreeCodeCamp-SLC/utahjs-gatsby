import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: flex-start;
  font-family: Domine, serif;
  h2 {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
  .wrapper {
    border-top: 2px dotted #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .spacer {
    margin-top: 20px;
  }
  @media (min-width: 768px) {
    align-items: center;
    h2 {
      font-size: 22px;
      text-align: left;
    }
  }
`;

const Sponsors = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanitySponsors {
        nodes {
          altText
          sponsorUrl
          sponsor {
            asset {
              fixed(width: 185) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <h2>Thank you to our 2020 sponsors!</h2>
      <div className="wrapper">
        {data.allSanitySponsors.nodes.map((sponsor, id) => (
          <div className="spacer" key={`sponsor${id}`}>
            <a href={sponsor.sponsorUrl}>
              <Img fixed={sponsor.sponsor.asset.fixed} alt={sponsor.altText} />
            </a>
            <br />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Sponsors;
