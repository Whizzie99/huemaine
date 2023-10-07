// import BlogHero from "@/components/blog/BlogHero/BlogHero";
import MiniHero from "@/components/shared/MiniHero/MiniHero";
import BlogList from "@/components/blog/BlogList/BlogList";

const BlogPage = () => {
  return (
    <>
      <MiniHero title="blog" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        corporis, voluptates sint animi magnam veniam" />
      <BlogList />
    </>
  );
};

export default BlogPage;
