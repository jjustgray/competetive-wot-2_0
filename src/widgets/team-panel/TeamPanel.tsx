"use client";

import EditTeamName from "../../features/edit-team-name/components/EditTeamName";
import { useTeam } from "@/entities/team/model/TeamContext";
import { TeamSlot } from "@/entities/team/components/TeamSlot";
import { useAuth } from "@/entities/player/model/hooks";
import { useMemo } from "react";

export default function TeamPanel() {
    const { team } = useTeam()
    const { me } = useAuth()

    const orderedSlots = useMemo(() => {
        const slots = team?.slots ?? []
        if (slots.length === 0) return []

        // 1) root must be "me" if present, otherwise first slot
        const meIndex = slots.findIndex((slot) => slot.player?.id === me?.id)
        const rootSlot = meIndex !== -1 ? slots[meIndex] : slots[0]

        // 2) build array without root, preserving original slot order
        const rest = slots.filter((_, index) => index !== meIndex)

        // 3) split by positions for tree layout
        const rightSlots = rest.filter((_, index) => index % 2 === 0) // positions 0,2,4 => output 1,3,5
        const leftSlots = rest.filter((_, index) => index % 2 === 1) // positions 1,3,5 => output 2,4,6

        // 4) interleave right and left to match comment semantics
        const arranged = [rootSlot]
        const maxLen = Math.max(rightSlots.length, leftSlots.length)

        for (let i = 0; i < maxLen; i++) {
            if (rightSlots[i]) arranged.push(rightSlots[i])
            if (leftSlots[i]) arranged.push(leftSlots[i])
        }

        return arranged
    }, [team, me])

    return (
        <div className="flex flex-col h-full w-full bg-gray-700 p-2">
            <EditTeamName />
            <div className="w-full h-full grid grid-cols-7 gap-3 pt-2">
                {orderedSlots.map((slot, index) => (
                    <TeamSlot
                        key={slot.slot_id ?? index}
                        player={slot.player}
                        isMe={!!(me && slot.player?.id === me.id)}
                    />
                ))}
            </div>
        </div>
    )
}