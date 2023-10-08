"use client";
import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  padding: 2em 0;
  border-top: 0.01em solid var(--black-1);

  

  &:last-child {
    border-bottom: 0.01em solid var(--black-1);
  }

  @media screen and (max-width: 756px) {
    & .service-card-left {
      order: 2;
    }

    & .service-card-right {
      order: 1;
    }
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    padding: 2em 1.2em;

    &:nth-child(even) {
      .service-card-left {
      order: 2;
    }

    .service-card-right {
      order: 1;
    }
  }
  }
`;

export const StyledCardLeft = styled.div`
  width: 100%;

  h3 {
    text-transform: capitalize;
    font-family: var(--font-bodoni);
    font-weight: 800;
    font-size: 1.8em;
  }

  p {
    font-family: var(--font-alegreya);
    font-weight: 300;
    font-size: 1em;
    line-height: 1.5;
  }

  ul {
    list-style: none;
    margin-top: 1em;

    li {
      font-family: var(--font-alegreya);
      font-weight: 500;
      margin: 0.6em 0;
      text-transform: capitalize;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 50%;

    h3{
      font-size: 2em;
    }

    p{
      font-size: 1.1em;
    }
  }
`;

export const StyledCardRight = styled.div`
  width: 100%;

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;

export const StyledImg = styled.div`
  position: relative;
  height: 20em;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 1em;
    left: -1em;
    height: 100%;
    width: 100%;
    background: var(--black-1);
  }
`;
