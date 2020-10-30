import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Speaker from '../components/Speaker';
import { speakers } from '../data/speakers';

const PageStyles = styled.div`
  font-family: Domine, serif;
  max-width: 1240px;
  margin: 0 auto;
  color: #333;
  padding: 16px;
  height: 100vh;
  .bold {
    font-size: 26px;
    font-weight: 600;
  }
  .italic {
    font-style: italic;
    font-family: Gothic A1;
  }
  #wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #speakers {
    color: #ff9000;
    font-family: Gothic A1;
  }
`;

const AgendaManage = styled.div`
  display: flex;
  justify-content: center;
  font-size: 11px;
  font-family: sans-serif;
  text-decoration: none;
  margin-bottom: 17px;
  .strong {
    color: rgba(17, 17, 17, 0.5);
    font-weight: 600;
    transition: all 0.15s ease-in;
  }
  a {
    color: rgba(17, 17, 17, 0.5);
  }
  a:hover {
    #teal {
      color: #1ab394;
    }
  }
`;

export default function SpeakersPage() {
  return (
    <>
      <nav>bunch of alinks</nav>
      <PageStyles>
        <div id="wrapper">
          <h2 className="bold">2019 Speakers</h2>
          <p className="italic">in alphabetical order</p>
          <p id="speakers">View 2018 Speakers</p>
          {speakers.map((speaker) => (
            <Speaker speaker={speaker} />
          ))}
        </div>
        <AgendaManage>
          <a className="manage" href="https://sessionize.com/">
            <span className="strong">Agenda Management</span> powered by{' '}
            <span className="strong" id="teal">
              Sessionize.com
            </span>
          </a>
        </AgendaManage>
      </PageStyles>
    </>
  );
}
