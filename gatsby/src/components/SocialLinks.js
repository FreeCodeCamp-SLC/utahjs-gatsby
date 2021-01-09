import React from 'react';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import styled from 'styled-components';

const SocialWrapper = styled.div`
  color: orange;
  display: flex;
  background-color: white;
  .wrapper {
    margin-right: 5px;
    padding: 4px;
    border: 1px solid rgba(17, 17, 17, 0.1);
    font-size: 20px;
    line-height: 20px;
    color: #f80;
    border-radius: 2px;
  }
  .wrapper:hover {
    background-color: orange;
  }
  .socialLink {
    width: 100%;
  }
  .socialLink:hover {
    color: white;
  }
`;

const SocialLinks = ({ link }) => {
  let twitter;
  let linkedIn;
  if (link.title === 'Twitter') {
    twitter = (
      <a href={link.url}>
        <div className="wrapper">
          <FaTwitter className="socialLink" />
        </div>
      </a>
    );
  }
  if (link.title === 'LinkedIn') {
    linkedIn = (
      <a href={link.url}>
        <div className="wrapper">
          <FaLinkedinIn className="socialLink" />
        </div>
      </a>
    );
  }

  return (
    <SocialWrapper>
      {twitter}
      {linkedIn}
    </SocialWrapper>
  );
};

export default SocialLinks;
