import Image from "next/image";
import {
  StyledWrapper,
  StyledTopgraphicImg,
  StyledContent,
  StyledImg1,
  StyledImg2,
} from "./styles";

import topographicImg from "../../../../public/images/topographic.png";
import img1 from "../../../../public/images/luxury-1.jpeg";
import img2 from "../../../../public/images/bike.jpeg";

const ServicesHero = () => {
  return (
    <StyledWrapper>
      <StyledTopgraphicImg>
        <Image
          src={topographicImg}
          alt="Topographic"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
        />
      </StyledTopgraphicImg>
      <StyledContent>
        <h1>
          <span>worldclass</span>
          <span>solutions</span>
          <span>suite</span>
        </h1>
        <StyledImg1>
          <Image
            src={img1}
            alt="huemaine lifestyle"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority
            placeholder="blur"
            blurDataURL={img1.blurDataURL}
          />
        </StyledImg1>
        <StyledImg2>
          <Image
            src={img2}
            alt="huemaine bike"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority
            placeholder="blur"
            blurDataURL={img2.blurDataURL}
          />
        </StyledImg2>
      </StyledContent>
    </StyledWrapper>
  );
};

export default ServicesHero;
