"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Moment from "react-moment";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { urlFor } from "@/lib/sanityImageUrl";
import { StyledCard, StyledImg, StyledTitle, StyledDate } from "./styles";

// import sample from "../../../../public/images/stun-pose-1.jpeg";
// gsap.registerPlugin(ScrollTrigger);

interface Props {
  title: string;
  img: any;
  date: Date;
  slug: string;
  id: string;
}

const BlogCard: React.FC<Props> = ({ title, img, date, slug, id }) => {
  const router = useRouter();
  // const elementsRef = useRef<HTMLElement[]>([]);

  const handleRouting = (id: string, slug: string): void => {
    return router.push(`/blog/${slug}/${id}`);
  };

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
    <StyledCard onClick={() => handleRouting(id, slug)}>
      <StyledImg>
        <Image
          src={urlFor(img).url()}
          alt="sample"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
        />
      </StyledImg>
      <StyledDate>
        <Moment format="MMM Do YYYY">{date}</Moment>
      </StyledDate>
      <StyledTitle>{title}</StyledTitle>
    </StyledCard>
  );
};

export default BlogCard;
