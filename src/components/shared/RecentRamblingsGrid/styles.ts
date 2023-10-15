"use client";
import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5em;
  margin-top: 4em;

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
  }
`;
