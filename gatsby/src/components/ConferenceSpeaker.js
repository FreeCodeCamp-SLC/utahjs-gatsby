import React from 'react';
import Img from 'gatsby-image';

import styled from 'styled-components';

const OnlineSeriesTalk = styled.div`
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
    padding: 0 5px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    .speaker-title {
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

  @media all and (min-width: 520px) {
    flex-direction: row;
    align-items: flex-start;
    .speaker-text {
      margin-left: 1em;
      margin-top: 0;
      .speaker-title {
        font-size: 20px;
      }
      .bio-desc {
        font-size: 16px;
      }
    }
  }
`;

export default function ConferenceSpeaker({ speaker }) {
  return (
    <OnlineSeriesTalk>
      <SpeakerBio>
        <Img fixed={speaker.image.asset.fixed} alt={speaker.name} />
        <div className="speaker-text">
          <h4 className="speaker-title">
            {speaker.name}, {speaker.role}
          </h4>
          <p className="bio-title">{speaker.presentations}</p>
          <p className="bio-desc">{speaker.description}</p>
        </div>
      </SpeakerBio>
    </OnlineSeriesTalk>
  );
}
