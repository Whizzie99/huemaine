import img1 from "../public/images/services/services-6.jpeg";
import img2 from "../public/images/services/services-2.jpeg";
import img3 from "../public/images/services/services-3.jpg";
import img4 from "../public/images/services/services-4.jpeg";
import img5 from "../public/images/services/services-5.jpeg";

interface Service {
  id: number;
  title: string;
  description: string;
  serviceItems: string[];
  img: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "creative service",
    description:
      "Where ideas bloom, imagination thrives, and innovation ignites. Our team of visionary artists and strategists breathe life into your brand's story. Experience limitless creativity with us today.",
    serviceItems: [
      "brand & identity design",
      "creative campaigns",
      "concept developement",
      "multichannel campaings",
      "website developement",
      "UI/UX design",
    ],
    img: img1.src,
  },
  {
    id: 2,
    title: "public relations",
    description:
      "Crafting stories that captivate, connections that resonate, and reputations that endure. Our PR experts are here to amplify your brand's voice, build meaningful relationships, and navigate the media landscape with finesse. Elevate your presence and make headlines with Huemaine.",
    serviceItems: [
      "press releases",
      "media outreach",
      "storytelling",
      "product launches",
      "brand activations",
      "corporate events",
    ],
    img: img2.src,
  },
  {
    id: 3,
    title: "digital marketing",
    description:
      "We're the brushstroke behind your online masterpiece, the algorithm whisperers, and the growth architects. Let us craft your digital success story, from SEO sorcery to social media symphonies, and watch your brand thrive in the digital realm.",
    serviceItems: [
      "social media management",
      "SEO & SEM",
      "email marketing",
      "email campaigns",
      "marketing automation",
    ],
    img: img3.src,
  },
  {
    id: 4,
    title: "analytics & reporting",
    description:
      "Turning data into dazzling insights, we're your navigators in the sea of numbers. With our data wizards and reporting maestros, discover the hidden gems in your digital strategy. Let's decode, visualize, and elevate your success together.",
    serviceItems: [
      "data analysis",
      "performance tracking",
      "regular reporting",
    ],
    img: img4.src,
  },
  {
    id: 5,
    title: "consultation & strategy",
    description:
      "We're the architects of your digital vision, the masterminds behind your success story. With our strategic prowess and visionary guidance, we'll unlock the path to your digital triumph. ",
    serviceItems: ["strategic planning", "consultation"],
    img: img5.src,
  },
];
