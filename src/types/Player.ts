import { Tee } from "./Tee";

export type Player = {
  id: number;
  firstName: string;
  lastName: string;
  handicap: number;
  teeId: number;
  tee?: Tee;
}