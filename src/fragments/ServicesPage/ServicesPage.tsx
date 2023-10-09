import ServicesHero from "@/components/services/ServicesHero/ServicesHero";
import MiniHero from "@/components/shared/MiniHero/MiniHero";
import ServiceList from "@/components/services/ServiceList/ServiceList";

export default function ServicesPage() {
  return (
    <>
      <MiniHero
        title="discover our solutions suite"
        subtitle="Explore a realm of tailored solutions where innovation meets expertise, ensuring your challenges meet their match."
      />
      <ServiceList />
    </>
  );
}
