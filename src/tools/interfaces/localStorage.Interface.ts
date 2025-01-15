import {StorageKeys} from "../storages/StorageKeys.ts";

export interface TokenInfoLS {
    [StorageKeys.ACCESS_TOKEN]: string
    [StorageKeys.REFRESH_TOKEN]: string
    [StorageKeys.ENTRY_TIME]: string
    [StorageKeys.EXPIRES_IN]: string
}

export interface OpenMenuKey {
    leftMenu: string[]
}