import {Options, OptionsAutoComplete} from "../../../utils/interface/serverInterface";
import {OptionsFieldFormEdit} from "./reducerOptionsField";

export type ValesFieldFormEdit = {
    img: string,
    nameGame: OptionsAutoComplete<null> | null,
    typeGame: Options<null> | null,
    genreGame: string[],
    maxPlayers: number,
    minPlayers: number,
}

export type Action = | { type: "ADD_ALL_DEFAULT" }
    | { type: "CHANGE_IMG", payload: string }
    | { type: "CHANGE_MIN_PLAYERS" | "CHANGE_MAX_PLAYERS", payload: number | null }
    | { type: "CHANGE_NAME_GAME", payload: OptionsAutoComplete<null> }
    | { type: "CHANGE_GENRE_GAME", payload: string[] }
// | { type: "CHANGE_TYPE_GAME", payload: Options<null>[] | Options<null> }

export const reducerValuesField = (state: ValesFieldFormEdit, action: Action) => {
    let newMaxPlayers = state.maxPlayers

    switch (action.type) {
        case "ADD_ALL_DEFAULT":
            const newState: ValesFieldFormEdit = {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZtzUkONjLZrH5_jY_um2MP03-NprVybRCXantGNuAV3qvBkaMTJY_AmlhG6OP4cVGsc&usqp=CAU",
                nameGame: null,
                typeGame: null,
                genreGame: [],
                maxPlayers: 1,
                minPlayers: 1,
            }
            return {...newState}
        case  "CHANGE_IMG":
            return {...state, img: action.payload}
        case "CHANGE_MIN_PLAYERS":
            let newMinPlayers = state.minPlayers
            if (action.payload) {
                newMinPlayers = action.payload
                if (action.payload >= state.maxPlayers) {
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


