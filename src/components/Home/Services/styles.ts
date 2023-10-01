"use client";

import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 8em 0;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/contour-bg-1.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const StyledSection = styled.div`
  > h2{
    color: var(--white);
    font-size: 3.2em;
    text-transform: capitalize;
    font-weight: 900;
  }

  > p{
    width: 40%;
    color: var(--white);
    font-family: var(--font-alegreya);
    margin-top: 1em;
    font-size: 1.1em;
    font-weight: 300;

    &::first-letter{
      text-transform: uppercase;
    }
  }
`;

export const StyledServices = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  margin-top: 3em;
`;

export const StyledService = styled.div`
  display: flex;
  border-top: 0.01em solid var(--white);
  padding: 1em 0;

  > h3{
    flex: 0.3;
    font-family: var(--font-bodoni);
    text-transform: capitalize;
    font-weight: 600;
    color: var(--white);
    font-size: 1.7em;
  }

  >p{
    flex: 0.7;
    font-size: 1.01em;
    color: var(--white);
    font-family: var(--font-alegreya);
    font-weight: 200;
    line-height: 1.5;
  }
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
    color: var(--white);
    border: 0.01em solid var(--white);
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
      background: var(--white);
      color: var(--black-1);
    }
  } 
`;
