"use client";

import Image from "next/image";
import EditTeamName from "../../features/edit-team-name/components/EditTeamName";
import { useTeam } from "@/entities/team/model/TeamContext";
import { TeamSlot } from "@/entities/team/components/TeamSlot";
import { useAuth } from "@/entities/player/model/hooks";
import { useMemo } from "react";

export default function TeamPanel() {
    const { team } = useTeam()
    const { me } = useAuth()

    const orderedSlots = useMemo(() => {
        const normalized = [...team.slots]

        while (normalized.length < 7) {
            normalized.push({ slot_id: -normalized.length - 1, player: null })
        }

        if (normalized.length > 7) {
            normalized.splice(7)
        }

        if (!me) {
            return normalized
        }

        const meIndex = normalized.findIndex(slot => slot.player?.id === me.id)
        if (meIndex === -1) {
            return normalized
        }

        const meSlot = normalized[meIndex]
        const others = normalized.filter((_, idx) => idx !== meIndex)
        const left = others.slice(0, 3)
        const right = others.slice(3, 6)
        return [...left, meSlot, ...right]
    }, [team.slots, me])

    return (
        <div className="shadow-md rounded-xl border border-gray-200 p-4 bg-gray-700">
            <EditTeamName />
            <div className="mt-4 grid grid-cols-7 gap-3">
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