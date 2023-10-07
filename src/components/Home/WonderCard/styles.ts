"use client";
import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 2em 1em;
  border-top: 0.01em solid var(--black-1);
  background: var(--white);

  &:last-child {
    border-bottom: 0.01em solid var(--black-1);
  }
`;

export const StyledImg = styled.div`
  position: relative;
  height: 25em;
  width: 70%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    /* mix-blend-mode: difference; */
  }
`;

export const StyledTitle = styled.div`
  position: absolute;
  top: 6em;
  left: 0;
  /* z-index: 1; */
  background: transparent;

  h4 {
    font-family: var(--font-oswald);
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.094em;
    mix-blend-mode: difference;
    filter: invert(100%);
  }

  h3 {
    position: relative;
    text-transform: capitalize;
    margin-top: 1.3em;
    font-size: 3.5em;
    font-weight: 900;
    font-family: var(--font-bodoni);
    color: var(--black-1);
    width: 55%;
    mix-blend-mode: difference;
    z-index: 1;
    filter: invert(100%);
    line-height: 1.2;
  }
`;

export const StyledBtn = styled.div`
  position: absolute;
  bottom: 2em;
  right: 0;

  a {
    display: flex;
    align-items: center;
    gap: 0.3em;
    text-decoration: none;

    span {
      font-family: var(--font-oswald);
      text-transform: capitalize;
      color: var(--black-1);
      font-weight: 300;

      &:nth-child(2) {
        display: flex;
        align-items: center;
        margin-top: 0.3em;
      }
    }
  }
`;
