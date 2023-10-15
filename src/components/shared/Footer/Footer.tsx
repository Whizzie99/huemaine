"use client";
import React, {useEffect} from "react";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container/Container";
import ContactModal from "../ContactModal/ContactModal";
import { PiArrowRightLight } from "react-icons/pi";
import {
  StyledWrapper,
  StyledSection,
  StyledTopSection,
  StyledSectionLeft,
  StyledSectionRight,
  StyledContent,
  StyledImg1,
  StyledImg2,
  StyledBtns,
  StyledBottomSection,
  StyledCopyright,
  StyledSocials,
} from "./styles";

import sample1 from "../../../../public/images/cross-roads.jpg";
import sample2 from "../../../../public/images/shapes.jpeg";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const showModal = searchParams.has("modal");
  // console.log(pathname);
  

  return (
    <StyledWrapper id="contact">
      <Container>
        <StyledSection>
          <StyledTopSection>
            <StyledSectionLeft>
              <StyledContent>
                <h2>
                  connect with us
                  <br />
                  today!
                </h2>
                <p>
                  Ready to embark on a journey with us? Connect with us today,
                  and let&apos;s start crafting your unique story together!
                  {/* `${pathname}?modal=true` */}
                </p>
                <StyledBtns>
                  <Link href="#">
                    <span>schedule a consult</span>
                    <span>
                      <PiArrowRightLight />
                    </span>
                  </Link>
                  <Link href={{
                    pathname: pathname,
                    query: {
                      modal: true
                    }
                  }}>
                    <span>send a message</span>
                    <span>
                      <PiArrowRightLight />
                    </span>
                  </Link>
                </StyledBtns>
              </StyledContent>
            </StyledSectionLeft>
            <StyledSectionRight>
              <StyledImg1>
                <Image
                  src={sample1}
                  alt="sample"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  priority
                  placeholder="blur"
                  blurDataURL={sample1.blurDataURL}
                />
              </StyledImg1>
              <StyledImg2>
                <Image
                  src={sample2}
                  alt="sample"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  priority
                  placeholder="blur"
                  blurDataURL={sample2.blurDataURL}
                />
              </StyledImg2>
            </StyledSectionRight>
          </StyledTopSection>
          <StyledBottomSection>
            <StyledCopyright>
              &copy; huemaine {currentYear}. all rights reserved
            </StyledCopyright>
            <StyledSocials>
              <li>
                <Link href="#">linkedIn</Link>
              </li>
              <li>
                <Link href="#">twitter</Link>
              </li>
              <li>
                <Link href="#">instagram</Link>
              </li>
            </StyledSocials>
          </StyledBottomSection>
        </StyledSection>
      </Container>
      {showModal && <ContactModal />}
    </StyledWrapper>
  );
};

export default Footer;
