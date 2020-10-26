import React from 'react';
import styled from 'styled-components';
import Speaker from '../components/Speaker';
import { speakers } from '../data/speakers';

const PageStyles = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  color: #333;
  padding: 16px;
  height: 100vh;
  .italic {
    font-style: italic;
  }
  #wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #speakers {
    color: #ff9000;
  }
`;
export default function SpeakersPage() {
  return (
    <>
      <nav>bunch of alinks</nav>
      <PageStyles>
        <div id='wrapper'>
          <h2>2019 Speakers</h2>
          <p className='italic'>in alphabetical order</p>
          <p id='speakers'>View 2018 Speakers</p>
          {speakers.map((speaker) => (
            <Speaker speaker={speaker} />
          ))}
        </div>
      </PageStyles>
    </>
  );
}
