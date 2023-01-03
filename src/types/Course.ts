import { Tee } from "./Tee";

export type Course = {
  id: number;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  tees?: Tee[];
}