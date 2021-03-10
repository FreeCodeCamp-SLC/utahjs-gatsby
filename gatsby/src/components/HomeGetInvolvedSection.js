import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

export const GetInvolvedStyles = styled.section`
  margin: 0 0 20px 0;
  background-color: #222;
  border-radius: 8px;
  padding: 20px;
  .flexBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  h2 {
    text-align: center;
  }
  p {
    margin-bottom: 40px;
  }
  button {
    min-width: 180px;
    max-width: 180px;
    height: 40px;
    font-size: 16px;
    text-align: center;
    margin-bottom: 8px;
    margin-right: 25px;
    white-space: nowrap;
    text-transform: uppercase;
    border-radius: 5px;
    border: none;
  }
  a {
    font-weight: 600;
    color: #ffffff;
  }
  a:hover,
  a:focus,
  a:visited {
    text-decoration: none;
  }

  p > a {
    color: #2095f2;
    font-weight: 600;
  }
  .btnNum0,
  .aNum0 {
    background-color: #f6e05a;
    color: #333333;
  }
  .btnNum1,
  .aNum1 {
    background-color: #0fa513;
  }
  .btnNum2,
  .aNum2 {
    background-color: #2095f2;
  }
  .btnNum3,
  .aNum3 {
    background-color: #6516d9;
  }
  .btnNum4,
  .aNum4 {
    background-color: #b113ba;
  }
  .btnNum5,
  .aNum5 {
    background-color: #e81d62;
  }
  .btnNum6,
  .aNum6 {
    background-color: #fe5621;
  }
  .btnNum7,
  .aNum7 {
    background-color: #f6e05a;
    color: #333333;
  }
  .btnNum8,
  .aNum8 {
    background-color: #0fa513;
  }
  .btnNum9,
  .aNum9 {
    background-color: #2095f2;
  }
  @media (min-width: 550px) {
    .flexBox {
      flex-direction: row;
      text-align: left;
    }
    button {
      margin-bottom: 40px;
    }
  }
`;

export default function GetInvolvedSection() {
  const { allSanityHomeGetInvolved } = useStaticQuery(graphql`
    query {
      allSanityHomeGetInvolved(sort: { order: ASC, fields: order }) {
        nodes {
          link_text
          internal_link
          external_link
          new_tab
          _rawText
          order
        }
      }
    }
  `);
  const getInvolvedArray = allSanityHomeGetInvolved.nodes;
  return (
    <GetInvolvedStyles>
      <h2>Get involved in JavaScript in Utah</h2>
      <div>
        {getInvolvedArray.map((item, id) =>
          item.internal_link !== null ? (
            <div className="flexBox" key={`link${id}`}>
              <button className={`btnNum${id}`} type="button">
                <Link
                  to={`/${item.internal_link}`}
                  target={item.new_tab === true ? '_blank' : ''}
                  rel="noreferrer"
                  className={`aNum${id}`}
                >
                  {item.link_text}
                </Link>
              </button>

              <BlockContent blocks={item._rawText} />
            </div>
          ) : (
            <div className="flexBox" key={`link${id}`}>
              <button className={`btnNum${id}`} type="button">
                <a
                  href={item.external_link}
                  target={item.new_tab === true ? '_blank' : ''}
                  className={`aNum${id}`}
                >
                  {item.link_text}
                </a>
              </button>

              <BlockContent className="blockContent" blocks={item._rawText} />
            </div>
          )
        )}
      </div>
    </GetInvolvedStyles>
  );
}
