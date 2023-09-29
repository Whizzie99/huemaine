"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1em;
  z-index: 99;
`;

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.div`
  position: relative;
  flex: 0.2;
  height: 5em;
`;

export const StyledNavItems = styled.ul`
  flex: 0.7;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  gap: 2em;

  li {
    a {
      text-decoration: none;
      text-transform: capitalize;
      font-size: 1.1em;
      font-family: var(--font-alegreya);
      color: var(--white);
      font-weight: 400;
    }

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      filter: invert(100%);
      mix-blend-mode: difference;
    }
  }
`;
