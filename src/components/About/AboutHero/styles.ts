"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  @media screen and (min-width: 1200px) {
    height: 100vh;
  }
`;

export const StyledTopgraphicImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const StyledContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 1em;

  h1 {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: var(--font-bodoni);
    filter: invert(100%);
    mix-blend-mode: difference;
    z-index: 1;
    line-height: 1;
    z-index: 2;

    span {
      font-size: 1.9em;
      font-weight: 900;
      color: var(--black-1);
      text-transform: capitalize;

      &:nth-child(1) {
        margin-left: 0;
      }

      &:nth-child(2) {
        margin-left: 0;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 0;
    h1{
      align-items: flex-start;
      span{
        font-size: 3.3em;

        &:nth-child(1) {
        margin-left: -2em;
      }

      &:nth-child(2) {
        margin-left: -1em;
      }
      }
    }
  }
`;

export const StyledImg1 = styled.div`
  position: absolute;
  top: -40%;
  left: 40%;
  width: 15em;
  height: 25em;
  z-index: 1;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 756px) {
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 1200px) {
    top: -30%;
    left: 20%;
    width: 25em;
    height: 35em;
  }
`;

export const StyledImg2 = styled.div`
  position: absolute;
  top: 0;
  right:10%;
  width: 15em;
  height: 20em;
  /* z-index: 3; */
  transform: rotate(49.825deg);

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (min-width: 1200px) {
    top: -5%;
    right: -50%;
    width: 20em;
    height: 30em;
  }
`;
