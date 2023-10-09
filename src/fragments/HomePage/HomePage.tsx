import { Suspense } from "react";
import Hero from "@/components/home/Hero/Hero";
import AboutUs from "@/components/home/AboutUs/AboutUs";
import Services from "@/components/home/Services/Services";
import Wonders from "@/components/home/Wonders/Wonders";
import Brands from "@/components/home/Brands/Brands";
import RecentRamblings from "@/components/shared/RecentRamblings/RecentRamblings";

export default function HomePage () {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Wonders />
      <Brands />
      <Suspense fallback={<p>loading...</p>}>
        <RecentRamblings />
      </Suspense>
    </>
  );
}
