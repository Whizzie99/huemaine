import { Suspense } from "react";
import { client } from "@/lib/sanity";
import { Project } from "@/lib/interface";
import Container from "@/components/shared/Container/Container";
import WonderCard from "../WonderCard/WonderCard";
import { StyledWrapper, StyledSection, StyledProjectsGrid } from "./styles";

async function getData() {
  const query = `*[_type == "project"][0...3]`;

  const data = await client.fetch(query, { next: { revalidate: 10 } });

  return data;
}

export default async function Wonders() {
  const data = (await getData()) as Project[];

  return (
    <StyledWrapper>
      <Container>
        <StyledSection>
          <h2>
            a world of
            <br />
            huemaine wonders
          </h2>
          <p>
            orem ipsum dolor sit amet consectetur. Nisl erat non rhoncus eget
            velit et lectus ut. Est nunc facilisi sapien dictumst viverra. Amet
            fermentum donec tempor turpis. Urna mauris nam aliquam urna{" "}
          </p>
          <Suspense fallback={<p>loading...</p>}>
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
          </Suspense>
        </StyledSection>
      </Container>
    </StyledWrapper>
  );
}
