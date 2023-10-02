"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 8em 0;
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
`;

export const StyledSection = styled.div`
  > h2 {
    color: var(--white);
    font-size: 3.2em;
    text-transform: capitalize;
    font-family: var(--font-bodoni);
    font-weight: 900;
    line-height: 1.2;
  }

  > p {
    width: 50%;
    color: var(--white);
    font-family: var(--font-alegreya);
    margin-top: 1em;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.5;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;
