"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 5em 0;

  @media screen and (min-width: 1200px) {
    padding: 8em 0;
  }
`;

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const StyledLeftSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;

export const StyledRightSection = styled.div`
  width: 100%;

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;

export const StyledContent = styled.div`
  > h2 {
    color: var(--black-1);
    font-size: 2.2em;
    text-transform: capitalize;
    font-family: var(--font-bodoni);
    font-weight: 900;
    line-height: 1.2;
  }

  > p {
    width: 100%;
    color: var(--black-1);
    font-family: var(--font-alegreya);
    margin-top: 1em;
    font-size: 1em;
    font-weight: 300;
    line-height: 1.5;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 1200px) {
    > h2 {
      font-size: 3.2em;
    }

    > p {
      width: 90%;
      font-size: 1.2em;
    }
  }
`;

export const StyledImg = styled.div`
  position: relative;
  width: 100%;
  height: 25em;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  canvas {
    height: 100% !important;
    width: 100% !important;
  }

  @media screen and (min-width: 1200px) {
    height: 40em;
  }
`;
