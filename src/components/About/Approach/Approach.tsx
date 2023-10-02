import Container from "@/components/shared/Container/Container";
import Accordion from "../Accordion/Accordion";
import { StyledWrapper, StyledSection } from "./styles";

const Approach = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledSection>
          <h2>
            the huemaine
            <br />
            appraoch
          </h2>
          <p>
            Huemaine takes pride in its holistic approach to brand
            communication. The agency understands that today&apos;s consumers
            are not just looking for products or services; they are seeking
            meaningful experiences and connections with the brands they choose.
            To meet this demand, Huemaine crafts comprehensive strategies that
            not only promote products but also build lasting relationships.
          </p>
          <Accordion />
        </StyledSection>
      </Container>
    </StyledWrapper>
  );
};

export default Approach;
