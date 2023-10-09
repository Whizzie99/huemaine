"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi2";
import { approaches } from "../../../../db/approaches";
import {
  StyledWrapper,
  StyledAccordion,
  StyledHeading,
  StyledContent,
} from "./styles";

const Accordion = () => {
  const [clicked, setClicked] = useState<boolean | null | number>(false);

  const toggle = (index: number) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <StyledWrapper>
      {approaches.map((approach) => (
        <StyledAccordion key={approach.id}>
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
