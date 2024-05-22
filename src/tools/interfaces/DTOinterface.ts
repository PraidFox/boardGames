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

export interface RoleDTO {
    id: string,
    name: string,
    normalizedName: string
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