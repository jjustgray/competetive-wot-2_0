"use client"

interface MB_Props {
    onClick: () => void;
}

export default function MatchmakingButton({onClick}: MB_Props) {
    return (
        <div>
            <button 
            onClick={onClick}
            className={`
              w-full 
              bg-blue-500 
              hover:bg-blue-700 
              text-white 
              font-bold 
              py-2 
              px-4
            `}>
                ПОИСК
            </button>
        </div>
    )
}