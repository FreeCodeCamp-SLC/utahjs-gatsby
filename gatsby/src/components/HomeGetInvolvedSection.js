import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

export const GetInvolvedStyles = styled.section`
  margin: 0 0 20px 0;
  background-color: #222;
  border-radius: 8px;
  padding: 20px;
  p {
    padding-bottom: 0.25em;
  }
  .btn,
  .btn:visited {
    font-weight: 400;
    text-transform: uppercase;
    color: #fff;
  }
  .btn:hover {
    opacity: 0.82;
    color: #fff;
  }
  .btn-participate {
    width: 180px;
    font-size: 16px;
    text-align: center;
    margin-bottom: 8px;
    white-space: nowrap;
    padding: 8px 12px;
  }
  .hero-buttons .btn:nth-child(1) {
    background-color: #f6e05a;
    color: #333;
  }
  .hero-buttons .btn:nth-child(2) {
    background-color: #0fa513;
  }
  .ways-to-participate dt:nth-child(14n + 1) .btn {
    background-color: #f6e05a;
    color: #333;
  }
  .ways-to-participate dt:nth-child(14n + 3) .btn {
    background-color: #0fa513;
  }
  .ways-to-participate dt:nth-child(14n + 5) .btn {
    background-color: #2095f2;
  }
  .ways-to-participate dt:nth-child(14n + 7) .btn {
    background-color: #6516d9;
  }
  .ways-to-participate dt:nth-child(14n + 9) .btn {
    background-color: #b113ba;
  }
  .ways-to-participate dt:nth-child(14n + 11) .btn {
    background-color: #e81d62;
  }
  .ways-to-participate dt:nth-child(14n + 13) .btn {
    background-color: #fe5621;
  }
  .ways-to-participate {
    padding-bottom: 0;
  }
  dl.ways-to-participate dt {
    float: left;
    clear: both;
    width: 140px;
  }
  dl.ways-to-participate dd {
    height: 90px;
    float: right;
    max-width: 425px;
  }
  dt,
  dd {
    line-height: 1.42857143;
  }
  dd {
    margin-bottom: 0;
  }
  b,
  strong,
  legend,
  label,
  button,
  th,
  dt {
    font-weight: 500;
  }
  a,
  a:hover,
  a:visited {
    color: #2095f2;
  }
  @media (max-width: 665px) {
    dl.ways-to-participate dt {
      float: none;
      text-align: center;
      width: auto;
    }
    dl.ways-to-participate dd {
      float: none;
      width: 100%;
      margin: 10px auto;
      text-align: center;
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
      <h2 id="GetInvolved" className="center-it">
        Get involved in JavaScript in Utah
      </h2>
      <dl className="ways-to-participate clearfix">
        {getInvolvedArray.map((item, id) =>
          item.internal_link !== null ? (
            <>
              <dt key={id}>
                <Link
                  to={`/${item.internal_link}`}
                  target={item.new_tab === true ? '_blank' : ''}
                  rel="noreferrer"
                  className="btn btn-participate"
                >
                  {item.link_text}
                </Link>
              </dt>
              <dd>
                <BlockContent blocks={item._rawText} />
              </dd>
            </>
          ) : (
            <>
              <dt key={id}>
                <a
                  href={item.external_link}
                  target={item.new_tab === true ? '_blank' : ''}
                  className="btn btn-participate"
                >
                  {item.link_text}
                </a>
              </dt>
              <dd>
                <BlockContent blocks={item._rawText} />
              </dd>
            </>
          )
        )}
      </dl>
    </GetInvolvedStyles>
  );
}
