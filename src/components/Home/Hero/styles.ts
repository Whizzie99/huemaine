"use client";
import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const StyledHeroLeft = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--white);

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;

export const StyledHeroRight = styled.div`
  position: relative;
  display: none;
  width: 100%;
  height: 100%;
  background: url("images/contour-bg-2.webp");
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 1200px) {
    width: 50%;
    display: block;
  }
`;

export const StyledContent = styled.div`
  width: 80%;
  margin-left: 10%;
  background: transparent;

  h1 {
    position: relative;
    font-size: 2.3em;
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
    width: 90%;
    font-size: 0.9em;
    line-height: 1.5;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75%;
    padding: 1em;
    border: 0.01em solid var(--black-1);
    margin-top: 1em;
    text-decoration: none;
    color: var(--black-1);
    gap: 0.5em;
    transition: all 0.3s ease;
    font-size: 0.9em;

    & span {
      &:first-child {
        font-family: var(--font-alegreya);
        font-weight: 300;
        text-transform: capitalize;
      }

      &:last-child {
        margin-top: 0.2em;
      }
    }

    &:hover {
      color: var(--white);
      background: var(--black-1);
    }
  }

  @media screen and (min-width: 1200px) {
    h1 {
      font-size: 3.6em;
    }

    p {
      font-size: 1em;
      width: 70%;
    }

    > a {
      width: 35%;
      font-size: 1em;
    }
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
