import img1 from "../public/images/clients/people/wizkid.png";
import img2 from "../public/images/clients/people/davido.png";
import img3 from "../public/images/clients/people/bnxn.png";
import img4 from "../public/images/clients/people/daniel-kaluuya.webp";
import img5 from "../public/images/clients/people/libianca.webp";
import img6 from "../public/images/clients/people/ckay.jpeg";
import img7 from "../public/images/clients/people/mayorkun.jpeg";
import img8 from "../public/images/clients/people/manny.jpg";
import img9 from "../public/images/clients/people/king-promise.jpeg";
import img10 from "../public/images/clients/people/seun-kuti.jpeg";
import img11 from "../public/images/clients/people/jae5.jpeg";
import img12 from "../public/images/clients/people/walter-banks.jpeg";
import img13 from "../public/images/clients/people/jidenna.webp";
import img14 from "../public/images/clients/people/aisha-sambo.jpeg";
import img15 from "../public/images/clients/people/addey-anderson.jpeg";
import img16 from "../public/images/clients/people/bolajo.jpeg";
import img17 from "../public/images/clients/people/teni.jpeg";

interface Person {
  id: number;
  img: string;
  name: string;
  blurUrl?: string;
}

export const people: Person[] = [
  {
    id: 1,
    img: img1.src,
    name: "wizkid",
    blurUrl: img1.blurDataURL,
  },
  {
    id: 2,
    img: img2.src,
    name: "davido",
    blurUrl: img2.blurDataURL,
  },
  {
    id: 3,
    img: img3.src,
    name: "BNXN",
    blurUrl: img3.blurDataURL,
  },
  {
    id: 4,
    img: img4.src,
    name: "daniel kaluuya",
    blurUrl: img4.blurDataURL,
  },
  {
    id: 5,
    img: img5.src,
    name: "libianca",
    blurUrl: img5.blurDataURL,
  },
  {
    id: 6,
    img: img6.src,
    name: "ckay",
    blurUrl: img6.blurDataURL,
  },
  {
    id: 7,
    img: img7.src,
    name: "mayorkun",
    blurUrl: img7.blurDataURL,
  },
  {
    id: 8,
    img: img8.src,
    name: "manny",
    blurUrl: img8.blurDataURL,
  },
  {
    id: 9,
    img: img9.src,
    name: "king promise",
    blurUrl: img9.blurDataURL,
  },
  {
    id: 10,
    img: img10.src,
    name: "seun kuti",
    blurUrl: img10.blurDataURL,
  },
  {
    id: 11,
    img: img11.src,
    name: "jae5",
    blurUrl: img11.blurDataURL,
  },
  {
    id: 12,
    img: img12.src,
    name: "walter banks",
    blurUrl: img12.blurDataURL,
  },
  {
    id: 13,
    img: img13.src,
    name: "jidenna",
    blurUrl: img13.blurDataURL,
  },
  {
    id: 14,
    img: img14.src,
    name: "aisha sambo",
    blurUrl: img14.blurDataURL,
  },
  {
    id: 15,
    img: img15.src,
    name: "addey anderson",
    blurUrl: img15.blurDataURL,
  },
  {
    id: 16,
    img: img16.src,
    name: "bolajo fawehinmi",
    blurUrl: img16.blurDataURL,
  },
  {
    id: 17,
    img: img17.src,
    name: "teni",
    blurUrl: img17.blurDataURL,
  },
];
