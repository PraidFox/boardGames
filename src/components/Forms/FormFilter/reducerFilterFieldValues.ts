import {FilterBoardGames} from "../../../tools/interfaces/formInterface";

export type ActionRFFV = | { type: "SET_NAME", payload: string } | { type: "SET_GENRE", payload: string[] }
    | { type: "SET_AGE", payload: number | null }
    | { type: "SET_COUNT_PLAYERS", payload: number[] }
    | { type: "RESET_FILTER" }


export const reducerFilterFieldValues = (state: FilterBoardGames | undefined, action: ActionRFFV): FilterBoardGames | undefined => {
    switch (action.type) {
        case "SET_NAME":
            return {...state, name: action.payload}
        case "SET_GENRE":
            return {...state, genre: action.payload}
        case "SET_AGE":
            return {...state, age: action.payload}
        case "SET_COUNT_PLAYERS":
            return {...state, minPlayers: action.payload[0], maxPlayers: action.payload[1]}
        case "RESET_FILTER":
            return undefined
    }
}