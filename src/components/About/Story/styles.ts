"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 8em 0;
`;

export const StyledSection = styled.div`
  display: flex;
  gap: 1em;
`;

export const StyledLeftSection = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const StyledRightSection = styled.div`
  width: 50%;
`;

export const StyledContent = styled.div`
  > h2 {
    color: var(--black-1);
    font-size: 3.2em;
    text-transform: capitalize;
    font-family: var(--font-bodoni);
    font-weight: 900;
    line-height: 1.2;
  }

  > p {
    width: 90%;
    color: var(--black-1);
    font-family: var(--font-alegreya);
    margin-top: 1em;
    font-size: 1.2em;
    font-weight: 300;
    line-height: 1.5;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const StyledImg = styled.div`
  position: relative;
  width: 100%;
  height: 40em;
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
`;
