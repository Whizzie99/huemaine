'use client';
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  StyledWrapper,
  StyledTopgraphicImg,
  StyledContent,
  StyledImg1,
  StyledImg2,
} from "./styles";

import topographicImg from "../../../../public/images/topographic.png";
import img1 from "../../../../public/images/luxury-1.jpeg";
import img2 from "../../../../public/images/bike.jpeg";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {

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
      <StyledTopgraphicImg>
        <Image
          src={topographicImg}
          alt="Topographic"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
        />
      </StyledTopgraphicImg>
      <StyledContent>
        <h1>
          <span ref={addElementRef}>unmasking</span>
          <span ref={addElementRef}>our</span>
          <span ref={addElementRef}>essence</span>
        </h1>
        <StyledImg1 ref={addElementRef}>
          <Image
            src={img1}
            alt="huemaine lifestyle"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority
            placeholder="blur"
            blurDataURL={img1.blurDataURL}
          />
        </StyledImg1>
        <StyledImg2 ref={addElementRef}>
          <Image
            src={img2}
            alt="huemaine bike"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority
            placeholder="blur"
            blurDataURL={img2.blurDataURL}
          />
        </StyledImg2>
      </StyledContent>
    </StyledWrapper>
  );
};

export default AboutHero;
