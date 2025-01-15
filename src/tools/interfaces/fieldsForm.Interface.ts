import {NF_Auth, NF_FilterBoardGames, NF_Registration} from "../storages/FieldName.storage.ts";

export interface IFieldLogin {
    [NF_Auth.LOGIN]: string
    [NF_Auth.PASSWORD]: string
    [NF_Auth.REMEMBER_ME]: boolean
}

export interface IFieldRegistration {
    [NF_Registration.USER_NAME]: string
    [NF_Registration.EMAIL]: string
    [NF_Registration.PASSWORD]: string
    [NF_Registration.REMEMBER_ME]: boolean
    [NF_Registration.PASSWORD_REPEAT]: string
    [NF_Registration.USER_TYPE]: string

}

export interface FilterBoardGames {
    [NF_FilterBoardGames.NAME_BG]?: string
    [NF_FilterBoardGames.GENRE_BG]?: number[]
    [NF_FilterBoardGames.TYPE_BG]?: number[]
    [NF_FilterBoardGames.PLAYER_AGE]?: number | null
    [NF_FilterBoardGames.COUNT_PLAYERS_MIN_MAX]?: [number, number]
}
