export interface OptionDTO {
    id: string,
    name: string
}

export interface GenreDTO {
    id: string,
    name: string
}

export interface TypeDTO {
    id: string,
    name: string
}

export interface BoardGameDTO {
    alias: string,
    description: string,
    files: FileInfoDTO[],
    genres: { id: number, name: string }[],
    id: string,
    labels: string[]
    //linkToPublisher
    maxPlayersCount: number,
    minPlayersCount: number,
    minPlayerAge: number,
    name: string,
    preview: FileInfoDTO,
    rating: number,
    ratingBgg: number,
    ratingTessera: number,
    type: { id: number, name: string },
    userRating: number
}

// export interface GameCollectionCreateDto {
//     name: string,
//     confidentialType: number,
//     avatarInfoId: string,
//     backgroundInfoId: string,
//     games: number[],
// }

export interface GameCollectionPatchDTO {
    name: string
    description: string
    confidentialType: number
    avatarInfoId: string
    backgroundInfoId: string
    nullable: true
}

export interface GameCollectionDTO {
    alias: string,
    name: string,
    description: string,
    confidentialType: number,
    avatarInfoId: FileInfoDTO,
    backgroundInfoId: FileInfoDTO,
    games: BoardGameDTO[],
}

export interface GameCollectionShortDTO {
    alias: string,
    name: string,
    avatarInfo: FileInfoDTO,
    gameCount: number
}

export interface GameCollectionPatchDto {
    name?: string,
    description?: string,
    confidentialType?: string,
    avatarInfoId?: string,
    backgroundInfoId?: string,
}


export interface FileInfoDTO {
    id: string,
    name: string,
    contentType: string,
    type: any
}