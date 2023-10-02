import Hero from "@/components/Home/Hero/Hero";
import AboutUs from "@/components/Home/AboutUs/AboutUs";
import Services from "@/components/Home/Services/Services";
import Wonders from "@/components/Home/Wonders/Wonders";
import Brands from "@/components/Home/Brands/Brands";
import RecentRamblings from "@/components/shared/RecentRamblings/RecentRamblings";

const Homepage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Wonders />
      <Brands />
      <RecentRamblings />
    </>
  );
};

export default Homepage;
