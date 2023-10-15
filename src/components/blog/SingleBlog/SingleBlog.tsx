"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Moment from "react-moment";
import { urlFor } from "@/lib/sanityImageUrl";
import Container from "@/components/shared/Container/Container";
import {
  StyledWrapper,
  StyledContentImg,
  StyledDate,
  StyledContent,
  StyledAuthor,
  StyledSection,
  StyledTitle,
} from "./styles";
import BreadCrumb from "@/components/shared/BreadCrumb/BreadCrumb";

// import sample from "../../../../public/images/lifestyle.jpeg";
import { PortableText } from "@portabletext/react";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  title: string;
  img?: any;
  date: Date;
  content: any;
  author: string;
}

const SingleBlog: React.FC<Props> = ({ title, img, date, content, author }) => {
  const elementsRef = useRef<HTMLElement[]>([]);

  const addElementRef = (element: HTMLElement | null) => {
    if (element) {
      elementsRef.current.push(element);
    }
  };

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).url()}
          alt="Image"
          className="rounded-lg"
          width={800}
          height={800}
        />
      ),
    },
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

  useEffect(() => {
    (async () => {
      // @ts-expect-error
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <StyledWrapper>
      <Container>
        <StyledSection>
          <BreadCrumb />
          <StyledTitle ref={addElementRef}>{title}</StyledTitle>
          <StyledContentImg ref={addElementRef}>
            <Image
              src={urlFor(img).url()}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
            />
          </StyledContentImg>
          <StyledDate ref={addElementRef}>
            <Moment format="MMM Do YYYY">{date}</Moment>
          </StyledDate>
          <StyledContent ref={addElementRef}>
            <PortableText value={content} components={PortableTextComponent} />
            <StyledAuthor>
              <span ref={addElementRef}>posted by</span>
              <p ref={addElementRef}>{author}</p>
            </StyledAuthor>
          </StyledContent>
        </StyledSection>
      </Container>
    </StyledWrapper>
  );
};

export default SingleBlog;
