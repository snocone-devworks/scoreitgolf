import { Tee } from "./Tee";

export type Hole = {
  id: number;
  number: number;
  par: number;
  handicap: number;
  yardage: number;
  teeId: number;
  tee?: Tee;
}