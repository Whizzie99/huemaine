import { Suspense } from "react";
import ProjectsList from "@/components/projects/ProjectsList/ProjectsList";
import MiniHero from "@/components/shared/MiniHero/MiniHero";
import RecentRamblings from "@/components/shared/RecentRamblings/RecentRamblings";

export default function ProjectsPage() {
  return (
    <>
      <MiniHero
        title="projects"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        corporis, voluptates sint animi magnam veniam"
        bgImg="/images/contour-bg-2.webp"
      />
      <Suspense fallback={<p>loading...</p>}>
        <ProjectsList />
      </Suspense>
      <RecentRamblings />
    </>
  );
}
