"use client"

import Image from "next/image"
import Link from "next/link"

const navItems = [
  { name: "Crucial", href: "/profile", icon: "/images/avatar.jpeg"},
  { name: "Играть", href: "/play", icon: "/icons/play.png"},
  { name: "Рейтинг", href: "/rating", icon: "/icons/ranking-v2.png"},
  { name: "Смотреть", href: "/watch", icon: "/icons/watch-v2.png"},
  { name: "Лента", href: "/feed", icon: "/icons/feed.png"}
]

export default function Navbar() {
  return (
    <aside className="bg-slate-800 text-white p-6 flex flex-col">
      <Link
        href="/"
        className={`
          flex 
          items-center 
          hover:bg-gray-600
          transition-colors
          gap-3
        `}
      >
        <Image
          src="/images/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-lg font-bold">Главная</span>
      </Link>
      <hr className="border-gray-300 my-2" />
        <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
            <Link
                key={item.name}
                href={item.href}
                className={`
                  flex 
                  items-center
                  hover:bg-gray-600
                  transition-colors
                  gap-3
                  `}
            >
                <Image
                src={item.icon}
                alt={item.name}
                width={40}
                height={40}
                className={item.name === "Crucial" ? "rounded-full" : ""}
                />
                <span className="text-lg font-semibold">{item.name}</span>
            </Link>
        ))}
      </nav>
    </aside>
  )
}