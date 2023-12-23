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

export type TypeGame = {
    id: number
    name: string
}

export type Options<T> = {
    label: string
    value: string
    info?: T
}

export type OptionsAutoComplete<T> = {
    value: string
    info: T
}


