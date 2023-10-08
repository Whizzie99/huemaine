"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 5em 0;

  @media screen and (min-wdith: 1200px) {
    padding: 8em;
  }
`;

export const StyledSection = styled.div`
  > h2 {
    color: var(--black-1);
    font-size: 2.3em;
    text-transform: capitalize;
    font-weight: 900;
    font-family: var(--font-bodoni);
    line-height: 1.2;
  }

  > p {
    width: 80%;
    color: var(--black-1);
    font-family: var(--font-alegreya);
    margin-top: 1em;
    font-size: 1em;
    font-weight: 300;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 1200px) {
    > h2 {
      font-size: 3.2em;
    }

    > p {
      width: 40%;
      font-size: 1.1em;
    }
  }
`;

export const StyledProjectsGrid = styled.div`
  width: 90%;
  margin: 2em auto;
  margin-top: 5em;

  @media screen and (min-width: 1200px) {
    width: 80%;
  }
`;
