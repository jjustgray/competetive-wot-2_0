"use client";

import Image from "next/image";
import { Player } from "@/entities/player/model/types";

type Props = {
    player?: Player | null;
    isMe?: boolean;
    slotId: number;
    onAddPlayer?: (slotId: number) => void;
};

export const TeamSlot = ({
    player,
    isMe,
    slotId,
    onAddPlayer,
}: Props) => {
    const isEmpty = !player;

    return (
        <div
            onClick={() => isEmpty && onAddPlayer?.(slotId)}
            className={`
                group relative flex flex-col h-full
                border border-gray-600 bg-black text-white
                items-center justify-center
                rounded-lg
                transition-all duration-200

                ${
                    isEmpty
                        ? "cursor-pointer hover:border-blue-400 hover:bg-gray-900"
                        : ""
                }
            `}
        >
            {player ? (
                <>
                    <Image
                        src={player.avatar}
                        alt={player.nickname}
                        width={96}
                        height={96}
                        className="rounded-full mb-2"
                    />

                    <div className="font-semibold text-sm text-center">
                        {player.nickname} {isMe && "(Вы)"}
                    </div>

                    <div className="text-xs text-gray-300">
                        Рейтинг: {player.mmr}
                    </div>
                </>
            ) : (
                <>
                    {/* обычное состояние */}
                    <span className="text-sm font-medium text-gray-400 transition group-hover:opacity-0">
                        Пригласить игрока
                    </span>

                    {/* hover "+" */}
                    <span
                        className={`
                             absolute text-3xl text-gray-400
                            opacity-0 group-hover:opacity-100
                            transition
                        `}
                    >
                        +
                    </span>
                </>
            )}
        </div>
    );
};