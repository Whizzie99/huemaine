import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/shared/Container/Container";
import ServiceCard from "../ServiceCard/ServiceCard";
import { services } from "../../../../db/services";
import { StyledShortTxt, StyledWrapper, StyledServicesGrid } from "./styles";

gsap.registerPlugin(ScrollTrigger);

const ServiceList = () => {
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
        <StyledShortTxt ref={addElementRef}>
          Huemaine, the leading creative and PR agency, offers a diverse array
          of services meticulously designed to elevate brands, drive engagement,
          and foster meaningful connections with audiences. With a passion for
          creativity and a mastery of public relations, Huemaine takes pride in
          delivering innovative, tailored solutions to clients across
          industries. Here&apos;s an in-depth look at the comprehensive services
          offered by Huemaine:
        </StyledShortTxt>
        <StyledServicesGrid>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              serviceItems={service.serviceItems}
              img={service.img}
            />
          ))}
        </StyledServicesGrid>
      </Container>
    </StyledWrapper>
  );
};

export default ServiceList;
