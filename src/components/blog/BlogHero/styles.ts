'use client';
import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("/images/blog-hero.jpeg");
  background-position: center;
  background-size: cover;
  width: 100%;

  > h2{
    font-family: var(--font-bodoni);
    text-transform: capitalize;
    color: var(--white);
    font-size: 3em;
    font-weight: 900;
    text-align: center;
  }

  > p{
    font-family: var(--font-alegreya);
    width: 50%;
    margin: 0.5em auto;
    text-align: center;
    font-weight: 300;
    font-size: 1.35em;
    color: var(--white);
  }
`;


