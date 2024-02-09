export type CreateBoardGame = {
    name: string,
    description: string,
    minPlayersCount: number,
    maxPlayersCount: number,
    minPlayerAge: number,
    type: { id: number, name: string }, // УБРАТЬ name
    genre: { id: number, name: string }, // УБРАТЬ name
}