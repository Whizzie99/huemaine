"use client";
import { useEffect } from "react";
import MiniHero from "@/components/shared/MiniHero/MiniHero";
import ServiceList from "@/components/services/ServiceList/ServiceList";

export default function ServicesPage() {
  useEffect(() => {
    (async () => {
      // @ts-expect-error
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

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
