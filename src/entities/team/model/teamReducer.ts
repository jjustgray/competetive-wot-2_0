import { Player } from "@/entities/player/model/types"
import { Team } from "@/entities/team/model/types"
import { TeamAction } from "./TeamAction"

export function teamReducer(team: Team, action: TeamAction): Team {

  switch (action.type) {

    case "EDIT_TEAM_NAME":
      return {
        ...team,
        name: action.payload
      }

    case "ADD_PLAYER":
      const emptySlotIndex = team.slots.findIndex(slot => slot.player === null)
      if (emptySlotIndex === -1) return team // no empty slots

      return {
        ...team,
        slots: team.slots.map((slot, index) =>
          index === emptySlotIndex
            ? { ...slot, player: action.payload.player }
            : slot
        )
      }

    case "REMOVE_PLAYER": {
      // удалить игрока из слота
      return team
    }

    case "CHANGE_CAPTAIN": {
      return {
        ...team,
        captain: action.payload
      }
    }

    case "SWAP_SLOTS": {
      // поменять игроков местами
      return team
    }

    case "INVITE_PLAYER": {
      // отправить приглашение игроку
      return team
    }

    case "ACCEPT_INVITE": {
      // игрок принимает приглашение
      return team
    }

    case "LEAVE_TEAM": {
      // игрок покидает команду
      return team
    }

    default:
      return team
  }

}