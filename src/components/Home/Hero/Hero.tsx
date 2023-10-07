import React from "react";
import Image from "next/image";
import {
  StyledHero,
  StyledHeroLeft,
  StyledHeroRight,
  StyledContent,
  StyledImg1,
  StyledImg2,
} from "./styles";

import img1 from "../../../../public/images/vogue.jpeg";
import img2 from "../../../../public/images/porsche.jpeg";

const Hero: React.FC = () => {
  return (
    <StyledHero>
      <StyledHeroLeft>
        <StyledContent>
          <h1>Illuminating Brands with Creative Brilliance and PR Expertise</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Convallis at dis leo tortor
            sapien varius morbi habitasse. Nisi feugiat convallis sed pretium
            nulla massa non ut.
          </p>
        </StyledContent>
      </StyledHeroLeft>
      <StyledHeroRight>
        <StyledImg1>
          <Image
            src={img1}
            alt="huemaine lifestyle"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            style={{ objectFit: "cover" }}
            placeholder="blur"
            priority
          />
        </StyledImg1>
        <StyledImg2>
          <Image
            src={img2}
            alt="huemaine lifestyle"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            style={{ objectFit: "cover" }}
            placeholder="blur"
            priority
          />
        </StyledImg2>
      </StyledHeroRight>
    </StyledHero>
  );
};

export default Hero;
