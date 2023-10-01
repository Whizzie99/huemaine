"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 8em 0;
  padding-bottom: 3em;
`;

export const StyledContent = styled.div`
  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 3.5em;
    text-transform: capitalize;
    font-family: var(--font-bodoni);
    font-weight: 800;
    line-height: 1.2;
    margin: 1em auto;
    width: 80%;
    letter-spacing: 0.065em;

    span:nth-child(2) {
      margin-left: 3.3em;
    }
  }

  p {
    width: 80%;
    margin: 1em auto;
    text-align: justify;
    font-family: var(--font-alegreya);
    line-height: 1.8;
    font-weight: 300;
    font-size: 1.1em;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    width: 15%;
    background: transparent;
    color: var(--black-1);
    border: 0.01em solid var(--black-1);
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
      background: var(--black-1);
      color: var(--white);
    }
  }
`;

export const StyledTrustedBrands = styled.div`
  margin-top: 2em;
  padding: 2em 0;

  h3{
    text-align: center;
    text-transform: capitalize;
    font-family: var(--font-bodoni);
    font-size: 2em;
  }
`;

export const StyledMarquee = styled.div`
  margin-top: 1em;
  width: 100% !important;
  position: relative;
  overflow-x: hidden;
  
`;

export const StyledMarqueeItem = styled.div`
  display: flex;
  gap: 3em;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const StyledMarqueeItem2 = styled(StyledMarqueeItem)`
  position: absolute;
  width: 100%;
  top: 0;
  left: 100%;
  /* padding-left: 3em; */
`;

export const StyledMarqueeImage = styled.div`
  position: relative;
  width: 12%;
  height: 10em;

  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain !important;
    aspect-ratio: 2/3;
  }

  &:last-child{
    margin-right: 48px;
  }
`;
