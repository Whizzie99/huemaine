import SingleBlogPage from "@/fragments/SingleBlogPage/SingleBlogPage";

export default function SingleBlogPost({ params }: { params: { id: string } }) {
  const blogId = params.id[1];

  return <SingleBlogPage id={blogId} />;
}
