import { Suspense } from "react";
import { client } from "@/lib/sanity";
import { Post } from "@/lib/interface";
import Container from "@/components/shared/Container/Container";
import BlogCard from "@/components/shared/BlogCard/BlogCard";
import { StyledList, StyledWrapper } from "./styles";

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query, { next: { path: "/blog" } });

  return data;
}

export default async function BlogList() {
  const data = (await getData()) as Post[];

  return (
    <StyledWrapper>
      <Container>
        <Suspense fallback={<p>loading...</p>}>
          <StyledList>
            {data.map((post) => (
              <BlogCard
                key={post._id}
                title={post.title}
                date={post._createdAt}
                img={post.image}
                slug={post.slug.current}
                id={post._id}
              />
            ))}
          </StyledList>
        </Suspense>
      </Container>
    </StyledWrapper>
  );
}
