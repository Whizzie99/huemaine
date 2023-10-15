"use client";
import { useEffect, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Container from "@/components/shared/Container/Container";
import { PiArrowRightLight } from "react-icons/pi";
import { brands } from "../../../../db/brand_clients";

import "swiper/css";
import "swiper/css/autoplay";

import {
  StyledWrapper,
  StyledContent,
  StyledTrustedBrands,
  StyledCustomMarquee,
  StyledMarqueeImage,
} from "./styles";

// gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
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
        <StyledContent>
          <h1>
            <span>crafting connectivity,</span>
            <span>painting possibilities</span>
          </h1>
          <p>
            In the fast-paced marketing and brand communication world, few
            agencies stand out like Huemaine. Founded with a vision to
            seamlessly blend creativity and public relations, Huemaine has
            emerged as a powerhouse in the industry, redefining how businesses
            connect with their audiences. With a commitment to excellence and
            innovation, Huemaine has consistently demonstrated its ability to
            illuminate brands and stories, leaving a lasting impact on clients
            and consumers alike.
          </p>
          <Link href="/about">
            <span>explore</span>
            <span>
              <PiArrowRightLight />
            </span>
          </Link>
        </StyledContent>
      </Container>
      <StyledTrustedBrands>
        <h3>brands that have trusted us</h3>

        <StyledCustomMarquee>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 80,
              },
            }}
          >
            {brands.map((brand) => {
              return (
                <SwiperSlide key={brand.id}>
                  <StyledMarqueeImage>
                    <Image
                      src={brand.img}
                      alt={brand.text}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                      priority
                    />
                  </StyledMarqueeImage>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </StyledCustomMarquee>
      </StyledTrustedBrands>
    </StyledWrapper>
  );
};

export default AboutUs;
