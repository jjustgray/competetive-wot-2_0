import MatchmakingButton from "@/widgets/shared-components/MatchmakingButton";
import RulesPanel from "@/widgets/shared-components/RulesPanel";
import TeamPanel from "@/widgets/team-panel/TeamPanel";
import TeamChat from "@/widgets/team-panel/TeamChat";

export default function MatchmakingPage() {
    return (
        <div className="min-h-[calc(100vh-120px)] flex flex-1 flex-col items-center p-2 gap-2">
            <div className="grid 
                grid-cols-1
                lg:grid-cols-[7fr_3fr]
                gap-2
                w-full
                bg-gray-800"
            >
                {/* Левая колонка */}
                <div className="p-4 bg-gray-700">
                    <h1 className="text-2xl font-bold mb-4">Команда</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
                        <TeamPanel />
                        <TeamChat />
                    </div>
                </div>
                {/* Правая колонка */}
                <div className="flex flex-col gap-4">
                    <RulesPanel />
                    <MatchmakingButton />
                </div>
            </div>
        </div>
    );
}