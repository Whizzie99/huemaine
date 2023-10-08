"use client";
import styled from "styled-components";

interface StyledHeroProps {
  readonly $bgImg?: string;
}

export const StyledHero = styled.div<StyledHeroProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-image: ${(props) =>
    props.$bgImg
      ? `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${props.$bgImg})`
      : `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("/images/contour-bg-1.webp")`};
  background-position: center;
  background-size: cover;
  width: 100%;

  > h2 {
    font-family: var(--font-bodoni);
    text-transform: capitalize;
    color: var(--white);
    font-size: 2.3em;
    font-weight: 900;
    text-align: center;
  }

  > p {
    font-family: var(--font-alegreya);
    width: 80%;
    margin: 0.5em auto;
    text-align: center;
    font-weight: 300;
    font-size: 1.1em;
    color: var(--white);
  }

  @media screen and (min-width: 1200px) {
    > h2{
      font-size: 3em;
    }

    > p{
      font-size: 1.35em;
      width: 50%;
    }
  }
`;
