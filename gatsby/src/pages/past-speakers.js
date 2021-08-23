import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
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
  @media (min-width: 980px) {
    .padding {
      padding-top: 40px;
    }
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
  const speakerList = data.speakerUrls.nodes;
  const [currentYear, setCurrentYear] = useState(speakerList[0]);

  // // Object holding the urls for each year
  // const speakerUrls = {};
  // // loop through our speaker data and destucture it into our speakerUrls object
  // const speakerUrlData = data.speakerUrls.nodes;
  // speakerUrlData.forEach((yearUrl) => {
  //   speakerUrls[yearUrl.year] = yearUrl.sessionizeUrl;
  // });
  //
  // const latestYear = data.speakerUrls.nodes[0].year;
  //
  // // states for which year's speakers we want to render
  // const [speakerUrl, setspeakerUrl] = useState(speakerUrls[latestYear]);
  // const [speakerYear, setspeakerYear] = useState(latestYear);
  //
  // // state for managing render of sessionize data
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [speakerData, setSpeakerData] = useState([]);
  //
  // // method for changing speaker year state
  // const changeYear = (year) => {
  //   setspeakerUrl(speakerUrls[year]);
  //   setspeakerYear(year);
  // };
  //
  // // fetch speaker data
  // useEffect(() => {
  //   // url dependent on our speakerUrl state
  //   fetch(speakerUrl)
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setSpeakerData(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, [speakerUrl]);
  //
  // // variables for dynamic jsx
  // let speakers;
  // let renderPastYear;
  //
  // // render speakers
  // if (error) {
  //   speakers = <p>Error loading speakers</p>;
  // } else if (!isLoaded) {
  //   speakers = <p>Loading...</p>;
  // } else {
  //   speakers = (
  //     <ul>
  //       {speakerData.map((speaker) => (
  //         <Speaker speaker={speaker} key={speaker.id} />
  //       ))}
  //     </ul>
  //   );
  // }
  //
  // // render different year link
  // if (speakerUrl === 'https://sessionize.com/api/v2/qlwqpj7m/view/Speakers') {
  //   renderPastYear = (
  //     // choose buttons for the divs for a11y
  //     <button type="button" onClick={() => changeYear(2018)}>
  //       <p className="speakers">View 2018 Speakers</p>
  //     </button>
  //   );
  // } else {
  //   renderPastYear = (
  //     <button type="button" onClick={() => changeYear(2019)}>
  //       <p className="speakers">View 2019 Speakers</p>
  //     </button>
  //   );
  // }

  const seo = data.allSanitySeo.nodes[0];

  return (
    <Layout>
      <SEO seo={seo} />
      <PageStyles className="center-content">
        <div className="padding" />
        <div className="year-chooser">
          {speakerList.map((list) => (
            <span
              role="link"
              key={list.year}
              className={`year-choice ${list === currentYear ? 'current' : ''}`}
              onClick={() => setCurrentYear(list)}
            >
              {list.year}
            </span>
          ))}
        </div>
      </PageStyles>
    </Layout>
  );
}

export const query = graphql`
  query {
    speakerUrls: allSanitySpeakerUrls(sort: { fields: year, order: DESC }) {
      nodes {
        sessionizeUrl
        year
      }
    }
    allSanitySeo(filter: { page: { eq: "Past Speakers" } }) {
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
