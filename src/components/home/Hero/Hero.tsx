"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiArrowRightLight } from "react-icons/pi";
import {
  StyledHero,
  StyledHeroLeft,
  StyledHeroRight,
  StyledContent,
  StyledImg1,
  StyledImg2,
} from "./styles";

// gsap.registerPlugin(ScrollTrigger);

import img1 from "../../../../public/images/vogue.jpeg";
import img2 from "../../../../public/images/porsche.jpeg";

const Hero: React.FC = () => {
  // const elementsRef = useRef<HTMLElement[]>([]);

  // const addElementRef = (element: HTMLElement | null) => {
  //   if (element) {
  //     elementsRef.current.push(element);
  //   }
  // };

  // useEffect(() => {
  //   const elements = elementsRef.current;

  //   elements.forEach((element) => {
  //     gsap.set(element, { opacity: 0, y: 50 });

  //     const tl = gsap.timeline({ paused: true });
  //     tl.to(element, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

  //     ScrollTrigger.create({
  //       trigger: element,
  //       start: "top 80%",
  //       end: "bottom 20%",
  //       scrub: true,
  //       onEnter: () => {
  //         tl.restart();
  //       },
  //       onEnterBack: () => {
  //         tl.restart();
  //       },
  //       onLeave: () => {
  //         tl.progress(0).pause();
  //       },
  //       onLeaveBack: () => {
  //         tl.progress(0).pause();
  //       },
  //     });
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <StyledHero>
      <StyledHeroLeft>
        <StyledContent>
          <h1>Illuminating Brands with Creative Brilliance and PR Expertise</h1>
          <p>
            Step into the world of creative brilliance and PR expertise where
            your brand&apo;s story comes to life. We illuminate your unique
            narrative, casting it in a dazzling spotlight that captures hearts
            and minds.
          </p>
          <Link href="#">
            <span>schedule a consult</span>
            <span>
              <PiArrowRightLight />
            </span>
          </Link>
        </StyledContent>
      </StyledHeroLeft>
      <StyledHeroRight>
        <StyledImg1>
          <Image
            src={img1}
            alt="huemaine lifestyle"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            style={{ objectFit: "cover" }}
            placeholder="blur"
            priority
          />
        </StyledImg1>
        <StyledImg2>
          <Image
            src={img2}
            alt="huemaine lifestyle"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            style={{ objectFit: "cover" }}
            placeholder="blur"
            priority
          />
        </StyledImg2>
      </StyledHeroRight>
    </StyledHero>
  );
};

export default Hero;
