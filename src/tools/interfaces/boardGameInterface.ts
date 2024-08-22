export type CreateBoardGame = {
    name: string,
    description: string,
    minPlayersCount: number,
    maxPlayersCount: number,
    minPlayerAge: number,
    typeId: string
    genreIds: string[],
    fileIds: string[]
}

export type FormBoardGame = {
    name: string,
    description: string,
    minPlayersCount: number,
    maxPlayersCount: number,
    minPlayerAge: number,
    type: string,
    genres: string[],
    img?: string
}