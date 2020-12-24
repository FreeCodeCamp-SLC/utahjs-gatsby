import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Speaker from '../components/Speaker';
import Layout from '../components/Layout';

const PageStyles = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .speakers {
    color: #ff9000;
    font-family: Gothic A1;
  }
`;

const AgendaManage = styled.div`
  display: flex;
  justify-content: center;
  font-size: 11px;
  font-family: sans-serif;
  margin-bottom: 17px;
  text-align: center;
  .strong {
    color: rgba(17, 17, 17, 0.5);
    font-weight: 600;
    transition: all 0.15s ease-in;
  }
  a {
    color: rgba(17, 17, 17, 0.5);
  }
  a:hover {
    .teal {
      color: #1ab394;
    }
  }
`;

export default function SpeakersPage({ data }) {
  const speakers = data.allSanitySpeaker.edges;
  return (
    <Layout>
      <PageStyles className="center-content">
        <h1>2019 Speakers</h1>
        <p>
          <em>in alphabetical order</em>
        </p>
        <p className="speakers">View 2018 Speakers</p>
        <div>
          {speakers.map((speaker) => (
            <Speaker speaker={speaker} key={speaker.node.id} />
          ))}
        </div>
        <AgendaManage>
          <a className="manage" href="https://sessionize.com/">
            <span className="strong">Agenda Management</span> powered by{' '}
            <span className="strong teal">Sessionize.com</span>
          </a>
        </AgendaManage>
      </PageStyles>
    </Layout>
  );
}

export const query = graphql`
  query {
    allSanitySpeaker {
      edges {
        node {
          id
          name
          role
          presentations
          description
          image {
            asset {
              fixed(width: 96) {
                base64
                width
                height
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
`;
