"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 5em 0;

  @media screen and (min-width: 1200px) {
    padding: 8em 0;
  }
`;

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  row-gap: 2em;

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
