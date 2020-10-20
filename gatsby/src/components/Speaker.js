import React from 'react';
import styled from 'styled-components';

const SpeakerBox = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 16px;
  padding: 16px;
  img {
    width: 50px;
  }
`;

const SocialLinks = styled.div`
  color: orange;
  display: flex;
  div {
    border: 1px solid orange;
    width: 15px;
    padding: 2px;
    margin: 16px;
  }
`;
export default function Speaker({ speaker }) {
  return (
    <SpeakerBox>
      <h2>{speaker.name}</h2>
      <h3>{speaker.subtitle}</h3>
      <SocialLinks>
        {speaker.socialLinks.map((link) => (
          <div />
        ))}
      </SocialLinks>
      <p>{speaker.description}</p>
    </SpeakerBox>
  );
}
