import { Player } from "../../player/model/types";
import { TeamAction } from "./TeamAction";

export type TeamSlot = {
  slot_id: number
  player: Player | null
}

export type Team = {
  team_id: string
  name: string
  captain: Player
  slots: TeamSlot[]
}

export type TeamContextType = {
  team: Team
  dispatch: React.Dispatch<TeamAction>
}
