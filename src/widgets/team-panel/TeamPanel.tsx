"use client";

import Image from "next/image";
import EditTeamName from "../../features/edit-team-name/components/EditTeamName";
import { useTeam } from "@/entities/team/model/TeamContext";


export default function TeamPanel() {
    const { team } = useTeam()

    return (
        <div className="shadow-md">
            <EditTeamName />
            <div className="flex flex-1 flex-col">
                {team.slots.map(slot => (
                    <div key={slot.slot_id} className="flex items-center gap-2 mt-2">
                        <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-xs text-white">
                            {slot.slot_id}
                        </div>
                        <div>{slot.player?.nickname || "Пусто"}</div>
                        {slot.player?.player_id === team.captain.player_id && (
                            <div className="ml-2 text-lg font-bold text-yellow-500">
                                <Image
                                    src="/icons/crown.png"
                                    alt="crown"
                                    width={20}
                                    height={20}
                                    className="rounded-full"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}