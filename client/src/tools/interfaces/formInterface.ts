export type Login = {
    email: string
    password: string
    remember: string
}

export type Registration = {
    email: string
    password: string
    typeUser: string
    userName: string
}

export type FilterBoardGames = {
    name?: string
    genre?: string[]
    age?: number | null
    minPlayers?: number
    maxPlayers?: number
}
