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
      return {
        ...team,
        // until backend is ready, we will add player to slot on frontend by dispatching action with slot_id and player data
        slots: team.slots.map(slot => {
          if (slot.player === null) {
            return {
              ...slot,
              player: action.payload
            }
          }
          return slot
        })
        // invite player on slot_id in team by pressing "+" button on slot card
        // loading state for that slot until player accepts invite or refuse it
        // if player accepts invite - add player to slot, if refuse - remove loading state
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