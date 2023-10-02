"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledTopgraphicImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const StyledContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  h1 {
    position: relative;
    display: flex;
    flex-direction: column;
    font-family: var(--font-bodoni);
    filter: invert(100%);
    mix-blend-mode: difference;
    z-index: 1;
    line-height: 1;
    z-index: 2;

    span {
      font-size: 3.3em;
      font-weight: 900;
      color: var(--black-1);
      text-transform: capitalize;

      &:nth-child(1) {
        margin-left: -2em;
      }

      &:nth-child(2) {
        margin-left: -1em;
      }
    }
  }
`;

export const StyledImg1 = styled.div`
  position: absolute;
  top: -30%;
  left: 20%;
  width: 25em;
  height: 35em;
  z-index: 1;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const StyledImg2 = styled.div`
  position: absolute;
  top: -5%;
  right: -50%;
  width: 20em;
  height: 30em;
  /* z-index: 3; */
  transform: rotate(49.825deg);

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
