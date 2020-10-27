import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const SpeakerBox = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 16px;
  padding: 16px;
  p {
    margin: 10px 0px 0px 0px;
    font-family: sans-serif;
    font-size: 16px;
  }
  .pres {
    color: #ff9000;
    line-height: 1.5;
    font-weight: bold;
  }
`;

const Person = styled.div`
  font-family: Domine, serif;
  display: flex;
  h2 {
    margin-bottom: 2px;
    font-size: 20px;
    line-height: 1.25;
    font-weight: bold;
  }
  h3 {
    margin-bottom: 2px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: bold;
  }
  .avatar {
    height: 96px;
  }
  .info {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
`;

const SocialLinks = styled.div`
  color: orange;
  display: flex;
  .wrapper {
    margin-right: 5px;
    padding: 4px;
    border: 1px solid rgba(17, 17, 17, 0.1);
    font-size: 20px;
    line-height: 20px;
    color: #f80;
    border-radius: 2px;
  }
`;

const Descript = styled.div``;

export default function Speaker({ speaker }) {
  const data = useStaticQuery(graphql`
    query {
      utahjs: file(relativePath: { eq: "utahjs-logo.png" }) {
        childImageSharp {
          fixed(height: 96, width: 96) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      utahjsIcon: file(relativePath: { eq: "utahjs-logo.png" }) {
        childImageSharp {
          fixed(height: 18, width: 15) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <SpeakerBox>
      <Person>
        <Img className='avatar' fixed={data.utahjs.childImageSharp.fixed} />
        <div className='info'>
          <h2>{speaker.name}</h2>
          <h3>{speaker.subtitle}</h3>
          <SocialLinks>
            {speaker.socialLinks.map((link) => (
              <div className='wrapper'>
                <a href={Object.keys(link)[0]}>
                  <Img fixed={data.utahjsIcon.childImageSharp.fixed} />
                </a>
              </div>
            ))}
          </SocialLinks>
        </div>
      </Person>
      <p>{speaker.description}</p>
      <p className='pres'>{speaker.presentations}</p>
    </SpeakerBox>
  );
}
