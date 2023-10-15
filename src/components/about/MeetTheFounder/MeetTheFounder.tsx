'use client';
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/shared/Container/Container";
import {
  StyledWrapper,
  StyledSection,
  StyledLeftSection,
  StyledRightSection,
  StyledImg,
  StyledDiv,
  StyledContent,
} from "./styles";

import founderImg from "../../../../public/images/chisom-njoku.jpg";

gsap.registerPlugin(ScrollTrigger);


const MeetTheFounder = () => {

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
        <StyledSection>
          <StyledLeftSection>
            <StyledImg ref={addElementRef}>
              <Image
                src={founderImg}
                alt="photo of Chisom Njoku"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                priority
                placeholder="blur"
                blurDataURL={founderImg.blurDataURL}
              />
            </StyledImg>
          </StyledLeftSection>
          <StyledRightSection>
            <StyledContent>
              <h2 ref={addElementRef}>
                discover the genius
                <br />
                behind it all
              </h2>
              <p ref={addElementRef}>
                Chisom Njoku, the visionary media mogul and founder of Huemaine,
                is a name synonymous with creativity, innovation, and
                transformative influence in the world of marketing and public
                relations. With an unshakable commitment to pushing the
                boundaries of traditional media, Chisom has carved a remarkable
                path in the industry, leaving an indelible mark on brands and
                audiences alike. Under Chisom&apos;s visionary leadership,
                Huemaine has consistently pushed the envelope, embracing
                emerging technologies and trends to stay ahead of the curve.
                This is evident in the role he played in co-founding
                Africa&apos;s most successful music NFT, Heads by BNXN, and
                venturing into the metaverse at a time when many were still
                quite uncertain. His commitment to innovation has enabled the
                agency to create campaigns and strategies that resonate with the
                ever-evolving preferences of modern consumers.
              </p>
              <StyledDiv>
                <h3 ref={addElementRef}>empowering brands</h3>
                <p ref={addElementRef}>
                  Chisom Njoku&apos;s impact extends far beyond the walls of
                  Huemaine. He is known for his dedication to empowering brands
                  to reach their full potential. Through his agency, he has
                  worked with diverse clients across industries, helping them
                  craft compelling narratives, establish thought leadership, and
                  build meaningful connections with their audiences. Some of the
                  aforementioned brands include Porsche for whom he starred and
                  produced their first art film on the African continent titled
                  “Luxe Eko”, he also works closely with Sony Music, a
                  partnership that has been cultivated over many years and
                  resulted in media support for some of the biggest stars in the
                  world including Wizkid, Davido and many more. Chisom
                  Njoku&apos;s journey from a young visionary to a media mogul
                  and founder of Huemaine is a testament to the power of
                  innovation, creativity, and a relentless pursuit of
                  excellence. His influence on the media landscape is profound,
                  and his legacy is one that will continue to shape the industry
                  for years to come.
                </p>
              </StyledDiv>
            </StyledContent>
          </StyledRightSection>
        </StyledSection>
      </Container>
    </StyledWrapper>
  );
};

export default MeetTheFounder;
