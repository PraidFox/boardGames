export interface Login {
    email: string
    password: string
    remember: boolean
}

export interface Registration extends Login {
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
