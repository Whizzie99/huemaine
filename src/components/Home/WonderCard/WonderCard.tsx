import Link from "next/link";
import Image from "next/image";
import { StyledCard, StyledImg, StyledTitle, StyledBtn } from "./styles";

import sample from "../../../../public/images/projects/1.jpeg";

const WonderCard = () => {
  return (
    <StyledCard>
      <StyledImg>
        <Image
          src={sample}
          alt="sample"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
        />
      </StyledImg>
      <StyledTitle>
        <h4>wizkid’s 4th studio album</h4>
        <h3>Wizkid: From Lagos with love</h3>
      </StyledTitle>
      <StyledBtn>
        <Link href="#">
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
