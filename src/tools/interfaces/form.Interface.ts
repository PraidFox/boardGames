export interface Login {
    login: string
    password: string
    remember: boolean
}

export interface Registration extends Login {
    typeUser: string
    userName: string
    email: string
}

export interface FilterBoardGames {
    name?: string
    genre?: string[]
    type?: string[]
    age?: number | null
    minPlayers?: number
    maxPlayers?: number
}
