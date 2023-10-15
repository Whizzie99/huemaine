// "use client";
import { useEffect } from "react";
import MiniHero from "@/components/shared/MiniHero/MiniHero";
import BlogList from "@/components/blog/BlogList/BlogList";

export default function BlogPage() {
  // useEffect(() => {
  //   (async () => {
  //     // @ts-expect-error
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  return (
    <>
      <MiniHero
        title="blog"
        subtitle="Dive into our digital journal of ideas, insights, and inspiration, where curiosity finds its fuel."
      />
      <BlogList />
    </>
  );
}
