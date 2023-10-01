import Link from "next/link";
import { PiArrowRightLight } from "react-icons/pi";
import Container from "@/components/shared/Container/Container";
import {
  StyledWrapper,
  StyledSection,
  StyledServices,
  StyledService,
  StyledExploreBtn
} from "./styles";

const Services = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledSection>
          <h2>tailored services.<br/>exceptional results</h2>
          <p>
            orem ipsum dolor sit amet consectetur. Nisl erat non rhoncus eget
            velit et lectus ut. Est nunc facilisi sapien dictumst viverra. Amet
            fermentum donec tempor turpis. Urna mauris nam aliquam urna fames et
            ut et.{" "}
          </p>
          <StyledServices>
            <StyledService>
              <h3>creative services</h3>
              <p>
                lorem ipsum dolor sit amet consectetur. Nisl erat non rhoncus
                eget velit et lectus ut. Est nunc facilisi sapien dictumst
                viverra. Amet fermentum donec tempor turpis. Urna mauris nam
                aliquam urna fames et ut et dictumst viverra. Amet fermentum
                donec tempor turpis. Urna mauris nam aliquam urna fames et ut e
              </p>
            </StyledService>
            <StyledService>
              <h3>public relations</h3>
              <p>
                lorem ipsum dolor sit amet consectetur. Nisl erat non rhoncus
                eget velit et lectus ut. Est nunc facilisi sapien dictumst
                viverra. Amet fermentum donec tempor turpis. Urna mauris nam
                aliquam urna fames et ut et dictumst viverra. Amet fermentum
                donec tempor turpis. Urna mauris nam aliquam urna fames et ut e
              </p>
            </StyledService>
            <StyledService>
              <h3>digital marketing</h3>
              <p>
                lorem ipsum dolor sit amet consectetur. Nisl erat non rhoncus
                eget velit et lectus ut. Est nunc facilisi sapien dictumst
                viverra. Amet fermentum donec tempor turpis. Urna mauris nam
                aliquam urna fames et ut et dictumst viverra. Amet fermentum
                donec tempor turpis. Urna mauris nam aliquam urna fames et ut e
              </p>
            </StyledService>
            <StyledService>
              <h3>analytics & reporting</h3>
              <p>
                lorem ipsum dolor sit amet consectetur. Nisl erat non rhoncus
                eget velit et lectus ut. Est nunc facilisi sapien dictumst
                viverra. Amet fermentum donec tempor turpis. Urna mauris nam
                aliquam urna fames et ut et dictumst viverra. Amet fermentum
                donec tempor turpis. Urna mauris nam aliquam urna fames et ut e
              </p>
            </StyledService>
          </StyledServices>
          <StyledExploreBtn>
            <Link href="#">
              <span>explore</span>
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
