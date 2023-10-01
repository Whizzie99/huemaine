"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 8em 0;
`;

export const StyledSection = styled.div`
  > h2 {
    color: var(--black-1);
    font-size: 3.2em;
    text-transform: capitalize;
    font-weight: 900;
    font-family: var(--font-bodoni);
    line-height: 1.2;
  }

  > p {
    width: 40%;
    color: var(--black-1);
    font-family: var(--font-alegreya);
    margin-top: 1em;
    font-size: 1.1em;
    font-weight: 300;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const StyledProjectsGrid = styled.div`
  width: 80%;
  margin: 2em auto;
  margin-top: 5em;
`;
