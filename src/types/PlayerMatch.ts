import { Match } from "./Match";
import { Player } from "./Player";

export type PlayerMatch = {
  id: number;
  teamNumber: number;
  playerId: number;
  player?: Player;
  matchId: number;
  Match?: Match;
}