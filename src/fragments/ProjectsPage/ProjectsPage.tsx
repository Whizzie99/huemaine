import ProjectsList from "@/components/projects/ProjectsList/ProjectsList";
import MiniHero from "@/components/shared/MiniHero/MiniHero";
import RecentRamblings from "@/components/shared/RecentRamblings/RecentRamblings";

const ProjectsPage = () => {
  return (
    <>
      <MiniHero title="projects" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        corporis, voluptates sint animi magnam veniam" bgImg="/images/contour-bg-2.webp"/>
      <ProjectsList/>
      <RecentRamblings/>
    </>
  );
}

export default ProjectsPage;