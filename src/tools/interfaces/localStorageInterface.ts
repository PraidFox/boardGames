import {LocalStorageKeys} from "../storages/localStorageKeys";

export interface TokenInfoLS {
    [LocalStorageKeys.ACCESS_TOKEN]: string
    [LocalStorageKeys.REFRESH_TOKEN]: string
    [LocalStorageKeys.ENTRY_TIME]: string
    [LocalStorageKeys.EXPIRES_IN]: string
}

export interface UserInfoLS {
    id: number
    remember: boolean
}

export interface OpenMenuKey {
    leftMenu: string[]
}