import React from 'react';
import styled from 'styled-components';

const Burger = styled.div`
  .hamburger {
    padding: 15px 15px;
    display: none;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
  }
  .hamburger:hover {
    opacity: 0.7;
  }
  .hamburger.is-active:hover {
    opacity: 0.7;
  }
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    // this changes the color of hamburger 1/2
    background-color: #f7dd56;
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    //controls thickness of hamburger slices
    /* width: 40px;
    height: 4px; */
    width: 45px;
    height: 5px;
    // this changes the color of hamburger 2/2
    background-color: #f7dd56;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: '';
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }

  /*
   * 3DX
   */
  .hamburger--3dx .hamburger-box {
    perspective: 80px;
  }

  .hamburger--3dx .hamburger-inner {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .hamburger--3dx .hamburger-inner::before,
  .hamburger--3dx .hamburger-inner::after {
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .hamburger--3dx.is-active .hamburger-inner {
    background-color: transparent !important;
    transform: rotateY(180deg);
  }
  .hamburger--3dx.is-active .hamburger-inner::before {
    transform: translate3d(0, 10px, 0) rotate(45deg);
  }
  .hamburger--3dx.is-active .hamburger-inner::after {
    transform: translate3d(0, -10px, 0) rotate(-45deg);
  }

  /*
   * 3DX Reverse
   */
  .hamburger--3dx-r .hamburger-box {
    perspective: 80px;
  }

  .hamburger--3dx-r .hamburger-inner {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .hamburger--3dx-r .hamburger-inner::before,
  .hamburger--3dx-r .hamburger-inner::after {
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .hamburger--3dx-r.is-active .hamburger-inner {
    background-color: transparent !important;
    transform: rotateY(-180deg);
  }
  .hamburger--3dx-r.is-active .hamburger-inner::before {
    transform: translate3d(0, 10px, 0) rotate(45deg);
  }
  .hamburger--3dx-r.is-active .hamburger-inner::after {
    transform: translate3d(0, -10px, 0) rotate(-45deg);
  }

  /*
   * 3DY
   */
  .hamburger--3dy .hamburger-box {
    perspective: 80px;
  }

  .hamburger--3dy .hamburger-inner {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .hamburger--3dy .hamburger-inner::before,
  .hamburger--3dy .hamburger-inner::after {
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .hamburger--3dy.is-active .hamburger-inner {
    background-color: transparent !important;
    transform: rotateX(-180deg);
  }
  .hamburger--3dy.is-active .hamburger-inner::before {
    transform: translate3d(0, 10px, 0) rotate(45deg);
  }
  .hamburger--3dy.is-active .hamburger-inner::after {
    transform: translate3d(0, -10px, 0) rotate(-45deg);
  }

  /*
   * 3DY Reverse
   */
  .hamburger--3dy-r .hamburger-box {
    perspective: 80px;
  }

  .hamburger--3dy-r .hamburger-inner {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .hamburger--3dy-r .hamburger-inner::before,
  .hamburger--3dy-r .hamburger-inner::after {
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .hamburger--3dy-r.is-active .hamburger-inner {
    background-color: transparent !important;
    transform: rotateX(180deg);
  }
  .hamburger--3dy-r.is-active .hamburger-inner::before {
    transform: translate3d(0, 10px, 0) rotate(45deg);
  }
  .hamburger--3dy-r.is-active .hamburger-inner::after {
    transform: translate3d(0, -10px, 0) rotate(-45deg);
  }

  /*
   * 3DXY
   */
  .hamburger--3dxy .hamburger-box {
    perspective: 80px;
  }

  .hamburger--3dxy .hamburger-inner {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .hamburger--3dxy .hamburger-inner::before,
  .hamburger--3dxy .hamburger-inner::after {
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .hamburger--3dxy.is-active .hamburger-inner {
    background-color: transparent !important;
    transform: rotateX(180deg) rotateY(180deg);
  }
  .hamburger--3dxy.is-active .hamburger-inner::before {
    transform: translate3d(0, 10px, 0) rotate(45deg);
  }
  .hamburger--3dxy.is-active .hamburger-inner::after {
    transform: translate3d(0, -10px, 0) rotate(-45deg);
  }

  /*
   * 3DXY Reverse
   */
  .hamburger--3dxy-r .hamburger-box {
    perspective: 80px;
  }

  .hamburger--3dxy-r .hamburger-inner {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .hamburger--3dxy-r .hamburger-inner::before,
  .hamburger--3dxy-r .hamburger-inner::after {
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .hamburger--3dxy-r.is-active .hamburger-inner {
    background-color: transparent !important;
    transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg);
  }
  .hamburger--3dxy-r.is-active .hamburger-inner::before {
    transform: translate3d(0, 10px, 0) rotate(45deg);
  }
  .hamburger--3dxy-r.is-active .hamburger-inner::after {
    transform: translate3d(0, -10px, 0) rotate(-45deg);
  }
  .hamburger--collapse .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--collapse .hamburger-inner::after {
    top: -20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      opacity 0.1s linear;
  }
  .hamburger--collapse .hamburger-inner::before {
    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--collapse.is-active .hamburger-inner {
    transform: translate3d(0, -10px, 0) rotate(-45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .hamburger--collapse.is-active .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      opacity 0.1s 0.22s linear;
  }
  .hamburger--collapse.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(-90deg);
    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  @media (max-width: 980px) {
    .hamburger {
      display: inline-block;
    }
  }
`;

const Hamburger = (props) => (
  <Burger>
    <button
      type="button"
      onClick={props.clickMe}
      className={
        !props.toggle
          ? 'hamburger hamburger--collapse'
          : 'hamburger hamburger--collapse is-active'
      }
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  </Burger>
);

export default Hamburger;
