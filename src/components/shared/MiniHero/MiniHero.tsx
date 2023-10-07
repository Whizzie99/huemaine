import React from "react";
import { StyledHero } from "./styles";


interface Props {
  title: string;
  subtitle: string;
  bgImg?: string;
}

const MiniHero: React.FC<Props> = ({title, subtitle, bgImg}) => {
  return (
    <StyledHero $bgImg={bgImg}>
      <h2>{title}</h2>
      <p>
        {subtitle}
      </p>
    </StyledHero>
  );
};

export default MiniHero;
