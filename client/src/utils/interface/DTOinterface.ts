export type OptionDTO = {
    id: number,
    name: string
}

export type GenreDTO  = {
    id: number,
    name: string
}

export type TypeDTO = {
    id: number,
    name: string
}

export type BoardGameDTO = {
    id: number,
    name: string,
    description: string,
    minPlayersCount: number,
    maxPlayersCount: number,
    minPlayerAge: number,
    type: {id: number, name: string},
    genre: {id: number, name: string},
}