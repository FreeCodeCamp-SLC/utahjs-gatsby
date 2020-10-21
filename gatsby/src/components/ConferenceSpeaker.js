import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import styled from 'styled-components';

const SpeakerBioStyle = styled.div`
  border-bottom: 1px solid gainsboro;
  padding-bottom: 10px;

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    padding: 0;
    box-shadow: 2px 2px 5px #000;
  }
`;

export default function ConferenceSpeaker({ speaker }) {
  return (
    <SpeakerBioStyle>
      <h2>
        {speaker.date} <span>{speaker.time}</span>
      </h2>
      <div>
        <Img src={speaker.img} alt={speaker.name} />
        <div>
          <h3>
            {speaker.name}, {speaker.role}
          </h3>
          <p>{speaker.presentation}</p>
          <p>{speaker.description}</p>
        </div>
      </div>
    </SpeakerBioStyle>
  );
}
