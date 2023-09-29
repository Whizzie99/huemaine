"use client";
import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  height: 100vh;
`;

export const StyledHeroLeft = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  background: var(--white);
`;

export const StyledHeroRight = styled.div`
  position: relative;
  width: 50%;
  background: url("images/contour-bg-2.webp");
  background-size: cover;
  background-position: center;
`;

export const StyledContent = styled.div`
  width: 80%;
  margin-left: 10%;

  h1 {
    position: relative;
    font-size: 3.6em;
    font-family: var(--font-bodoni);
    font-weight: 900;
    filter: invert(100%);
    mix-blend-mode: difference;
    z-index: 1;
    line-height: 1.3;
  }

  p {
    font-family: var(--font-alegreya);
    font-weight: 300;
    width: 70%;
  }
`;

export const StyledImg1 = styled.div`
  position: relative;
  height: 43em;
  width: 40em;
  top: 6%;
  left: -30%;
`;

export const StyledImg2 = styled.div`
  position: absolute;
  width: 25em;
  height: 30em;
  right: 0;
  bottom: -5%;
`;
