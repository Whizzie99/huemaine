import ServicesHero from "@/components/services/ServicesHero/ServicesHero";
import MiniHero from "@/components/shared/MiniHero/MiniHero";
import ServiceList from "@/components/services/ServiceList/ServiceList";

export default function ServicesPage () {
  return (
    <>
      <MiniHero
        title="discover our solutions suite"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corporis, voluptates sint animi magnam veniam"
      />
      <ServiceList />
    </>
  );
}