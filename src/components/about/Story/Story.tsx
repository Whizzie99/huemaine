"use client";
import { useEffect, useRef } from "react";
// import Image from "next/image";
import hoverEffect from "hover-effect";
import Container from "@/components/shared/Container/Container";
import {
  StyledWrapper,
  StyledSection,
  StyledLeftSection,
  StyledRightSection,
  StyledContent,
  StyledImg,
} from "./styles";

import img1 from "../../../../public/images/huemain-story.jpg";
import img2 from "../../../../public/images/tree-of-life-2.jpeg";
import distortImg from "../../../../public/images/myDistorsionImage.webp";

const Story = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div: any = divRef.current;
    const elemParent = document.querySelector(".distort-img");

    new hoverEffect({
      parent: elemParent,
      intensity: 0.2,
      image1: img1.src,
      image2: img2.src,
      displacementImage: distortImg.src,
    });
  }, []);

  return (
    <StyledWrapper>
      <Container>
        <StyledSection>
          <StyledLeftSection>
            <StyledContent>
              <h2>the huemaine story</h2>
              <p>
                Huemaine was established by media mogul and lifestyle
                connoisseur Chisom Njoku who recognized the need for a
                comprehensive approach to branding and communication. His vision
                was to create an agency that could bridge the gap between
                traditional public relations and cutting-edge creative
                solutions. The result is a firm that brings together the best of
                both worlds, offering a unique blend of strategic thinking and
                creative genius.
              </p>
            </StyledContent>
          </StyledLeftSection>
          <StyledRightSection>
            <StyledImg className="distort-img"></StyledImg>
          </StyledRightSection>
        </StyledSection>
      </Container>
    </StyledWrapper>
  );
};

export default Story;
