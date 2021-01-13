import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Speaker from '../components/Speaker';

const PageStyles = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .speakers {
    color: #ff9000;
    cursor: pointer;
    font-family: Gothic A1;
  }
  button {
    color: transparent;
    background: transparent;
    border: none;
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
  // state for managing render of sessionize data
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [speakerData, setSpeakerData] = useState([]);

  // Object holding the urls for each year
  const speakerUrls = {
    2019: 'https://sessionize.com/api/v2/qlwqpj7m/view/Speakers',
    2018: 'https://sessionize.com/api/v2/8c8rnjbo/view/Speakers',
  };

  // states for which year's speakers we want to render
  const [speakerUrl, setspeakerUrl] = useState(speakerUrls['2019']);
  const [speakerYear, setspeakerYear] = useState('2019');
  // method for changing speaker year state
  const changeYear = (year) => {
    setspeakerUrl(speakerUrls[year]);
    setspeakerYear(year);
  };

  // fetch speaker data
  useEffect(() => {
    // url dependent on our speakerUrl state
    fetch(speakerUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSpeakerData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [speakerUrl]);

  // variables for dynamic jsx
  let speakers;
  let renderPastYear;

  // render speakers
  if (error) {
    speakers = <p>Error loading speakers</p>;
  } else if (!isLoaded) {
    speakers = <p>Loading...</p>;
  } else {
    speakers = (
      <ul>
        {speakerData.map((speaker) => (
          <Speaker speaker={speaker} key={speaker.id} />
        ))}
      </ul>
    );
  }

  // render different year link
  if (speakerUrl === 'https://sessionize.com/api/v2/qlwqpj7m/view/Speakers') {
    renderPastYear = (
      // choose buttons for the divs for a11y
      <button type="button" onClick={() => changeYear('2018')}>
        <p className="speakers">View 2018 Speakers</p>
      </button>
    );
  } else {
    renderPastYear = (
      <button type="button" onClick={() => changeYear('2019')}>
        <p className="speakers">View 2019 Speakers</p>
      </button>
    );
  }

  const seo = data.allSanitySeo.nodes[0];

  return (
    <Layout>
      <SEO seo={seo} />
      <PageStyles className="center-content">
        <h1>{speakerYear} Speakers</h1>
        <p>
          <em>in alphabetical order</em>
        </p>
        {renderPastYear}
        {speakers}
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
    allSanitySeo(filter: { page: { eq: "Home" } }) {
      nodes {
        title
        description
        fbAppId
        ogUrl
        ogType
        ogSiteName
        ogTitle
        ogDescription
        ogImageUrl {
          asset {
            url
          }
        }
        ogImageType
        ogImageWidth
        ogImageHeight
        twitterTitle
        twitterDescription
        twitterSite
        twitterCreator
        twitterImage {
          asset {
            url
          }
        }
      }
    }
  }
`;
