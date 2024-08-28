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
    id: string,
    name: string,
    alias: string,
    description: string,
    minPlayersCount: number,
    maxPlayersCount: number,
    minPlayerAge: number,
    rating: number,
    ratingTessera: number,
    ratingBgg: number,
    type: { id: number, name: string },
    genres: { id: number, name: string }[],
    preview: FileInfoDTO,
    files: FileInfoDTO[],
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
    confidentialType?: number,
    avatarInfoId?: string,
    backgroundInfoId?: string,
}


export interface FileInfoDTO {
    id: string,
    name: string,
    contentType: string,
    type: any
}