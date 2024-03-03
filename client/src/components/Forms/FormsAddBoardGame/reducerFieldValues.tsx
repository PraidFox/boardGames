import {Options, OptionsAutoComplete} from "../../../tools/interfaces/serverInterface";
import {OptionsFieldFormEdit} from "./reducerFieldOptions";

export type ValesFieldFormEdit = {
    img: string,
    name: OptionsAutoComplete<null> | null,
    type: Options<null> | null,
    genre: string[],
    maxPlayersCount: number,
    minPlayersCount: number,
}

export type Action = | { type: "ADD_ALL_DEFAULT" }
    | { type: "CHANGE_IMG", payload: string }
    | { type: "CHANGE_MIN_PLAYERS" | "CHANGE_MAX_PLAYERS", payload: number | null }
    | { type: "CHANGE_NAME_GAME", payload: OptionsAutoComplete<null> }
    | { type: "CHANGE_GENRE_GAME", payload: string[] }
// | { type: "CHANGE_TYPE_GAME", payload: Options<null>[] | Options<null> }

export const reducerFieldValues = (state: ValesFieldFormEdit, action: Action) => {
    let newMaxPlayers = state.maxPlayersCount

    switch (action.type) {
        case "ADD_ALL_DEFAULT":
            const newState: ValesFieldFormEdit = {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZtzUkONjLZrH5_jY_um2MP03-NprVybRCXantGNuAV3qvBkaMTJY_AmlhG6OP4cVGsc&usqp=CAU",
                name: null,
                type: null,
                genre: [],
                maxPlayersCount: 1,
                minPlayersCount: 1,
            }
            return {...newState}
        case  "CHANGE_IMG":
            return {...state, img: action.payload}
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
            console.log("CHANGE_GENRE_GAME", action.payload)
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


