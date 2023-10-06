import Image from "next/image";
import { StyledCard, StyledImg, StyledTitle, StyledDate } from "./styles";

import sample from "../../../../public/images/stun-pose-1.jpeg";

const BlogCard = () => {
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
      <StyledDate>
        oct 1st, 2023
      </StyledDate>
      <StyledTitle>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </StyledTitle>
      
    </StyledCard>
  );
};

export default BlogCard;
