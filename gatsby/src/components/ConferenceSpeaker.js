import React from 'react';
import Img from 'gatsby-image';

import styled from 'styled-components';

import returnDateTime from '../utils/dateTime';

const OnlineSeriesTalk = styled.div`
  border-bottom: 1px solid gainsboro;
  padding-bottom: 10px;
  .talk-time {
    font-size: 16px;
  }
`;

const SpeakerBio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  padding: 10px;
  margin: 5px 0;
  background-color: #2b2b2b;
  border-radius: 60px 4px 60px 4px;
  color: #ccc;
  text-shadow: -1px 1px 0 rgba(0, 0, 0, 0.25);
  .gatsby-image-wrapper {
    flex: none;
  }
  img {
    border-radius: 50%;
    padding: 0;
    box-shadow: 2px 2px 5px #000;
  }
  .speaker-text {
    width: 90%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    h3 {
      font-size: 16px;
      padding: 8px 0 6px 0;
      color: #f7dd56;
      margin: 0;
    }
    .bio-title {
      font-size: 17px;
      font-weight: bold;
      padding: 0 0 2px 0;
      color: white;
      margin: 0;
    }
    .bio-desc {
      padding-bottom: 8px;
      margin: 0;
      font-size: 12px;
    }
  }
`;

export default function ConferenceSpeaker({ speaker }) {
  const dateAndTime = returnDateTime(speaker.date_time, speaker.duration);
  return (
    <OnlineSeriesTalk>
      <h2>
        {dateAndTime.date} <span className="talk-time">{dateAndTime.time}</span>
      </h2>
      <SpeakerBio>
        <Img fixed={speaker.image.asset.fixed} alt={speaker.name} />
        <div className="speaker-text">
          <h3>
            {speaker.name}, {speaker.role}
          </h3>
          <p className="bio-title">{speaker.presentations}</p>
          <p className="bio-desc">{speaker.description}</p>
        </div>
      </SpeakerBio>
    </OnlineSeriesTalk>
  );
}
