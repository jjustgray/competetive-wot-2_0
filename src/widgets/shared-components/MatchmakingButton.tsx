"use client"

export default function MatchmakingButton() {
    return (
        <div>
            <button className={`
              w-full 
              bg-blue-500 
              hover:bg-blue-700 
              text-white 
              font-bold 
              py-2 
              px-4
            `}>
                ПОДБОР
            </button>
        </div>
    )
}