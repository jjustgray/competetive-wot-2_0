"use client";

import EditTeamName from "../../features/edit-team-name/components/EditTeamName";
import { useTeam } from "@/entities/team/model/TeamContext";
import { TeamSlot } from "@/entities/team/components/TeamSlot";


export default function TeamPanel() {
    const { team } = useTeam()

    return (
        <div className="shadow-md">
            <EditTeamName />
            <div>
                {team.slots.map(slot => (
                    <TeamSlot
                        key={slot.slot_id}
                        slot_number={slot.slot_id}
                        player={slot.player}
                        isCaptain={slot.player?.player_id === team.captain?.player_id}
                    />
                ))}
            </div>
        </div>
    )
}