"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function PlayTopbar() {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-6 bg-gray-600 p-4 rounded-2xl">
      
      <Link
        href="/play/matchmaking"
        className={
          pathname === "/play/matchmaking"
            ? "text-orange-400 font-bold"
            : "hover:text-orange-400"
        }
      >
        Matchmaking
      </Link>

      <Link
        href="/play/tournaments"
        className={
          pathname === "/play/tournaments"
            ? "text-orange-400 font-bold"
            : "hover:text-orange-400"
        }
      >
        Tournaments
      </Link>
      
      <Link
        href="/play/contests"
        className={
          pathname === "/play/contests"
            ? "text-orange-400 font-bold"
            : "hover:text-orange-400"
        }
      >
        Contests
      </Link>
    </div>
  )
}