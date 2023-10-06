"use client";
import styled from "styled-components";

export const StyledBreadcrumbNav = styled.nav`
  a {
    text-decoration: none;
    font-family: var(--font-alegreya);
    text-transform: capitalize;
    color: var(--black-1);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledBreadcrumbOl = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledBreadcrumbItem = styled.li`
  display: inline;

  &:nth-child(2) {
    a {
      color: var(--gray-1);
    }

    & span {
      display: none;
    }
  }

  &:last-child {
    display: none;
  }
`;

export const StyledSeparator = styled.span`
  padding: 0 8px;
  color: #6c757d;

  /* &:last-child{
    display: none;
  } */
`;
