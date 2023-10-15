import { client } from "@/lib/sanity";
import { Post } from "@/lib/interface";
import BlogCard from "../BlogCard/BlogCard";
import { StyledGrid } from "./styles";

async function getData() {
  const query = `*[_type == "post"][0...3]`;

  const data = await client.fetch(query, { next: { path: "/" } });

  return data;
}

export default async function RecentRamblingsGrid() {
  const data = (await getData()) as Post[];

  return (
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
  );
}
