import { StaticImageData } from "next/image";

export interface User {
  id: number;
  name: string;
  image: StaticImageData;
  profession: string;
  facebook: string;
  instagram: string;
  twitter: string;
}
