import { client } from "@/lib/sanity";
import { Project } from "@/lib/interface";
import Container from "@/components/shared/Container/Container";
import WonderCard from "@/components/home/WonderCard/WonderCard";
import { StyledWrapper, StyledList } from "./styles";

async function getData() {
  const query = `*[_type == "project"]`;

  const data = await client.fetch(query, { next: { revalidate: 0 } });

  return data;
}

export default async function ProjectList() {
  const data = (await getData()) as Project[];

  return (
    <StyledWrapper>
      <Container>
        <StyledList>
          {data.map((project) => (
            <WonderCard
              key={project._id}
              title={project.title}
              subtitle={project.subtitle}
              img={project.image}
              url={project.url}
            />
          ))}
        </StyledList>
      </Container>
    </StyledWrapper>
  );
}
