export type TableModal = {
    name: string
    setting: any
}

export type BoardGame = {
    id?: number
    name: string
    description?: string
    min_players: number
    max_players: number
    createdAt?: Date
    updatedAt?: Date
}

export type dataCrUp = {
    createdAt: Date
    updatedAt: Date
}