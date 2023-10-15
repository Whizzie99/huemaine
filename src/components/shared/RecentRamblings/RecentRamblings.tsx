"use client";
import { Suspense, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiArrowRightLight } from "react-icons/pi";
import Container from "../Container/Container";
import RecentRamblingsGrid from "../RecentRamblingsGrid/RecentRamblingsGrid";
import { StyledWrapper, StyledSection, StyledExploreBtn } from "./styles";

gsap.registerPlugin(ScrollTrigger);

export default function RecentRamlings() {
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
            recent
            <br />
            ramblings
          </h2>
          <p ref={addElementRef}>
            Dive into our recent ramblings, where insights and ideas collide to
            spark new horizons in thought and action.
          </p>
          <Suspense fallback={<p>loading...</p>}>
            <RecentRamblingsGrid />
          </Suspense>
          <StyledExploreBtn>
            <Link href="/blog" ref={addElementRef}>
              <span>view more</span>
              <span>
                <PiArrowRightLight />
              </span>
            </Link>
          </StyledExploreBtn>
        </StyledSection>
      </Container>
    </StyledWrapper>
  );
}
