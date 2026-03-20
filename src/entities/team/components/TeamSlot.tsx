"use client"

import Image from "next/image"
import { Player } from "@/entities/player/model/types"

type Props = {
    player?: Player | null
    isMe?: boolean
}

export const TeamSlot = ({ player, isMe }: Props) => {

    return (
        <div className={`
            flex flex-col flex-1 
            bg-black border border-gray-600
            text-white
            items-center justify-center`}>
                {player ? (
                <>
                    <div className="rounded-full">
                        <Image
                            src={player.avatar}
                            alt={player.nickname}
                            width={128}
                            height={128}
                            className="rounded-full"
                        />
                    </div>
                    <div className="font-semibold text-m">
                        {player.nickname} {isMe && "(Вы)"}
                    </div>
                    <div className="text-sm">Рейтинг: {player.mmr}</div>
                </>
            ) : (
                <div className="flex-1 text-sm font-medium">Свободный слот</div>
            )}
        </div>
    )
}