"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("/images/contour-bg-2.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 8em 0;

  > h2 {
    color: var(--white);
    font-size: 2.2em;
    text-align: center;
    text-transform: capitalize;
    font-weight: 900;
    font-family: var(--font-bodoni);
    line-height: 1.2;
    /* margin-left: 10%; */
  }

  > p {
    width: 90%;
    color: var(--white);
    font-family: var(--font-alegreya);
    margin-top: 1em;
    font-size: 1.1em;
    font-weight: 300;
    margin-left: 6%;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 1200px) {
    > h2 {
      font-size: 3.2em;
      text-align: left;
      margin-left: 10%;
    }

    > p {
      width: 40%;
      margin-left: 10%;
    }
  }
`;

export const StyledCarousel = styled.div`
  width: 90%;
  margin: 5em 0;
  margin-left: auto;
`;

export const StyledCarouselItem = styled.div`
  h3 {
    color: var(--white);
    text-align: center;
    margin-top: 1em;
    font-family: var(--font-oswald);
    font-size: 1.5em;
    text-transform: capitalize;
    font-weight: 500;
    letter-spacing: 0.219em;
  }

  @media screen and (min-width: 1200px) {
    h3 {
      font-size: 1.8em;
    }
  }
`;

export const StyledImg = styled.div`
  position: relative;
  height: 25em;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const StyledNavigation = styled.div`
  display: flex;
  gap: 1em;
  justify-content: flex-end;
  align-items: center;
  margin: 1em 0;
  /* margin-left: auto; */
  width: 90%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    font-size: 1.8em;
    border: 0.01em solid var(--white);
    border-radius: 50%;
    color: var(--white);
    cursor: pointer;
    height: 1.5em;
    width: 1.5em;
  }
`;
