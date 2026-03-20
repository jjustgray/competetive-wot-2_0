"use client"

import { useState } from "react";
// import MatchmakingButton from "@/widgets/shared-components/MatchmakingButton";
// import RulesPanel from "@/widgets/shared-components/RulesPanel";
import TeamPanel from "@/widgets/team-panel/TeamPanel";
import TeamChat from "@/widgets/team-panel/TeamChat";

export default function MatchmakingPage() {
    //const [rulesOpened, setRulesOpened] = useState(false)

    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex flex-col flex-1 w-full h-full">
                <div className="flex-1 h-full w-full">
                    <TeamPanel />
                </div>
                <div className="pt-2">
                    <TeamChat />
                </div>
            </div>

            {/* <div className={`fixed right-6 bottom-6 z-50 flex flex-col gap-2 transition-transform duration-300 ${rulesOpened ? '-translate-x-80' : 'translate-x-0'}`}>
                <MatchmakingButton />
                <button
                    onClick={() => setRulesOpened(prev => !prev)}
                    className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-gray-700"
                >
                    Меню режимов
                </button>
            </div>

            <div className={`fixed right-0 top-0 z-50 h-full w-80 transform bg-gray-900 shadow-2xl transition-transform duration-300 ${rulesOpened ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4">
                    <h2 className="mb-4 text-lg font-bold text-white">Режимы и настройки</h2>
                    <RulesPanel />
                </div>
            </div> */}
        </div>
    );
}