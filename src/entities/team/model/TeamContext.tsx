"use client"

import { createContext, useContext, useEffect, useReducer } from "react"
import { Team, TeamContextType } from "@/entities/team/model/types"
import { Player } from "@/entities/player/model/types"
import { useAuth } from "@/entities/player/model/hooks"
import { teamReducer } from "./teamReducer"

const TeamContext = createContext<TeamContextType | null>(null)

export function TeamProvider({ children }: { children: React.ReactNode }) { 
  const { me, temp_login } = useAuth()

  const guest: Player = {
    id: "1002",
    nickname: "Crucial",
    avatar: "/images/avatar.jpeg",
    mmr: 1900,
    money: 150,
  }

  const user = me ?? guest

  useEffect(() => {
    if (!me) {
      temp_login(guest)
    }
  }, [me, temp_login])
  
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