"use client"

import Image from "next/image"
import { Player } from "@/entities/player/model/types"

type Props = {
    player?: Player | null
    isMe?: boolean
}

export const TeamSlot = ({ player, isMe }: Props) => {
    const slotClass = `
        flex flex-col items-center justify-center gap-2 rounded-xl border p-3 text-center transition-all duration-200
        ${isMe ? "scale-105 border-blue-500 bg-blue-50 shadow-[0_4px_14px_rgba(59,130,246,0.25)]" : "border-gray-200 bg-white"}
    `

    return (
        <div className={slotClass}>
            {player ? (
                <>
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border border-gray-300 bg-gray-100">
                        <Image
                            src={player.avatar}
                            alt={player.nickname}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="font-semibold text-sm text-gray-800">
                        {player.nickname} {isMe && "(Вы)"}
                    </div>
                    <div className="text-xs text-gray-500">Рейтинг: {player.mmr}</div>
                </>
            ) : (
                <div className="text-sm font-medium text-gray-500">Свободный слот</div>
            )}
        </div>
    )
}