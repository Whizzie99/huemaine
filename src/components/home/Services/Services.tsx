import Link from "next/link";
import { PiArrowRightLight } from "react-icons/pi";
import Container from "@/components/shared/Container/Container";
import { services } from "../../../../db/services";
import {
  StyledWrapper,
  StyledSection,
  StyledServices,
  StyledService,
  StyledExploreBtn,
} from "./styles";

const Services = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledSection>
          <h2>
            tailored services,
            <br />
            exceptional results
          </h2>
          <p>
            Crafting solutions as unique as your brand, our services guarantee
            extraordinary outcomes
          </p>
          <StyledServices>
            {services.slice(0, 4).map((service) => (
              <StyledService key={service.id}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </StyledService>
            ))}
          </StyledServices>
          <StyledExploreBtn>
            <Link href="#">
              <span>see all</span>
              <span>
                <PiArrowRightLight />
              </span>
            </Link>
          </StyledExploreBtn>
        </StyledSection>
      </Container>
    </StyledWrapper>
  );
};

export default Services;
