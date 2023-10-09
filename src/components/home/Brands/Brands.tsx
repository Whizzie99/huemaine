"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import { PiArrowRightLight, PiArrowLeftLight } from "react-icons/pi";
import { people } from "../../../../db/people_clients";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import {
  StyledWrapper,
  StyledCarousel,
  StyledCarouselItem,
  StyledImg,
  StyledNavigation,
} from "./styles";

import sample from "../../../../public/images/clients/people/1.png";

const Brands = () => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  const onSwiper = (swiper: SwiperCore) => {
    setSwiper(swiper);
  };

  const slidePrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  return (
    <StyledWrapper>
      <h2>
        people that have
        <br />
        trusted huemaine
      </h2>
      <p>
        Visionaries who&apos;ve embraced Huemaine&apos;s brilliance, where trust
        meets innovation in a seamless partnership.
      </p>
      <StyledCarousel>
        <StyledNavigation>
          <button ref={navigationPrevRef} className="custom-button-prev">
            <PiArrowLeftLight />
          </button>
          <button ref={navigationNextRef} className="custom-button-next">
            <PiArrowRightLight />
          </button>
        </StyledNavigation>
        <Swiper
          onSwiper={onSwiper}
          slidesPerView={1.1}
          spaceBetween={10}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          modules={[Navigation, Autoplay]}
          loop={true}
          // speed={3000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              // spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
          }}
        >
          {people.map((person) => (
            <SwiperSlide key={person.id}>
              <StyledCarouselItem>
                <StyledImg>
                  <Image
                    src={person.img}
                    alt="ssamle"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    placeholder="blur"
                    blurDataURL={person.blurUrl}
                  />
                </StyledImg>
                <h3>{person.name}</h3>
              </StyledCarouselItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledCarousel>
    </StyledWrapper>
  );
};

export default Brands;
