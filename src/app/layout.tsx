import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registery";
import { Bodoni_Moda, Alegreya_Sans, Oswald } from "next/font/google";
import { GlobalStyles } from "@/components/GlobalStyles/GlobalStyles";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

const bodoni = Bodoni_Moda({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const alegreya = Alegreya_Sans({
  weight: ["100", "300", "400", "500", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-alegreya",
  display: "swap",
});

const oswald = Oswald({
  weight: ["200", "300", "300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huemaine | Home",
  description: "Illuminating Brands with Creative Brilliance and PR Expertise",
  openGraph: {
    images: [
      "https://res.cloudinary.com/df6nau7iu/image/upload/v1697359027/og-image_oujcci.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${bodoni.variable} ${alegreya.variable} ${oswald.variable}`}
      >
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Navbar />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
