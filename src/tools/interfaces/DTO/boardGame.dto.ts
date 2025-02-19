/**Полная информация по игре возвращается если сходить за ней по id*/
export interface BoardGameFullInfoDto {
    id: number;
    name: string;
    alias: string | null;
    description: string;
    minPlayersCount: number;
    maxPlayersCount: number;
    minPlayerAge: number;
    rating: number;
    ratingTessera: number;
    ratingBgg: number;
    type: TypeDTO;
    genres: GenreDTO[];
    preview: PreviewDTO | null;
    files: FileInfoDTO[];
    labels: string[]
    linkToPublisher: string,
    userRating: number
}

/**Короткая информация по игре возвращается если запросить игры по фильтру*/
export type BoardGameMinInfoDto = Omit<BoardGameFullInfoDto, "labels" | "userRating" | "linkToPublisher">

export interface AllBoardGameDTO {
    boardGames: BoardGameMinInfoDto[]
    count: number
}

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
    minPlayersCount?: number
    maxPlayersCount?: number
    typeIds?: number[]
    genreIds?: number[]
    playersAge?: number
    pageNum?: number
    itemPerPage?: number
    excludedGamesId?: number[]
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

