"use client";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiPlus, HiMinus } from "react-icons/hi2";
import { approaches } from "../../../../db/approaches";
import {
  StyledWrapper,
  StyledAccordion,
  StyledHeading,
  StyledContent,
} from "./styles";

gsap.registerPlugin(ScrollTrigger);


const Accordion = () => {
  const [clicked, setClicked] = useState<boolean | null | number>(false);

  const toggle = (index: number) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };


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
      {approaches.map((approach) => (
        <StyledAccordion key={approach.id} ref={addElementRef}>
          <StyledHeading onClick={() => toggle(approach.id)}>
            <h3>{approach.title}</h3>
            <span>{clicked === approach.id ? <HiMinus /> : <HiPlus />}</span>
          </StyledHeading>
          <AnimatePresence>
            {clicked === approach.id ? (
              <StyledContent
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <p>{approach.description}</p>
              </StyledContent>
            ) : null}
          </AnimatePresence>
        </StyledAccordion>
      ))}
    </StyledWrapper>
  );
};

export default Accordion;
