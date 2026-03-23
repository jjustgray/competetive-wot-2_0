"use client";

import EditTeamName from "../../features/edit-team-name/components/EditTeamName";
import { useTeam } from "@/entities/team/model/TeamContext";
import { TeamSlot } from "@/entities/team/components/TeamSlot";
import { useAuth } from "@/entities/player/model/hooks";
import { useMemo } from "react";
import { Player } from "@/entities/player/model/types";

export default function TeamPanel() {
    const { team, dispatch } = useTeam();
    const { me } = useAuth();

    const guest3: Player = {
        id: "1009",
        nickname: "neo",
        avatar: "/images/logo.png",
        mmr: 1600,
        money: 60,
    };

    const addAnotherPlayer = (slot_id: number) => {
        dispatch({
            type: "ADD_PLAYER",
            payload: {
                slot_id,
                player: guest3,
            },
        });
    };

    const orderedSlots = useMemo(() => {
        const slots = team?.slots ?? [];
        if (slots.length === 0) return [];

        const meSlot =
            slots.find((slot) => slot.player?.id === me?.id) ?? slots[0];

        const rest = slots.filter(
            (slot) => slot.slot_id !== meSlot.slot_id
        );

        const leftSlots = rest
            .filter((slot) => slot.slot_id % 2 === 0)
            .reverse();

        const rightSlots = rest.filter(
            (slot) => slot.slot_id % 2 !== 0
        );

        return [...leftSlots, meSlot, ...rightSlots];
    }, [team, me]);

    return (
        <div className="flex flex-col h-full w-full bg-gray-700 p-2">
            <EditTeamName />

            <div className="flex-1 min-h-0 grid grid-cols-7 gap-3 pt-2">
                {orderedSlots.map((slot, index) => (
                    <TeamSlot
                        key={slot.slot_id ?? index}
                        player={slot.player}
                        slotId={slot.slot_id}
                        isMe={!!(me && slot.player?.id === me.id)}
                        onAddPlayer={addAnotherPlayer}
                    />
                ))}
            </div>
        </div>
    );
}