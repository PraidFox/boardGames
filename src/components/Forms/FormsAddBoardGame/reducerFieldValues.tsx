import {Options, OptionsAutoComplete} from "../../../tools/interfaces/serverInterface";

export type ValesFieldFormEdit = {
    name: OptionsAutoComplete<null> | null,
    type: Options<null> | null,
    genre: string[],
    maxPlayersCount: number,
    minPlayersCount: number,
    images: string[],
}

export type Action = | {
    type: "ADD_ALL_DEFAULT"
}
    | {
    type: "CHANGE_MIN_PLAYERS" | "CHANGE_MAX_PLAYERS",
    payload: number | null
}
    | {
    type: "CHANGE_NAME_GAME",
    payload: OptionsAutoComplete<null>
}
    | {
    type: "CHANGE_GENRE_GAME",
    payload: string[]
}
    | {
    type: "CHANGE_IMAGES",
    payload: string[]
}


export const reducerFieldValues = (state: ValesFieldFormEdit, action: Action) => {
    let newMaxPlayers = state.maxPlayersCount

    switch (action.type) {
        case "ADD_ALL_DEFAULT":
            const newState: ValesFieldFormEdit = {
                name: null,
                type: null,
                genre: [],
                maxPlayersCount: 1,
                minPlayersCount: 1,
                images: [],
            }
            return {...newState}
        case  "CHANGE_IMAGES":
            return {...state, images: action.payload}
        case "CHANGE_MIN_PLAYERS":
            let newMinPlayers = state.minPlayersCount
            if (action.payload) {
                newMinPlayers = action.payload
                if (action.payload >= state.maxPlayersCount) {
                    newMaxPlayers = action.payload
                }
            }
            return {...state, minPlayers: newMinPlayers, maxPlayers: newMaxPlayers}
        case "CHANGE_MAX_PLAYERS":
            if (action.payload) {
                newMaxPlayers = action.payload
            }
            return {...state, maxPlayers: newMaxPlayers}
        case "CHANGE_NAME_GAME":
            return {...state, nameGame: action.payload}
        case "CHANGE_GENRE_GAME":
            return {...state, genreGame: action.payload}
        // case "CHANGE_TYPE_GAME":
        //     let newTypeGame = action.payload
        //
        //     if(Array.isArray(action.payload)){
        //         newTypeGame = action.payload.filter(obj => Object.keys(obj).length !== 0);
        //     } else {
        //         newTypeGame = [action.payload]
        //     }
        //
        //     return {...state, typeGame: newTypeGame}

    }
}


