"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 5em 0;

  @media screen and (min-width: 1200px) {
    padding: 10em 0;
  }
`;

export const StyledSection = styled.div`
  margin-top: 1em;
`;

export const StyledTitle = styled.h2`
  font-family: var(--font-bodoni);
  font-weight: 900;
  font-size: 2em;
  color: var(--black-1);
  text-align: center;
  margin-top: 1em;
  text-transform: capitalize;

  @media screen and (min-width: 1200px) {
    font-size: 2.3em;
  }
`;

export const StyledContentImg = styled.div`
  position: relative;
  height: 20em;
  width: 90%;
  margin: 2em auto;
  z-index: 2;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 1.5em;
    left: -1.5em;
    height: 100%;
    width: 100%;
    background: var(--black-1);
  }

  @media screen and (min-width: 1200px) {
    height: 35em;
    width: 80%;
  }
`;

export const StyledDate = styled.div`
  margin: 1em 0;
  margin-top: 2em;
  text-align: center;
  font-family: var(--font-bodoni);
  text-transform: capitalize;
  font-size: 1.3em;
  font-weight: 500;

  @media screen and (min-width: 1200px) {
    font-size: 1.5em;
  }
`;

export const StyledContent = styled.div`
  width: 90%;
  margin: 2em auto;
  font-family: var(--font-alegreya);
  line-height: 2;

  p {
    font-size: 1em;
    font-weight: 300;
  }

  @media screen and (min-width: 1200px) {
    width: 80%;
    p {
      font-size: 1.1em;
    }
  }

  /* img {
    position: static;
    width: 80%;
    height: 30em;
    object-fit: cover;
    object-position: center;
  } */
`;

export const StyledAuthor = styled.div`
  text-transform: capitalize;
  margin-top: 1.2em;

  span {
    font-style: italic;
  }

  p {
    margin: 0;
    font-weight: 500;
  }
`;
