// import BlogHero from "@/components/blog/BlogHero/BlogHero";
import MiniHero from "@/components/shared/MiniHero/MiniHero";
import BlogList from "@/components/blog/BlogList/BlogList";

export default function BlogPage() {
  return (
    <>
      <MiniHero
        title="blog"
        subtitle="Dive into our digital journal of ideas, insights, and inspiration, where curiosity finds its fuel."
      />
      <BlogList />
    </>
  );
}
