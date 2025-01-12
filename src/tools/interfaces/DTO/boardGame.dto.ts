export interface CurrentBoardGameDto {
    id: number;
    name: string;
    alias: string;
    description: string;
    minPlayersCount: number;
    maxPlayersCount: number;
    minPlayerAge: number;
    rating: number;
    ratingTessera: number;
    ratingBgg: number;
    type: TypeDTO;
    genres: GenreDTO[];
    preview: PreviewDTO;
    files: FileInfoDTO[];
    labels: string[]
    linkToPublisher: string,
    userRating: number
}

export type ManyBoardGameDTO = Omit<CurrentBoardGameDto, "labels" | "userRating" | "linkToPublisher">[]

export interface PreviewDTO {
    id: string,
    name: string,
    contentType: string,
    type: number
}

export type CreateGameDTO = {
    name: string,
    description: string,
    linkToPublisher: string,
    minPlayersCount: number,
    maxPlayersCount: number,
    minPlayerAge: number,
    typeId: number,
    genreIds: number[],
    barcode: string,
    articul: string,
    previewId: string,
    fileIds: string[]
}

export interface FilterGamesDTO {
    gameName?: string
    minPlayersCount?: string
    maxPlayersCount?: string
    typeIds?: number[]
    genreIds?: number[]
    playersAge?: number
    pageNum?: number
    itemPerPage?: number
}

export interface FileInfoDTO {
    id: string,
    name: string,
    contentType: string,
    type: any
}

export interface OptionDTO {
    id: string,
    name: string
}

export type GenreDTO = OptionDTO
export type TypeDTO = OptionDTO

