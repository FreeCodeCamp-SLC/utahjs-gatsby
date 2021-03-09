import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Img from 'gatsby-image';

export const RelatedMeetupsStyles = styled.section`
  .sisters {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  .sister {
    flex: 100px;
    text-align: center;
    margin-bottom: 20px;
    display: block;
  }
  .sister-img,
  .sister-name {
    display: block;
    margin: 0 auto;
  }
  .sister-name {
    margin-top: 5px;
  }
`;

const RelatedMeetups = () => {
  const data = useStaticQuery(graphql`
    query {
      text: allSanityHome {
        nodes {
          otherMeetupHeader
          angularAnchorText
          angularUrl
          lunchAnchorText
          lunchUrl
          nodeAnchorText
          nodeUrl
          reactAnchorText
          reactUrl
          emberAnchorText
          emberUrl
          ionicAnchorText
          ionicUrl
          vueAnchorText
          vueUrl
          downtownCodingAnchorText
          downtownCodingUrl
        }
      }
      angular: sanityImageAsset(
        _id: {
          eq: "image-171c6f6745be3bf48998a229cb5237e030d51fa0-180x180-png"
        }
      ) {
        fixed(width: 90, height: 90) {
          ...GatsbySanityImageFixed
        }
      }
      downtown: sanityImageAsset(
        _id: { eq: "image-53fecb49097fe92435a8438c48bf5c53ab399555-90x58-png" }
      ) {
        fixed(width: 90, height: 58) {
          ...GatsbySanityImageFixed
        }
      }
      ember: sanityImageAsset(
        _id: {
          eq: "image-7382ab88816dd6a504ac482da3cae24452f40077-120x180-png"
        }
      ) {
        fixed(width: 60, height: 90) {
          ...GatsbySanityImageFixed
        }
      }
      ionic: sanityImageAsset(
        _id: {
          eq: "image-8f9ee0f792f16f3ef5fa653564836e698aca2d77-180x180-jpg"
        }
      ) {
        fixed(width: 90, height: 90) {
          ...GatsbySanityImageFixed
        }
      }
      lunch: sanityImageAsset(
        _id: {
          eq: "image-202e205b7f6074f171991bad081967513c3c0905-180x180-jpg"
        }
      ) {
        fixed(width: 90, height: 90) {
          ...GatsbySanityImageFixed
        }
      }
      node: sanityImageAsset(
        _id: {
          eq: "image-a50ab66036d092a844da86c32112ba04de4c7875-140x180-png"
        }
      ) {
        fixed(width: 70, height: 90) {
          ...GatsbySanityImageFixed
        }
      }
      react: sanityImageAsset(
        _id: {
          eq: "image-573b4f12f2c2be86e37dfdc3d91b0e18a60af9f1-180x180-png"
        }
      ) {
        fixed(width: 90, height: 90) {
          ...GatsbySanityImageFixed
        }
      }
      vue: sanityImageAsset(
        _id: {
          eq: "image-e159755b0370dd102d68b1eeed2182cd56d42897-180x180-png"
        }
      ) {
        fixed(width: 90, height: 90) {
          ...GatsbySanityImageFixed
        }
      }
    }
  `);
  const text = data.text.nodes[0];
  return (
    <RelatedMeetupsStyles>
      <h2 id="Meetups" className="center-it">
        {text.otherMeetupHeader}
      </h2>
      <div className="sisters">
        <a
          href={text.angularUrl}
          target="_blank"
          rel="noreferrer"
          className="sister"
        >
          <Img
            className="sister-img"
            backgroundColor="white"
            fixed={data.angular.fixed}
            alt="Angular"
          />
          <span className="sister-name">{text.angularAnchorText}</span>
        </a>
        <a
          href={text.lunchUrl}
          target="_blank"
          rel="noreferrer"
          className="sister"
        >
          <Img className="sister-img" fixed={data.lunch.fixed} alt="Lunch.JS" />
          <span className="sister-name">{text.lunchAnchorText}</span>
        </a>
        <a
          href={text.nodeUrl}
          target="_blank"
          rel="noreferrer"
          className="sister"
        >
          <Img
            className="sister-img"
            imgStyle={{ filter: 'brightness(1.2)' }}
            fixed={data.node.fixed}
            alt="NodeJS SLC"
          />
          <span className="sister-name">{text.nodeAnchorText}</span>
        </a>
      </div>
      <div className="sisters">
        <a
          href={text.reactUrl}
          target="_blank"
          rel="noreferrer"
          className="sister"
        >
          <Img
            className="sister-img"
            imgStyle={{ filter: 'brightness(0.6)' }}
            fixed={data.react.fixed}
            alt="react JS"
          />
          <span className="sister-name">{text.reactAnchorText}</span>
        </a>
        <a
          href={text.emberUrl}
          target="_blank"
          rel="noreferrer"
          className="sister"
        >
          <Img className="sister-img" fixed={data.ember.fixed} alt="Ember.js" />
          <span className="sister-name">{text.emberAnchorText}</span>
        </a>
        <a
          href={text.ionicUrl}
          target="_blank"
          rel="noreferrer"
          className="sister"
        >
          <Img className="sister-img" fixed={data.ionic.fixed} alt="Ionic" />
          <span className="sister-name">{text.ionicAnchorText}</span>
        </a>
      </div>
      <div className="sisters">
        <a
          href={text.vueUrl}
          target="_blank"
          rel="noreferrer"
          className="sister"
        >
          <Img className="sister-img" fixed={data.vue.fixed} alt="Vue.js" />
          <span className="sister-name">{text.vueAnchorText}</span>
        </a>
        <a
          href={text.downtownCodingUrl}
          target="_blank"
          rel="noreferrer"
          className="sister"
        >
          <Img
            className="sister-img"
            fixed={data.downtown.fixed}
            alt="Downtown Coding"
          />
          <span className="sister-name">{text.downtownCodingAnchorText}</span>
        </a>
      </div>
    </RelatedMeetupsStyles>
  );
};

export default RelatedMeetups;
