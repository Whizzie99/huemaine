"use client";
import Lottie from "lottie-react";
import barLoading from "../../../../lottie/barloading.json";
import { StyledWrapper } from "./styles";

const PageLoader = () => {
  return (
    <StyledWrapper>
      <Lottie animationData={barLoading} loop={true} autoPlay={true} />
    </StyledWrapper>
  );
};

export default PageLoader;
