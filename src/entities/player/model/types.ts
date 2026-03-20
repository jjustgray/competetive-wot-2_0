export type Player = {
  id: string
  nickname: string
  avatar: string | '/images/logo.png' // default_avatar need to add
  mmr: number
  money: number
}

export type AuthContextType = {
  me: Player | null
  token: string | null
  isLoading: boolean
  login: (token: string) => Promise<void>
  logout: () => void
  temp_login: (user: Player) => void
}