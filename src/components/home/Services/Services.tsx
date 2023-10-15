"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { PiArrowRightLight } from "react-icons/pi";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/shared/Container/Container";
import { services } from "../../../../db/services";
import {
  StyledWrapper,
  StyledSection,
  StyledServices,
  StyledService,
  StyledExploreBtn,
} from "./styles";

// gsap.registerPlugin(ScrollTrigger);

const Services = () => {
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
    <StyledWrapper>
      <Container>
        <StyledSection>
          <h2>
            tailored services,
            <br />
            exceptional results
          </h2>
          <p>
            Crafting solutions as unique as your brand, our services guarantee
            extraordinary outcomes
          </p>
          <StyledServices>
            {services.slice(0, 4).map((service) => (
              <StyledService key={service.id}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </StyledService>
            ))}
          </StyledServices>
          <StyledExploreBtn>
            <Link href="/services">
              <span>see all</span>
              <span>
                <PiArrowRightLight />
              </span>
            </Link>
          </StyledExploreBtn>
        </StyledSection>
      </Container>
    </StyledWrapper>
  );
};

export default Services;
