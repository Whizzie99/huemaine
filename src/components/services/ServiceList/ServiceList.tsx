import Container from "@/components/shared/Container/Container";
import ServiceCard from "../ServiceCard/ServiceCard";
import { services } from "../../../../db/services";
import { StyledShortTxt, StyledWrapper, StyledServicesGrid } from "./styles";

const ServiceList = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledShortTxt>
          orem ipsum dolor sit amet consectetur. Pellentesque donec sagittis pharetra luctus id faucibus viverra. Aliquam orci ac odio egestas arcu tristique sed facilisis vulputate. Leo mattis dignissim viverra purus enim ultricies duis blandit.
        </StyledShortTxt>
        <StyledServicesGrid>
          {
            services.map(service => (
              <ServiceCard key={service.id} title={service.title} description={service.description} serviceItems={service.serviceItems}  />
            ))
          }
        </StyledServicesGrid>
      </Container>
    </StyledWrapper>
  );
}

export default ServiceList;