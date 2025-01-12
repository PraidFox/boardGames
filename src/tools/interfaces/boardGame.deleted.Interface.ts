//Под удаление
export type FormBoardGame = {
    name: string,
    description: string,
    minPlayersCount: number,
    maxPlayersCount: number,
    minPlayerAge: number,
    typeId: number,
    genreIds: number[],
    img?: string
    articul: string,
    barcode: string,
    linkToPublisher: string,
    previewId: string,
}