"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Container from "@/components/shared/Container/Container";
import { PiArrowRightLight } from "react-icons/pi";
import { brands } from "../../../../db/brand_clients";
import {
  StyledWrapper,
  StyledContent,
  StyledTrustedBrands,
  StyledMarquee,
  StyledMarqueeImage,
  StyledMarqueeItem,
  StyledMarqueeItem2,
} from "./styles";

const AboutUs = () => {
  const marqueeItem1Ref = useRef<HTMLDivElement>(null);
  const marqueeItem2Ref = useRef<HTMLDivElement>(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: 0,
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(marqueeItem1Ref.current, { xPercent: xPercent });
    gsap.set(marqueeItem2Ref.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <StyledWrapper>
      <Container>
        <StyledContent>
          <h1>
            <span>crafting connectivity,</span>
            <span>painting possibilities</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nisl erat non rhoncus eget
            velit et lectus ut. Est nunc facilisi sapien dictumst viverra. Amet
            fermentum donec tempor turpis. Urna mauris nam aliquam urna fames et
            ut et. Proin nec morbi viverra nunc tellus venenatis sit. Ut
            pulvinar tortor pellentesque semper tellus blandit in morbi tellus.
            Dictum magnis ultricies molestie sit a aenean maecenas est. Sapien
            purus vulputate vulputate gravida enim ultricies viverra. Semper
            viverra eget suscipit diam mauris feugiat ornare. Pharetra purus
            nisi mi nisl pellentesque sed sed eget. Risus sed tellus non
            commodo. Elementum auctor etiam tempus gravida sed faucibus nisi id.
            Metus nulla gravida adipiscing varius at purus enim. Felis sit
            pulvinar pretium eleifend. A dolor duis neque id vehicula amet
            facilisis. Dictum lorem netus neque varius vitae at sed convallis
            mattis. Eu porttitor diam diam dui. Placerat diam tempor orci metus.
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
        <StyledMarquee ref={slider}>
          <StyledMarqueeItem ref={marqueeItem1Ref}>
            {brands.map((brand) => {
              return (
                <StyledMarqueeImage key={brand.id}>
                  <Image
                    src={brand.img}
                    alt={brand.text}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    priority
                  />
                </StyledMarqueeImage>
              );
            })}
          </StyledMarqueeItem>
          <StyledMarqueeItem2 ref={marqueeItem2Ref}>
            {brands.map((brand) => {
              return (
                <StyledMarqueeImage key={brand.id}>
                  <Image
                    src={brand.img}
                    alt={brand.text}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    priority
                  />
                </StyledMarqueeImage>
              );
            })}
          </StyledMarqueeItem2>
        </StyledMarquee>
      </StyledTrustedBrands>
    </StyledWrapper>
  );
};

export default AboutUs;
