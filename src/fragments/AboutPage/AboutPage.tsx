"use client";
import { useEffect } from "react";
import AboutHero from "@/components/about/AboutHero/AboutHero";
import Story from "@/components/about/Story/Story";
import Approach from "@/components/about/Approach/Approach";
import MeetTheFounder from "@/components/about/MeetTheFounder/MeetTheFounder";
import RecentRamblings from "@/components/shared/RecentRamblings/RecentRamblings";

export default function AboutPage() {
  useEffect(() => {
    (async () => {
      // @ts-expect-error
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <AboutHero />
      <Story />
      <Approach />
      <MeetTheFounder />
      <RecentRamblings />
    </>
  );
}
