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

export interface BoardGamesDTO {
    id: string,
    name: string,
    description: string,
    minPlayersCount: number,
    maxPlayersCount: number,
    minPlayerAge: number,
    type: { id: number, name: string },
    genres: { id: number, name: string }[],
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
    id: string,
    name: string,
    description: string,
    confidentialType: number,
    avatarInfoId: FileInfoDTO,
    backgroundInfoId: FileInfoDTO,
    games: BoardGamesDTO[],
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