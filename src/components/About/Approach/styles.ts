"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 5em 0;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("/images/contour-bg-3.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  padding: 8em 0;
`;

export const StyledSection = styled.div`
  > h2 {
    color: var(--white);
    font-size: 2.2em;
    text-transform: capitalize;
    font-family: var(--font-bodoni);
    font-weight: 900;
    line-height: 1.2;
  }

  > p {
    width: 90%;
    color: var(--white);
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

    > p{
      width: 50%;
      font-size: 1.1em;
    }
  }
`;

export const StyledDiveDeeper = styled.div`
  margin: 0 auto;
  margin-top: 8em;
  width: 100%;

  h2 {
    text-align: center;
    color: var(--white);
    font-family: var(--font-bodoni);
    text-transform: capitalize;
    font-size: 2em;
    font-weight: 800;
    line-height: 1.2;
  }

  p {
    margin: 1em auto;
    font-family: var(--font-alegreya);
    color: var(--white);
    font-size: 1em;
    line-height: 2;
    font-weight: 300;
    text-align: left;
    width: 100%;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 5em;
    width: 80%;

    h2{
      font-size: 2.9em;
    }

    p{
      font-size: 1.1em;
      text-align: justify;
      width: 80%;
    }
  }
`;
