"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Crucial", href: "/profile", icon: "/images/avatar.jpeg"},
  { name: "Играть", href: "/play", icon: "/icons/play.png"},
  { name: "Рейтинг", href: "/rating", icon: "/icons/ranking-v2.png"},
  { name: "Смотреть", href: "/watch", icon: "/icons/watch-v2.png"},
  { name: "Лента", href: "/feed", icon: "/icons/feed.png"}
]

export default function Navbar() {
  const pathname = usePathname()
  const isCollapsed = pathname?.includes("/matchmaking")

  return (
    <aside className={`bg-slate-800 text-white p-2 flex flex-col ${isCollapsed ? "w-20" : "w-48"} min-h-screen`}>
      <Link
        href="/"
        title="Главная"
        className={`
          flex 
          items-center 
          justify-start
          hover:bg-gray-600
          transition-colors
          gap-3
          p-2
          rounded-md
          ${isCollapsed ? "justify-center" : ""}
        `}
      >
        <Image
          src="/images/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        {!isCollapsed && <span className="text-lg font-bold">Главная</span>}
      </Link>
      {!isCollapsed && <hr className="border-gray-300 my-2" />}
        <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
            <Link
                key={item.name}
                href={item.href}
                title={item.name}
                className={`
                  flex 
                  items-center
                  ${isCollapsed ? "justify-center" : "justify-start"}
                  hover:bg-gray-600
                  transition-colors
                  gap-3
                  p-2
                  rounded-md
                  min-h-[13]
                  w-full
                  ${isCollapsed ? "mx-auto" : ""}
                  `}
            >
                <Image
                src={item.icon}
                alt={item.name}
                width={40}
                height={40}
                className={item.name === "Crucial" ? "rounded-full" : ""}
                />
                {!isCollapsed && <span className="text-lg font-semibold">{item.name}</span>}
            </Link>
        ))}
      </nav>
    </aside>
  )
}