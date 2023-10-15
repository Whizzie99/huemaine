import { Metadata } from "next";
import ServicesPage from "@/fragments/ServicesPage/ServicesPage";

export const metadata: Metadata = {
  title: "Huemaine | Services",
  description: "Discover our solutions suite",
  openGraph: {
    images: [
      "https://res.cloudinary.com/df6nau7iu/image/upload/v1697359027/og-image_oujcci.jpg",
    ],
  },
};

export default function Services() {
  return <ServicesPage />;
}
