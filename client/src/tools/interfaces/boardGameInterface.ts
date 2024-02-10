export type CreateBoardGame = {
    name: string,
    description: string,
    minPlayersCount: number,
    maxPlayersCount: number,
    minPlayerAge: number,
    type: { id: string, name: string }, // УБРАТЬ name
    genre: { id: string, name: string }[], // УБРАТЬ name
}

export type FormBoardGame = {
    name: string,
    description: string,
    minPlayersCount: number,
    maxPlayersCount: number,
    minPlayerAge: number,
    type: string,
    genre: string[],
    img?: string
}