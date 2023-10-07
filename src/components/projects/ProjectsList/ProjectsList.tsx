import Container from "@/components/shared/Container/Container";
import WonderCard from "@/components/home/WonderCard/WonderCard";
import { StyledWrapper, StyledList } from "./styles";

const ProjectsList = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledList>
          <WonderCard/>
          <WonderCard/>
          <WonderCard/>
          <WonderCard/>
          <WonderCard/>
        </StyledList>
      </Container>
    </StyledWrapper>
  );
}
 
export default ProjectsList;