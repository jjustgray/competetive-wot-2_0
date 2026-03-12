import { useState } from "react"
import { useTeam } from "@/entities/team/model/TeamContext"

export function useEditTeamName() {

  const { team, dispatch } = useTeam()

  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(team.name)

  const startEdit = () => {
    setEditing(true)
  }

  const cancelEdit = () => {
    setValue(team.name)
    setEditing(false)
  }

  const saveEdit = () => {
    dispatch(
      { 
        type: "EDIT_TEAM_NAME", 
        payload: value
      }
    )
    setEditing(false)
  }

  return {
    editing,
    value,
    setValue,
    startEdit,
    cancelEdit,
    saveEdit
  }
}