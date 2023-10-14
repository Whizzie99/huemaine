"use client";
import { Suspense, useEffect } from "react";
import ProjectsList from "@/components/projects/ProjectsList/ProjectsList";
import MiniHero from "@/components/shared/MiniHero/MiniHero";
import RecentRamblings from "@/components/shared/RecentRamblings/RecentRamblings";

export default function ProjectsPage() {
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
        title="projects"
        subtitle="Discover our creative tapestry, where every project weaves a unique story of excellence and innovation."
        bgImg="/images/contour-bg-2.webp"
      />
      <Suspense fallback={<p>loading...</p>}>
        <ProjectsList />
      </Suspense>
      <RecentRamblings />
    </>
  );
}
