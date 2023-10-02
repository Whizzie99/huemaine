"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledWrapper = styled.div`
  width: 70%;
  margin: 4em auto;
`;

export const StyledAccordion = styled.div`
  padding: 1.5em 0;
  border-top: 0.01em solid var(--white);

  &:last-child {
    border-bottom: 0.01em solid var(--white);
  }
`;

export const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  cursor: pointer;

  h3 {
    text-transform: capitalize;
    font-family: var(--font-bodoni);
    font-weight: 700;
    color: var(--white);
    font-size: 2.5em;
  }

  span {
    font-size: 1.8em;
    color: var(--white);
  }
`;

export const StyledContent = styled(motion.div)`
  p {
    font-family: var(--font-alegreya);
    color: var(--white);
    line-height: 2;
    font-weight: 300;
  }
`;
