import { Player } from "@/entities/player/model/types"

export type TeamAction =
  | { type: "EDIT_TEAM_NAME"; payload: string }
  | { type: "ADD_PLAYER"; payload: {
                slot_id: number,
                player: Player,
      } 
    }
  | { type: "REMOVE_PLAYER"; payload: string }
  | { type: "CHANGE_CAPTAIN"; payload: Player }
  | { type: "SWAP_SLOTS"; payload: number; toSlot: number }
  | { type: "INVITE_PLAYER"; payload: Player }
  | { type: "ACCEPT_INVITE"; payload: Player }
  | { type: "LEAVE_TEAM"; payload: string }