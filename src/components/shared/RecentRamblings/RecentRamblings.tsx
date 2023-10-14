import { Suspense } from "react";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { Post } from "@/lib/interface";
import { PiArrowRightLight } from "react-icons/pi";
import Container from "../Container/Container";
import BlogCard from "../BlogCard/BlogCard";
import {
  StyledWrapper,
  StyledSection,
  StyledGrid,
  StyledExploreBtn,
} from "./styles";

async function getData() {
  const query = `*[_type == "post"][0...3]`;

  const data = await client.fetch(query, { next: { path: "/" } });

  return data;
}

export default async function RecentRamlings() {
  const data = (await getData()) as Post[];

  return (
    <StyledWrapper>
      <Container>
        <StyledSection>
          <h2>
            recent
            <br />
            ramblings
          </h2>
          <p>
            Dive into our recent ramblings, where insights and ideas collide to
            spark new horizons in thought and action.
          </p>
          <Suspense fallback={<p>loading...</p>}>
            <StyledGrid>
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
            </StyledGrid>
          </Suspense>
          <StyledExploreBtn>
            <Link href="#">
              <span>view more</span>
              <span>
                <PiArrowRightLight />
              </span>
            </Link>
          </StyledExploreBtn>
        </StyledSection>
      </Container>
    </StyledWrapper>
  );
}
