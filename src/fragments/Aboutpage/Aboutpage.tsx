import AboutHero from "@/components/about/AboutHero/AboutHero";
import Story from "@/components/about/Story/Story";
import Approach from "@/components/about/Approach/Approach";
import MeetTheFounder from "@/components/about/MeetTheFounder/MeetTheFounder";
import RecentRamblings from "@/components/shared/RecentRamblings/RecentRamblings";

const Aboutpage = () => {
  return (
    <>
      <AboutHero />
      <Story />
      <Approach />
      <MeetTheFounder />
      <RecentRamblings />
    </>
  );
};

export default Aboutpage;
