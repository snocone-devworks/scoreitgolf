import { League } from "./League";

export type Match = {
  id: number;
  iteration: number;
  leagueId: number;
  league?: League;
}