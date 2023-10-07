"use client";

import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 5em 0;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("/images/contour-bg-1.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 1200px) {
    padding: 8em 0;
  }
`;

export const StyledSection = styled.div`
  > h2 {
    color: var(--white);
    font-size: 2em;
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

    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 1200px) {
    > h2{
      font-size: 3.2em;
    }

    >p{
      width: 40%;
      font-size: 1.1em;
    }
  }
`;

export const StyledServices = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  width: 90%;
  margin: 0 auto;
  margin-top: 3em;


  @media screen and (min-width: 1200px) {
    width: auto;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledService = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.01em solid var(--white);
  padding: 1em 0;
  

  > h3 {
    flex: 0.3;
    font-family: var(--font-bodoni);
    text-transform: capitalize;
    font-weight: 600;
    color: var(--white);
    font-size: 1.5em;
  }

  > p {
    flex: 0.7;
    font-size: 0.95em;
    color: var(--white);
    font-family: var(--font-alegreya);
    font-weight: 200;
    line-height: 1.5;
  }

  @media screen and (min-width: 1200px){
    flex-direction: row;

    > h3{
      flex: 0.3;
      font-size: 1.7em;
    }

    > p{
      flex: 0.7;
      font-size: 1.01em;
    }
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
    width: 60%;
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

  @media screen and (min-width: 1200px) {
    a{
      width: 15%;
    }
  }
`;
