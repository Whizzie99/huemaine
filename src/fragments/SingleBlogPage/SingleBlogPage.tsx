import { client } from "@/lib/sanity";
import { Post } from "@/lib/interface";
import SingleBlog from "@/components/blog/SingleBlog/SingleBlog";

async function getData(id: string) {
  const query = `*[_type == "post" && _id == "${id}"][0]`;

  const data = await client.fetch(query, { next: { revalidate: 0 } });

  return data;
}

export default async function SingleBlogPage({ id }: { id: string }) {
  const data = (await getData(id)) as Post;

  return (
    <>
      <SingleBlog
        title={data.title}
        img={data.image}
        content={data.content}
        author={data.author}
        date={data._createdAt}
      />
    </>
  );
}
