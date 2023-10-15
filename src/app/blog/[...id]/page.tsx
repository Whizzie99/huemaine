import { client } from "@/lib/sanity";
// import { Post } from "@/lib/interface";
import { urlFor } from "@/lib/sanityImageUrl";
import SingleBlogPage from "@/fragments/SingleBlogPage/SingleBlogPage";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const blogId = params.id[1];

  const query = `*[_type == "post" && _id == "${blogId}"][0]`;

  const data = await client.fetch(query, { next: { revalidate: 0 } });

  const post = data;


  // console.log(urlFor(post.img).url());
  return {
    title: `Huemain | Blog - ${post.title}`,
    description: `${post.title?.substring(0, 30)}...`,
    openGraph: {
      title: `Huemain | Blog - ${post.title}`,
      description: `${post.title?.substring(0, 30)}...`,
      // images: [`${urlFor(post?.img).url()}`],
    },
  };
}

export default function SingleBlogPost({ params }: { params: { id: string } }) {
  const blogId = params.id[1];

  return <SingleBlogPage id={blogId} />;
}
