"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 5em 0;
  padding-bottom: 2em;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("/images/contour-bg-3.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 1200px) {
    padding: 8em 0;
    padding-bottom: 2em;
  }
`;

export const StyledSection = styled.div``;

export const StyledTopSection = styled.div`
  display: flex;
`;

export const StyledSectionLeft = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;

export const StyledContent = styled.div`
  > h2 {
    color: var(--white);
    font-size: 2.2em;
    text-transform: capitalize;
    font-weight: 900;
    font-family: var(--font-bodoni);
    line-height: 1.2;
    text-align: center;
  }

  > p {
    width: 100%;
    color: var(--white);
    font-family: var(--font-alegreya);
    margin-top: 1em;
    font-size: 1em;
    font-weight: 300;
    text-align: center;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 1200px) {
    > h2 {
      font-size: 3.2em;
      text-align: left;
    }

    > p {
      width: 70%;
      font-size: 1.1em;
      text-align: left;
    }
  }
`;

export const StyledSectionRight = styled.div`
  display: none;
  position: relative;
  width: 100%;

  @media screen and (min-width: 1200px) {
    display: block;
    width: 50%;
  }
`;

export const StyledImg1 = styled.div`
  position: relative;
  height: 38em;
  width: 90%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const StyledImg2 = styled.div`
  position: absolute;
  top: -3em;
  right: 0;
  height: 18em;
  width: 15em;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const StyledBtns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  margin-top: 2em;

  a {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    width: 50%;
    background: transparent;
    color: var(--white);
    border: 0.01em solid var(--white);
    text-transform: capitalize;
    text-decoration: none;
    padding: 1em;
    transition: all 0.3s ease;

    span {
      &:first-child {
        font-family: var(--font-alegreya);
        font-weight: 300;
      }

      &:last-child {
        margin-top: 0.3em;
        font-size: 1.3em;
      }
    }

    &:hover {
      background: var(--white);
      color: var(--black-1);
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    width: 60%;
    background: transparent;
    color: var(--white);
    border: 0.01em solid var(--white);
    text-transform: capitalize;
    /* margin: 1em auto; */
    text-decoration: none;
    padding: 1em;
    /* margin-top: 2em; */
    transition: all 0.3s ease;

    span {
      &:first-child {
        font-family: var(--font-alegreya);
        font-weight: 300;
        font-size: 1.2em;
      }

      &:last-child {
        margin-top: 0.3em;
        font-size: 1.3em;
      }
    }

    &:hover {
      background: var(--white);
      color: var(--black-1);
    }
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: flex-start;

    a {
      width: 40%;
    }

    button {
      width: 40%;
    }
  }
`;

export const StyledBottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  align-items: center;
  margin-top: 4em;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2em;
  }
`;

export const StyledCopyright = styled.div`
  font-family: var(--font-alegreya);
  text-transform: capitalize;
  color: var(--white);
  font-weight: 300;
  order: 2;

  @media screen and (min-width: 1200px) {
    order: 1;
  }
`;

export const StyledSocials = styled.ul`
  list-style: none;
  display: flex;
  gap: 1em;
  order: 1;
  margin-bottom: 0.3em;

  a {
    font-family: var(--font-alegreya);
    text-decoration: none;
    color: var(--white);
    text-transform: capitalize;
    font-weight: 300;
  }

  @media screen and (min-width: 1200px) {
    order: 2;
    margin-bottom: 0;
  }
`;
