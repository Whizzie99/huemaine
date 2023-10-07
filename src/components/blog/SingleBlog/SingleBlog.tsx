import Image from "next/image";
import Container from "@/components/shared/Container/Container";
import {
  StyledWrapper,
  StyledContentImg,
  StyledDate,
  StyledContent,
  StyledAuthor,
  StyledSection,
  StyledTitle,
} from "./styles";
import BreadCrumb from "@/components/shared/BreadCrumb/BreadCrumb";

import sample from "../../../../public/images/lifestyle.jpeg";

const SingleBlog = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledSection>
          <BreadCrumb />
          <StyledTitle>Lorem ipsum dolor sit amet consectetur.</StyledTitle>
          <StyledContentImg>
            <Image
              src={sample}
              alt="Topographic"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
            />
          </StyledContentImg>
          <StyledDate>
            <p>oct 1st, 2023</p>
          </StyledDate>
          <StyledContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates a recusandae consequuntur molestiae dicta. Blanditiis
              quaerat, harum architecto repudiandae eaque odit inventore quidem
              necessitatibus distinctio dolorum nobis est porro temporibus.
              Nesciunt totam accusamus tempore harum voluptatibus quibusdam
              corporis iure ad. Ducimus aut iure nam repellat ipsa. Doloribus
              perspiciatis temporibus quos possimus, saepe distinctio.
              Perspiciatis eligendi excepturi illo, ad laudantium sapiente ipsa
              adipisci recusandae corrupti nisi aliquid. Animi rem aliquid quod
              impedit a adipisci sed nesciunt, dolore quasi iste suscipit
              aperiam modi ut cum porro architecto inventore esse, rerum ullam
              deserunt perspiciatis incidunt sequi veniam. Eius non dolorem
              placeat amet est.
            </p>
            <StyledAuthor>
              <span>posted by</span>
              <p>chisom njoku</p>
            </StyledAuthor>
          </StyledContent>
        </StyledSection>
      </Container>
    </StyledWrapper>
  );
};

export default SingleBlog;
