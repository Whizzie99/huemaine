import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanityImageUrl";
import { StyledCard, StyledImg, StyledTitle, StyledBtn } from "./styles";

// import sample from "../../../../public/images/projects/1.jpeg";

interface Props {
  img: any;
  subtitle: string;
  url: string;
  title: string;
}

const WonderCard: React.FC<Props> = ({ title, subtitle, img, url }) => {
  return (
    <StyledCard>
      <StyledImg>
        <Image
          src={urlFor(img).url()}
          alt="sample"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
        />
      </StyledImg>
      <StyledTitle>
        <h4>{subtitle}</h4>
        <h3>{title}</h3>
      </StyledTitle>
      <StyledBtn>
        <Link href={url} target="_blank">
          <span>view the</span>
          <span>
            <svg
              width="20"
              height="1"
              viewBox="0 0 20 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="58" y2="0.5" stroke="black" />
            </svg>
          </span>
          <span>project</span>
        </Link>
      </StyledBtn>
    </StyledCard>
  );
};

export default WonderCard;
