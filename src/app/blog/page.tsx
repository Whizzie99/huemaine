import { Metadata } from "next";
import BlogPage from "@/fragments/BlogPage/BlogPage";

export const metadata: Metadata = {
  title: "Huemaine | Blog",
  description: "Ideas and insights",
  openGraph: {
    images: [
      "https://res.cloudinary.com/df6nau7iu/image/upload/v1697359027/og-image_oujcci.jpg",
    ],
  },
};

export default function Blog() {
  return <BlogPage />;
}
