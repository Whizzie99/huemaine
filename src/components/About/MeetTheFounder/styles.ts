"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 5em 0;

  @media screen and (min-width: 1200px) {
    padding: 8em ;
  }
`;

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 1em;
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
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;

export const StyledImg = styled.div`
  position: relative;
  height: 30em;
  width: 100%;
  z-index: 2;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 2;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -1.5%;
    left: -2%;
    height: 5em;
    width: 5em;
    background: var(--black-3);
  }

  &::after {
    content: "";
    position: absolute;
    top: -1.5%;
    right: -2%;
    height: 5em;
    width: 5em;
    background: var(--black-3);
    z-index: 1;
  }

  @media screen and (min-width: 1200px) {
    width: 80%;
    height: 40em;
  }
`;

export const StyledDiv = styled.div`
  margin-top: 1em;
  h3 {
    color: var(--black-1);
    font-size: 1.9em;
    text-transform: capitalize;
    font-family: var(--font-bodoni);
    font-weight: 900;
    line-height: 1.2;
  }

  p {
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
    h3{
      font-size: 1.4em;
    }
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
    /* width: 50%; */
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
    > h2{
      font-size: 3.2em;
    }

    > p {
      font-size: 1em;
    }
  }
`;
