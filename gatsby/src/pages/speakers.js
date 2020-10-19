import React from 'react';
import styled from 'styled-components';
import Speaker from '../components/Speaker';
import { speakers } from '../data/speakers';

const PageStyles = styled.div`
  background: white;
  color: #333;
  padding: 16px;
  height: 100vh;
`;
export default function SpeakersPage() {
  return (
    <>
      <nav>bunch of alinks</nav>
      <PageStyles>
        <div>
          <h2>2019 Speakers</h2>
          <p>in alphabetical order</p>
          <p>View 2018 Speakers</p>
          {speakers.map((speaker) => (
            <Speaker speaker={speaker} />
          ))}
        </div>
      </PageStyles>
    </>
  );
}
