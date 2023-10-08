"use client";
import styled from "styled-components";

interface ScrolledProps {
  readonly $scrolled: boolean;
  readonly $invertColor: boolean;
}

interface StyledHamburgerMenuProps {
  readonly $isOpen?: boolean;
  readonly $changeToBlack: boolean;
}

export const StyledWrapper = styled.div`
  /* display: none; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1em;
  z-index: 97;
`;

export const StyledNav = styled.div<ScrolledProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: ${(props) => props.$scrolled && "blur(15px)"};
  background: ${(props) => props.$scrolled && "rgba(0, 0, 0, 0.3)"};
  padding: 0.5em 1em;
  transition: all 0.3s ease;
  border-radius: 0.3em;
  z-index: 99;
`;

export const StyledLogo = styled.div<ScrolledProps>`
  position: relative;
  flex: 0.4;
  height: 5em;
  background: transparent;
  mix-blend-mode: ${(props) =>
    props.$invertColor || props.$scrolled ? "difference" : "none"};
  filter: ${(props) =>
    props.$invertColor || props.$scrolled ? "invert(100%)" : "none"};
  transition: all 0.3s ease;
  cursor: pointer;

  > img {
    object-fit: contain;
    /* left: -20% !important; */
  }

  @media screen and (min-width: 1200px) {
    flex: 0.2;

    > img {
      left: -20% !important;
    }
  }
`;

export const StyledNavItems = styled.ul<ScrolledProps>`
  flex: 0.7;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  gap: 2em;
  background: transparent;

  li {
    a {
      text-decoration: none;
      text-transform: capitalize;
      font-size: 1.2em;
      font-family: var(--font-alegreya);
      color: var(--white);
      font-weight: ${(props) => (props.$scrolled ? "400" : "800")};
      letter-spacing: 1px;
      transition: all 0.3s ease;
    }
  }
`;

export const StyledHamburgerMenu = styled.div<StyledHamburgerMenuProps>`
  /* flex: 0.1; */
  display: block;
  width: 30px;
  height: 25px;
  position: relative;
  cursor: pointer;
  /* margin-top: -1.3em; */

  & span {
    display: block;
    width: 100%;
    height: 0.15em;
    background-color: ${(props) =>
      props.$changeToBlack ? "var(--black-1)" : "var(--white)"};
    position: absolute;
    /* border-radius: 0.5em; */
    transition: transform 0.3s ease;
  }

  & span:nth-child(1) {
    top: 0;
    transform: ${(props) =>
      props.$isOpen ? "translateY(11px) rotate(45deg)" : "none"};
  }

  & span:nth-child(2) {
    top: 11px;
    transform: ${(props) => (props.$isOpen ? "scale(0)" : "none")};
  }

  & span:nth-child(3) {
    top: 22px;
    transform: ${(props) =>
      props.$isOpen ? "translateY(-11px) rotate(-45deg)" : "none"};
  }

  /* @media screen and (max-width: 756px){
    & span{
      background-color: ${(props) =>
    props.$isOpen ? "var(--white)" : "var(--black-1)"};
    }
  } */

  @media screen and (min-width: 992px) {
    margin-top: 0;
  }
`;

export const StyledMenuItems = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: var(--black-2);
  z-index: 98;

  ul {
    list-style: none;

    li {
      margin: 1em 0;
      a {
        font-family: var(--font-bodoni);
        color: var(--white);
        text-transform: capitalize;
        font-size: 1.8em;
        text-decoration: none;
        font-weight: 900;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    ul {
      li {
        a {
          font-size: 2.5em;
        }
      }
    }
  }
`;
