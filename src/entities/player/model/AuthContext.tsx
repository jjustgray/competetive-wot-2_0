"use client"

import { createContext, useEffect, useState  } from "react"
import { Player, AuthContextType } from "./types"

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [me, setMe] = useState<Player | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // 🔥 логин
  const login = async (newToken: string) => {
    setToken(newToken)
    localStorage.setItem("token", newToken)

    // запрос юзера
    const res = await fetch("/api/me", {
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    })

    const user = await res.json()
    setMe(user)
  }

  // 🔥 логаут
  const logout = () => {
    setToken(null)
    setMe(null)
    localStorage.removeItem("token")
  }

  // 🔥 авто-логин при старте
  useEffect(() => {
    const savedToken = localStorage.getItem("token")

    if (!savedToken) {
      setIsLoading(false)
      return
    }

    login(savedToken).finally(() => setIsLoading(false))
  }, [])

  return (
    <AuthContext.Provider
      value={{
        me,
        token,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}