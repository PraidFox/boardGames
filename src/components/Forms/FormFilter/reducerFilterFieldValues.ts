import {FilterBoardGames} from "../../../tools/interfaces/fieldsForm.Interface.ts";
import {NF_FilterBoardGames} from "../../../tools/storages/FieldName.storage.ts";

export enum ActionFilterType {
    SET_NAME = "SET_NAME",
    SET_GENRE = "SET_GENRE",
    SET_TYPE = "SET_TYPE",
    SET_AGE = "SET_AGE",
    SET_COUNT_PLAYERS = "SET_COUNT_PLAYERS",
    RESET_FILTER = "RESET_FILTER"
}

export type ActionFilter = | { type: [ActionFilterType.SET_NAME], payload: string } | {
    type: "SET_GENRE" | "SET_TYPE",
    payload: string[]
}
    | { type: "SET_AGE", payload: number | null }
    | { type: "SET_COUNT_PLAYERS", payload: number[] }
    | { type: "RESET_FILTER" }


export const reducerFilterFieldValues = (state: FilterBoardGames, action: ActionFilter): {
    [NF_FilterBoardGames.TYPE_BG]?: string[];
    [NF_FilterBoardGames.COUNT_PLAYERS_MIN_MAX]?: [number, number];
    [NF_FilterBoardGames.PLAYER_AGE]?: number | null;
    [NF_FilterBoardGames.GENRE_BG]?: string[];
    [NF_FilterBoardGames.NAME_BG]?: string;
    name: string
} => {
    switch (action.type) {
        case "SET_NAME":
            return {...state, name: action.payload}
        case "SET_GENRE":
            return {...state, genre: action.payload}
        case "SET_TYPE":
            return {...state, type: action.payload}
        case "SET_AGE":
            return {...state, age: action.payload}
        case "SET_COUNT_PLAYERS":
            return {...state, minPlayers: action.payload[0], maxPlayers: action.payload[1]}
        case "RESET_FILTER":
            return {}
    }
}