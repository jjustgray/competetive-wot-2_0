"use client"

import { useState } from "react";
import MatchmakingButton from "@/widgets/shared-components/MatchmakingButton";
import RulesPanel from "@/widgets/shared-components/RulesPanel";
import TeamPanel from "@/widgets/team-panel/TeamPanel";
import TeamChat from "@/widgets/team-panel/TeamChat";

export default function MatchmakingPage() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex flex-col h-full w-full p-2 relative">
            <div className="flex flex-col flex-1 w-full h-full">
                <div className="flex-1 h-full w-full">
                    <TeamPanel />
                </div>

                <div className="flex justify-between items-end pt-2">
                    <TeamChat />

                    <div className="flex flex-col items-end gap-2">
                        <button
                            onClick={() => setIsOpen(prev => !prev)}
                            className="bg-gray-700 text-white px-2 py-1 rounded"
                        >
                            {isOpen ? ">>" : "<<"}
                        </button>

                        <MatchmakingButton onClick={() => setIsOpen(false)} />
                    </div>
                </div>
            </div>
            {/* Надо добавить смещение кнопок снизу при открытии меню, сделать небольшое меню */}
            <div
                className={`
                    absolute top-0 right-0 h-full w-[150]
                    bg-black/90 border-l border-gray-700
                    transition-transform duration-300
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <RulesPanel />
            </div>
        </div>
    );
}