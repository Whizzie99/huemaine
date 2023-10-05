import React from "react";
import Image from "next/image";
import { StyledCard, StyledCardLeft, StyledCardRight, StyledImg } from "./styles";

import sample from '../../../../public/images/services/services-1.jpeg'

interface Props {
  title: string;
  description: string;
  serviceItems: string[];
}

const ServiceCard: React.FC<Props> =({title, description, serviceItems}) => {
  return (
    <StyledCard>
      <StyledCardLeft className="service-card-left">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {
            serviceItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
          
        </ul>
      </StyledCardLeft>
      <StyledCardRight className="service-card-right">
        <StyledImg>
          <Image
          src={sample}
          alt="sample"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
        />
        </StyledImg>
      </StyledCardRight>
    </StyledCard>
  );
}
 
export default ServiceCard;