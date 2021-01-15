import React, { useState } from 'react';
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
  .hover {
    background-color: #f80;
    color: #fff;
  }
`;

const SocialLinks = ({ link }) => {
  // state/functions for icon hover effect
  const [animationState, setAnimationState] = useState(false);
  const hoverHandler = () => {
    setAnimationState(true);
  };
  const hoverExitHandler = () => {
    setAnimationState(false);
  };

  let twitter;
  let linkedIn;
  if (link.title === 'Twitter') {
    twitter = (
      <a href={link.url}>
        <div
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverExitHandler}
          className={!animationState ? 'wrapper' : 'wrapper hover'}
        >
          <FaTwitter className="socialLink" />
        </div>
      </a>
    );
  }
  if (link.title === 'LinkedIn') {
    linkedIn = (
      <a href={link.url}>
        <div
          onMouseEnter={() => hoverHandler()}
          onMouseLeave={() => hoverExitHandler()}
          className={!animationState ? 'wrapper' : 'wrapper hover'}
        >
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
