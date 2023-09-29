import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container/Container";
import { StyledWrapper, StyledNav, StyledLogo, StyledNavItems } from "./styles";

import logo from "../../../../public/images/logo-white.png";

const Navbar: React.FC = () => {
  return (
    <StyledWrapper>
      <Container width="85%">
        <StyledNav>
          <StyledLogo>
            <Image
              src={logo}
              alt="huemaine logo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              style={{ objectFit: "contain", left: "-40%" }}
              priority
            />
          </StyledLogo>
          <StyledNavItems>
            <li>
              <Link href="#">home</Link>
            </li>
            <li>
              <Link href="#">about</Link>
            </li>
            <li>
              <Link href="#">projects</Link>
            </li>
            <li>
              <Link href="#">blog</Link>
            </li>
            <li>
              <Link href="#">contact</Link>
            </li>
          </StyledNavItems>
        </StyledNav>
      </Container>
    </StyledWrapper>
  );
};

export default Navbar;
