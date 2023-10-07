"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 10em 0;
`;

export const StyledSection = styled.div`
  margin-top: 1em;
`;

export const StyledTitle = styled.h2`
  font-family: var(--font-bodoni);
  font-weight: 900;
  font-size: 2.3em;
  color: var(--black-1);
  text-align: center;
  margin-top: 1em;
  text-transform: capitalize;
`;

export const StyledContentImg = styled.div`
  position: relative;
  height: 35em;
  width: 80%;
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
`;

export const StyledDate = styled.div`
  margin: 1em 0;
  margin-top: 2em;
  text-align: center;
  font-family: var(--font-bodoni);
  text-transform: capitalize;
  font-size: 1.5em;
  font-weight: 500;

  p {
  }
`;

export const StyledContent = styled.div`
  width: 80%;
  margin: 2em auto;
  font-family: var(--font-alegreya);
  line-height: 2;
  font-size: 1.1em;
  font-weight: 300;

  img {
    position: static;
    width: 80%;
    height: 30em;
    object-fit: cover;
    object-position: center;
  }
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
