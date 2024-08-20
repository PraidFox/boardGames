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

// export interface RoleDTO {
//     id: string,
//     name: string,
//     normalizedName: string
// }

export type RoleDTO = string[]

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

export interface GameCollectionCreateDto {
    name: string,
    confidentialType: number,
    avatarInfoId: string,
    backgroundInfoId: string,
    games: number[],
}