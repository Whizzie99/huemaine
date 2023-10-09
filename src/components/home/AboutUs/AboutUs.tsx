"use client";
import Link from "next/link";
import Image from "next/image";
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

const AboutUs = () => {
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
            commodo.
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
