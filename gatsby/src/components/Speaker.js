import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';

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
    margin-top: 0;
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

export default function Speaker({ speaker }) {
  const speakerInfo = speaker.node;
  return (
    <SpeakerBox>
      <Person>
        <Img className="avatar" fixed={speakerInfo.image.asset.fixed} />
        <div className="info">
          <h2>{speakerInfo.name}</h2>
          <h3>{speakerInfo.role}</h3>
          {/* not every speaker has social links so we would need to build logic for this */}
          <SocialLinks>
            <div className="wrapper">
              <FaTwitter />
            </div>
            <div className="wrapper">
              <FaLinkedinIn />
            </div>
          </SocialLinks>
        </div>
      </Person>
      <p>{speakerInfo.description}</p>
      <p className="pres">{speakerInfo.presentations}</p>
    </SpeakerBox>
  );
}
