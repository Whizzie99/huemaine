"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 5em 0;

  @media screen and (min-width: 1200px) {
    padding: 8em 0;
  }
`;

export const StyledShortTxt = styled.p`
  margin: 2em auto;
  width: 90%;
  text-align: justify;
  font-family: var(--font-alegreya);
  font-size: 1em;
  line-height: 1.5;
  font-weight: 300;

  @media screen and (min-width: 1200px) {
    width: 50%;
    font-size: 1.1em;
  }
`;

export const StyledServicesGrid = styled.div`
  margin: 2em auto;
  width: 90%;
`;
