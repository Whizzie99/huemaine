import { Metadata } from "next";
import ProjectsPage from "@/fragments/ProjectsPage/ProjectsPage";

export const metadata: Metadata = {
  title: "Huemaine | Projects",
  description: "A world of Huemaine wonders",
  openGraph: {
    images: [
      "https://res.cloudinary.com/df6nau7iu/image/upload/v1697359027/og-image_oujcci.jpg",
    ],
  },
};

export default function Projects() {
  return <ProjectsPage />;
}
