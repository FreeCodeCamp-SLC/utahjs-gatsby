import React from 'react';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';

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
    margin: 0 2px 0 0;
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

const SocialLinksDiv = styled.div`
  display: flex;
`;

export default function Speaker({ speaker }) {
  console.log(speaker);
  return (
    <SpeakerBox>
      <Person>
        <img className="avatar" src={speaker.profilePicture} alt="" />

        <div className="info">
          <h2>{speaker.fullName}</h2>
          <h3>{speaker.tagLine}</h3>
          {/* not every speaker has social links so we would need to build logic for this */}
          <SocialLinksDiv>
            {speaker.links.map((link, i) => (
              <SocialLinks link={link} key={speaker.id + i} />
            ))}
          </SocialLinksDiv>
        </div>
      </Person>
      <p>{speaker.bio}</p>
      <p className="pres">
        Presentation: {speaker.sessions.map((session) => session.name)}
      </p>
    </SpeakerBox>
  );
}
