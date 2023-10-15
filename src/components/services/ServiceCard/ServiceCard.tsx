'use client';
import React, {useEffect, useRef} from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  StyledCard,
  StyledCardLeft,
  StyledCardRight,
  StyledImg,
} from "./styles";

// import sample from "../../../../public/images/services/services-1.jpeg";

gsap.registerPlugin(ScrollTrigger);


interface Props {
  title: string;
  description: string;
  serviceItems: string[];
  img: string;
}

const ServiceCard: React.FC<Props> = ({
  title,
  description,
  serviceItems,
  img,
}) => {

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
      <StyledCardLeft className="service-card-left">
        <h3 ref={addElementRef}>{title}</h3>
        <p ref={addElementRef}>{description}</p>
        <ul>
          {serviceItems.map((item, index) => (
            <li key={index} ref={addElementRef}>- {item}</li>
          ))}
        </ul>
      </StyledCardLeft>
      <StyledCardRight className="service-card-right">
        <StyledImg ref={addElementRef}>
          <Image
            src={img}
            alt="sample"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority
          />
        </StyledImg>
      </StyledCardRight>
    </StyledCard>
  );
};

export default ServiceCard;
