import { Metadata } from "next";
import AboutPage from "@/fragments/AboutPage/AboutPage";

export const metadata: Metadata = {
  title: "Huemaine | Our Story",
  description: "What we do at Huemaine",
  openGraph: {
    images: [
      "https://res.cloudinary.com/df6nau7iu/image/upload/v1697359027/og-image_oujcci.jpg",
    ],
  },
};

export default function About() {
  return <AboutPage />;
}
