import Container from "@/components/shared/Container/Container";
import ServiceCard from "../ServiceCard/ServiceCard";
import { services } from "../../../../db/services";
import { StyledShortTxt, StyledWrapper, StyledServicesGrid } from "./styles";

const ServiceList = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledShortTxt>
          Huemaine, the leading creative and PR agency, offers a diverse array
          of services meticulously designed to elevate brands, drive engagement,
          and foster meaningful connections with audiences. With a passion for
          creativity and a mastery of public relations, Huemaine takes pride in
          delivering innovative, tailored solutions to clients across
          industries. Here&apos;s an in-depth look at the comprehensive services
          offered by Huemaine:
        </StyledShortTxt>
        <StyledServicesGrid>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              serviceItems={service.serviceItems}
              img={service.img}
            />
          ))}
        </StyledServicesGrid>
      </Container>
    </StyledWrapper>
  );
};

export default ServiceList;
