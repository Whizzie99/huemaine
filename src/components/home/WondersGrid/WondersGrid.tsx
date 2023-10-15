import { client } from "@/lib/sanity";
import { Project } from "@/lib/interface";
import WonderCard from "../WonderCard/WonderCard";
import { StyledProjectsGrid } from "./styles";

async function getData() {
  const query = `*[_type == "project"][0...3]`;

  const data = await client.fetch(query, { next: { revalidate: 10 } });

  // console.log(data);

  return data;
}

export default async function WondersGrid() {
  const data = (await getData()) as Project[];

  return (
    <StyledProjectsGrid>
      {data.map((project) => (
        <WonderCard
          key={project._id}
          title={project.title}
          subtitle={project.subtitle}
          img={project.image}
          url={project.url}
        />
      ))}
    </StyledProjectsGrid>
  );
}
