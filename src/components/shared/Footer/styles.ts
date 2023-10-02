"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 8em 0;
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
`;

export const StyledSection = styled.div``;

export const StyledTopSection = styled.div`
  display: flex;
`;

export const StyledSectionLeft = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const StyledContent = styled.div`
  > h2 {
    color: var(--white);
    font-size: 3.2em;
    text-transform: capitalize;
    font-weight: 900;
    font-family: var(--font-bodoni);
    line-height: 1.2;
  }

  > p {
    width: 70%;
    color: var(--white);
    font-family: var(--font-alegreya);
    margin-top: 1em;
    font-size: 1.1em;
    font-weight: 300;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const StyledSectionRight = styled.div`
  position: relative;
  width: 50%;
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
  gap: 1em;
  margin-top: 2em;

  a {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    width: 40%;
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
    width: 40%;
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
        font-size: 1.1em;
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
`;

export const StyledBottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2em;
`;

export const StyledCopyright = styled.div`
  font-family: var(--font-alegreya);
  text-transform: capitalize;
  color: var(--white);
  font-weight: 300;
`;

export const StyledSocials = styled.ul`
  list-style: none;
  display: flex;
  gap: 1em;

  a {
    font-family: var(--font-alegreya);
    text-decoration: none;
    color: var(--white);
    text-transform: capitalize;
    font-weight: 300;
  }
`;
