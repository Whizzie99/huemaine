import Link from "next/link";
import { PiArrowRightLight } from "react-icons/pi";
import Container from "../Container/Container";
import BlogCard from "../BlogCard/BlogCard";
import {
  StyledWrapper,
  StyledSection,
  StyledGrid,
  StyledExploreBtn,
} from "./styles";

const RecentRamblings = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledSection>
          <h2>
            recent
            <br />
            ramblings
          </h2>
          <p>
            orem ipsum dolor sit amet consectetur. Nisl erat non rhoncus eget
            velit et lectus ut. Est nunc facilisi sapien dictumst viverra. Amet
            fermentum donec tempor turpis. Urna mauris nam aliquam urna{" "}
          </p>
          <StyledGrid>
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </StyledGrid>
          <StyledExploreBtn>
            <Link href="#">
              <span>view more</span>
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

export default RecentRamblings;
