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

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  margin-top: 4em;
`;

export const StyledExploreBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    width: 15%;
    background: transparent;
    color: var(--black-1);
    border: 0.01em solid var(--black-1);
    text-transform: capitalize;
    margin: 1em auto;
    text-decoration: none;
    padding: 1em;
    margin-top: 2em;
    transition: all 0.3s ease;

    span {
      &:first-child {
        font-family: var(--font-alegreya);
        font-weight: 300;
      }

      &:last-child {
        margin-top: 0.3em;
      }
    }

    &:hover {
      background: var(--black-1);
      color: var(--white);
    }
  }
`;
