import {OptionSelect} from "../../../tools/interfaces/option.Interface.ts";

export type ValesFieldFormEdit = {
    name: string | null,
    type: OptionSelect<null> | null,
    genre: string[],
    maxPlayersCount: number,
    minPlayersCount: number,
    previewId: string,
    images: string[],
    articul: string,
    barcode: string,
    linkToPublisher: string
}

export type Action =
    | {
    type: "ADD_ALL_DEFAULT"
}
    | {
    type: "CHANGE_MIN_PLAYERS" | "CHANGE_MAX_PLAYERS",
    payload: number | null
}
    | {
    type: "CHANGE_NAME_GAME",
    payload: string | null
}
    | {
    type: "CHANGE_GENRE_GAME" | "CHANGE_IMAGES",
    payload: string[]
} | {
    type: "CHANGE_GENRE_GAME" | "CHANGE_PREVIEW",
    payload: string
}

export const reducerFieldValues = (state: ValesFieldFormEdit, action: Action) => {
    let newMaxPlayers = state.maxPlayersCount

    switch (action.type) {
        case "ADD_ALL_DEFAULT":
            { const newState: ValesFieldFormEdit = {
                articul: "", barcode: "", linkToPublisher: "",
                name: null,
                type: null,
                genre: [],
                maxPlayersCount: 1,
                minPlayersCount: 1,
                images: [],
                previewId: ''
            }
            return {...newState} }
        case  "CHANGE_IMAGES":
            return {...state, images: action.payload}
        case "CHANGE_MIN_PLAYERS":
            { let newMinPlayers = state.minPlayersCount
            if (action.payload) {
                newMinPlayers = action.payload
                if (action.payload >= state.maxPlayersCount) {
                    newMaxPlayers = action.payload
                }
            }
            return {...state, minPlayers: newMinPlayers, maxPlayers: newMaxPlayers} }
        case "CHANGE_MAX_PLAYERS":
            if (action.payload) {
                newMaxPlayers = action.payload
            }
            return {...state, maxPlayers: newMaxPlayers}
        case "CHANGE_NAME_GAME":
            return {...state, nameGame: action.payload}
        case "CHANGE_GENRE_GAME":
            return {...state, genreGame: action.payload}
        case "CHANGE_PREVIEW":
            return {...state, previewId: action.payload}

    }
}


