"use client";
import { Suspense, useEffect, useRef } from "react";
import Link from "next/link";
import { PiArrowRightLight } from "react-icons/pi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/shared/Container/Container";
import WondersGrid from "../WondersGrid/WondersGrid";
import { StyledWrapper, StyledSection, StyledExploreBtn } from "./styles";

gsap.registerPlugin(ScrollTrigger);

export default function Wonders() {
  const elementsRef = useRef<HTMLElement[]>([]);

  const addElementRef = (element: HTMLElement | null) => {
    if (element) {
      elementsRef.current.push(element);
    }
  };

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
          <h2 ref={addElementRef}>
            a world of
            <br />
            huemaine wonders
          </h2>
          <p ref={addElementRef}>
            Unlock the palette of possibilities and embark on a journey through
            the Huemaine universe where imagination knows no bounds.
          </p>
          <Suspense fallback={<p>loading...</p>}>
            <WondersGrid />
            <StyledExploreBtn>
              <Link href="/projects" ref={addElementRef}>
                <span>explore</span>
                <span>
                  <PiArrowRightLight />
                </span>
              </Link>
            </StyledExploreBtn>
          </Suspense>
        </StyledSection>
      </Container>
    </StyledWrapper>
  );
}
