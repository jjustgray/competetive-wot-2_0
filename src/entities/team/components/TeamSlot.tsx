"use client"

import Image from "next/image"
import { Player } from "@/entities/player/model/types"

type Props = {
    slot_number: number
    player?: Player | null
    isCaptain?: boolean
}

export const TeamSlot = ({ slot_number, player, isCaptain }: Props) => {
    return (
        <div className="
            grid
            grid-cols-[3rem_4.5rem_1fr_3rem]
            items-center
            gap-4
            p-5
            rounded-xl
            border
            border-gray-700
            bg-gray-900
            w-full
        ">

            {/* SLOT NUMBER */}
            <div className="
                w-8
                h-8
                flex
                items-center
                justify-center
                rounded-full
                bg-gray-700
                text-sm
                text-white
                shrink-0
            ">
                {slot_number}
            </div>

            {player ? (
                <>
                    {/* AVATAR */}
                    <Image
                        src={player.avatar}
                        alt="avatar"
                        width={60}
                        height={60}
                        className="rounded-full shrink-0"
                    />

                    {/* PLAYER INFO */}
                    <div className="flex flex-col min-w-0">

                        <span className="
                            font-semibold
                            text-lg
                            truncate
                        ">
                            {player.nickname}
                        </span>

                        <span className="
                            text-sm
                            text-gray-400
                            font-mono
                        ">
                            MMR {player.mmr}
                        </span>

                    </div>

                    {/* CAPTAIN ICON */}
                    <div className="flex justify-center items-center">

                        {isCaptain && (
                            <Image
                                src="/icons/crown.png"
                                alt="crown"
                                width={24}
                                height={24}
                            />
                        )}

                    </div>
                </>
            ) : (
                <>
                    {/* пустая колонка аватара */}
                    <div />

                    {/* invite text */}
                    <div className="text-gray-400 text-lg">
                        Пригласить игрока
                    </div>

                    {/* пустая колонка crown */}
                    <div />
                </>
            )}

        </div>
    )
}