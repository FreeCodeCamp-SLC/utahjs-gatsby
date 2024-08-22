import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Level = (sponsors, level) => (
  <div className={`${level} level-${level}`}>
    <h3 className="level-heading">{level} Sponsors</h3>
    {sponsors.map((sponsor, id) => (
      <div className="spacer" key={`sponsor${id}`}>
        <a href={sponsor.sponsorUrl} target="_blank" rel="noreferrer">
          <Img fixed={sponsor.sponsor.asset.fixed} alt={sponsor.altText} />
        </a>
        <br />
      </div>
    ))}
  </div>
);

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
  .wrapper.stacked {
    flex-direction: row;
    justify-content: space-around;
  }
  .level {
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
  }
  .level-heading {
    align-self: start;
  }
  .spacer {
    margin-top: 20px;
  }
  .level-Silver .spacer {
    margin-top: 15px;
    scale: 0.75;
  }
  .level-Bronze .spacer {
    margin-top: 10px;
    scale: 0.5;
  }
  @media (min-width: 768px) {
    align-items: center;
    h2 {
      font-size: 22px;
      text-align: left;
    }
  }
  @media (max-width: 600px) {
    .wrapper.stacked {
      flex-direction: column;
    }
  }
`;

const Sponsors = ({ display }) => {
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

  const goldSponsors = [];
  const silverSponsors = [];
  const bronzeSponsors = [];

  data.allSanitySponsors.nodes.forEach((sponsor) => {
    if (sponsor.altText.includes('Gold')) {
      goldSponsors.push(sponsor);
    } else if (sponsor.altText.includes('Silver')) {
      silverSponsors.push(sponsor);
    } else if (sponsor.altText.includes('Bronze')) {
      bronzeSponsors.push(sponsor);
    }
  });
  if (
    goldSponsors.length === 0 &&
    silverSponsors.length === 0 &&
    bronzeSponsors.length === 0
  ) {
    return '';
  }
  return (
    <Wrapper>
      <h2>Thank you to our sponsors!</h2>
      <div className={`wrapper ${display}`}>
        {goldSponsors.length !== 0 && Level(goldSponsors, 'Gold')}
        {silverSponsors.length !== 0 && Level(silverSponsors, 'Silver')}
        {bronzeSponsors.length !== 0 && Level(bronzeSponsors, 'Bronze')}
      </div>
    </Wrapper>
  );
};

export default Sponsors;
