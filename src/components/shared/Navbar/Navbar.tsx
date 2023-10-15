"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container/Container";
import { navItems } from "../../../../db/navItems";
import {
  StyledWrapper,
  StyledNav,
  StyledLogo,
  StyledHamburgerMenu,
  StyledMenuItems,
} from "./styles";

import logo from "../../../../public/images/logo-white.png";

const Navbar: React.FC = () => {
  const router = useRouter();
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [changeToBlack, setChangeToBlack] = useState<boolean>(false);
  const [invertColor, setInvertColor] = useState<boolean>(false);

  const handleShowMenu = () => {
    setIsOpen(!isOpen);
    setScrolled(!scrolled);
    setChangeToBlack(!changeToBlack);
  };

  const handleHideMenu = () => {
    setIsOpen(false);
    setScrolled(false);
    setChangeToBlack(false);
  };

  useEffect(() => {
    (async () => {
      // @ts-expect-error
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const changeHamburgerColor = () => {
      if (
        currentPath === "/about" ||
        currentPath.includes("/blog/") ||
        (currentPath === "/" && mediaQuery.matches)
      ) {
        setChangeToBlack(true);
      } else {
        setChangeToBlack(false);
      }
    };

    const invertLogo = () => {
      switch (currentPath) {
        case "/projects":
          setInvertColor(true);
          break;
        case "/blog":
          setInvertColor(true);
          break;
        case "/services":
          setInvertColor(true);
          break;
        default:
          setInvertColor(false);
      }
    };

    changeHamburgerColor();
    invertLogo();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPath]);

  return (
    <StyledWrapper>
      <Container width="85%">
        <StyledNav $scrolled={scrolled} $invertColor={invertColor}>
          <StyledLogo
            $scrolled={scrolled}
            $invertColor={invertColor}
            onClick={() => router.push("/")}
          >
            <Image
              src={logo}
              alt="huemaine logo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              // style={{ objectFit: "contain", left: "-40%" }}
              priority
            />
          </StyledLogo>
          <StyledHamburgerMenu
            $changeToBlack={changeToBlack}
            onClick={handleShowMenu}
            $isOpen={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </StyledHamburgerMenu>
        </StyledNav>
        {isOpen && (
          <StyledMenuItems>
            <ul>
              {navItems.map((navItem) => (
                <li key={navItem.id}>
                  <Link href={navItem.path} onClick={handleHideMenu}>
                    {navItem.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  data-scroll
                  href="#contact"
                  onClick={handleHideMenu}
                  data-scroll-to-href="#contact"
                >
                  contact
                </Link>
              </li>
            </ul>
          </StyledMenuItems>
        )}
      </Container>
    </StyledWrapper>
  );
};

export default Navbar;
