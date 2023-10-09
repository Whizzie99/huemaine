import absolut from "../public/images/clients/brands/absolut.png";
import baobab from "../public/images/clients/brands/baobab.png";
import bnxn from "../public/images/clients/brands/bnxn.png";
import chevas from "../public/images/clients/brands/chevas-logo.png";
import ethopianAirlines from "../public/images/clients/brands/ethopian-airlines.png";
import flyEmirates from "../public/images/clients/brands/fly-emirates.png";
import jumia from "../public/images/clients/brands/jumia-logo.png";
import kiitec from "../public/images/clients/brands/kiitec-logo.png";
import ori from "../public/images/clients/brands/ori-logo.png";
import repdoor from "../public/images/clients/brands/repdoor-logo.png";
import forbes from "../public/images/clients/brands/forbes.png";

interface Brand {
  id: number;
  img: string;
  text: string;
}

export const brands: Brand[] = [
  {
    id: 1,
    img: absolut.src,
    text: "absolut logo",
  },
  {
    id: 2,
    img: baobab.src,
    text: "baobab logo",
  },
  {
    id: 3,
    img: bnxn.src,
    text: "bnxn logo",
  },
  {
    id: 4,
    img: chevas.src,
    text: "chevas logo",
  },
  {
    id: 5,
    img: ethopianAirlines.src,
    text: "ethopian airlines logo",
  },
  {
    id: 6,
    img: flyEmirates.src,
    text: "fly emirates logo",
  },
  {
    id: 7,
    img: jumia.src,
    text: "jumia logo",
  },
  {
    id: 8,
    img: kiitec.src,
    text: "kiitec logo",
  },
  {
    id: 9,
    img: ori.src,
    text: "ori logo",
  },
  {
    id: 10,
    img: repdoor.src,
    text: "repdoor logo",
  },
  {
    id: 11,
    img: forbes.src,
    text: "repdoor logo",
  },
  {
    id: 12,
    img: forbes.src,
    text: "repdoor logo",
  },
];
