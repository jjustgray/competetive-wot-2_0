"use client"

import { createContext, useContext, useReducer } from "react"
import { Team, TeamContextType } from "@/entities/team/model/types"
import { Player } from "@/entities/player/model/types"
import { teamReducer } from "./teamReducer"

const TeamContext = createContext<TeamContextType | null>(null)

export function TeamProvider({ children }: { children: React.ReactNode }) {

  const user: Player = {
    id: "1001",
    nickname: "Crucial",
    avatar: "/images/avatar.jpeg",
    mmr: 1500,
    money: 50,
  }
  const user_team: Team = {
    team_id: "100500",
    name: `team_${user.nickname}`,
    captain: user,
    slots: Array.from({ length: 7 }, (_, i) => ({
      slot_id: i + 1,
      player: i === 0 ? user : null
    }))
  }

  const [team, dispatch] = useReducer(teamReducer, user_team)

  return (
    <TeamContext.Provider value={{ team, dispatch }}>
      {children}
    </TeamContext.Provider>
  )
}

export function useTeam() {

  const context = useContext(TeamContext)

  if (!context) {
    throw new Error("useTeam must be used inside TeamProvider")
  }

  return context
}