import Container from "@/components/shared/Container/Container";
import BlogCard from "@/components/shared/BlogCard/BlogCard";
import { StyledList, StyledWrapper } from "./styles";

const BlogList = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledList>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </StyledList>
      </Container>
    </StyledWrapper>
  );
};

export default BlogList;
