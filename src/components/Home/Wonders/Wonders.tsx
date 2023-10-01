import Container from "@/components/shared/Container/Container";
import WonderCard from "../WonderCard/WonderCard";
import { StyledWrapper, StyledSection, StyledProjectsGrid } from "./styles";

const Wonders = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledSection>
          <h2>
            a world of
            <br />
            huemaine wonders
          </h2>
          <p>
            orem ipsum dolor sit amet consectetur. Nisl erat non rhoncus eget
            velit et lectus ut. Est nunc facilisi sapien dictumst viverra. Amet
            fermentum donec tempor turpis. Urna mauris nam aliquam urna{" "}
          </p>
          <StyledProjectsGrid>
            <WonderCard />
            <WonderCard />
            <WonderCard />
            <WonderCard />
          </StyledProjectsGrid>
        </StyledSection>
      </Container>
    </StyledWrapper>
  );
};

export default Wonders;
