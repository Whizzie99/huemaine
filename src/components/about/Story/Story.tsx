"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const elementsRef = useRef<HTMLElement[]>([]);

  const addElementRef = (element: HTMLElement | null) => {
    if (element) {
      elementsRef.current.push(element);
    }
  };

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

  useEffect(() => {
    const elements = elementsRef.current;

    elements.forEach((element) => {
      gsap.set(element, { opacity: 0, y: 50 });

      const tl = gsap.timeline({ paused: true });
      tl.to(element, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        onEnter: () => {
          tl.restart();
        },
        onEnterBack: () => {
          tl.restart();
        },
        onLeave: () => {
          tl.progress(0).pause();
        },
        onLeaveBack: () => {
          tl.progress(0).pause();
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <StyledWrapper>
      <Container>
        <StyledSection>
          <StyledLeftSection>
            <StyledContent>
              <h2 ref={addElementRef}>the huemaine story</h2>
              <p ref={addElementRef}>
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
            <StyledImg className="distort-img" ref={addElementRef}></StyledImg>
          </StyledRightSection>
        </StyledSection>
      </Container>
    </StyledWrapper>
  );
};

export default Story;
