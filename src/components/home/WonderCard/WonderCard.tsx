"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { urlFor } from "@/lib/sanityImageUrl";
import { StyledCard, StyledImg, StyledTitle, StyledBtn } from "./styles";

gsap.registerPlugin(ScrollTrigger);

// import sample from "../../../../public/images/projects/1.jpeg";

interface Props {
  img: any;
  subtitle: string;
  url: string;
  title: string;
}

const WonderCard: React.FC<Props> = ({ title, subtitle, img, url }) => {
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
    <StyledCard>
      <StyledImg ref={addElementRef}>
        <Image
          src={urlFor(img).url()}
          alt="sample"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
        />
      </StyledImg>
      <StyledTitle>
        <h4 ref={addElementRef}>{subtitle}</h4>
        <h3 ref={addElementRef}>{title}</h3>
      </StyledTitle>
      <StyledBtn ref={addElementRef}>
        <Link href={url} target="_blank">
          <span>view the</span>
          <span>
            <svg
              width="20"
              height="1"
              viewBox="0 0 20 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="58" y2="0.5" stroke="black" />
            </svg>
          </span>
          <span>project</span>
        </Link>
      </StyledBtn>
    </StyledCard>
  );
};

export default WonderCard;
