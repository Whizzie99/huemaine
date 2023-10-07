"use client";
import styled from "styled-components";

export const StyledCard = styled.div`
  cursor: pointer;
`;

export const StyledImg = styled.div`
  position: relative;
  height: 28em;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const StyledTitle = styled.h3`
  font-family: var(--font-alegreya);
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.3em;
  /* margin-top: 1em; */
`;

export const StyledDate = styled.div`
  font-family: var(--font-alegreya);
  text-transform: capitalize;
  font-weight: 300;
  font-size: 1.2em;
  margin-top: 1em;
  margin-bottom: 0.5em;
  font-weight: 300;
`;
