'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/shared/Container/Container";
import Accordion from "../Accordion/Accordion";
import { StyledWrapper, StyledSection, StyledDiveDeeper } from "./styles";


gsap.registerPlugin(ScrollTrigger);


const Approach = () => {

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
            the huemaine
            <br />
            appraoch
          </h2>
          <p>
            Huemaine takes pride in its holistic approach to brand
            communication. The agency understands that today&apos;s consumers
            are not just looking for products or services; they are seeking
            meaningful experiences and connections with the brands they choose.
            To meet this demand, Huemaine crafts comprehensive strategies that
            not only promote products but also build lasting relationships.
          </p>
          <Accordion />
        </StyledSection>
        <StyledDiveDeeper>
          <h2 ref={addElementRef}>
            dive deeper: our
            <br />
            unrivaled advantages
          </h2>
          <p ref={addElementRef}>
            At the heart of Huemaine&apos;s success lies its creative
            brilliance. The agency&apos;s talented team of designers, writers,
            and artists are masters of their craft. They have an uncanny ability
            to transform abstract ideas into visually stunning and emotionally
            resonant creations. From eye-catching visuals to compelling
            narratives, Huemaine&apos;s creative output consistently captivates
            audiences and drives engagement.
          </p>
          <p ref={addElementRef}>
            Huemaine understands the importance of strategic public relations in
            today&apos;s media landscape. The agency leverages its extensive
            network of global media contacts and influencers to ensure that its
            clients&apos; stories reach the right audiences at the right time.
            Whether it&apos;s managing crisis communication or orchestrating
            high-impact product launches, Huemaine&apos;s PR expertise is second
            to none.
          </p>
        </StyledDiveDeeper>
      </Container>
    </StyledWrapper>
  );
};

export default Approach;
