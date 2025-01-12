import {OpenMenuKey, TokenInfoLS} from "../interfaces/localStorage.Interface.ts";
import {StorageKeys} from "../storages/StorageKeys.ts";
import {TokenDto} from "../interfaces/DTO/user.dto.ts";

export abstract class LocalStorageUtils {

    //TODO в куки?
    static setRememberMe = (rememberMe: boolean) => {
        this.setItem(StorageKeys.REMEMBER_ME, rememberMe.toString())
    }

    static getRememberMe = () => {
        return this.getItem(StorageKeys.REMEMBER_ME)
    }

    static removeRememberMe = () => {
        this.removeItems([StorageKeys.REMEMBER_ME])
    }


    static removeTokenInfo = () => {
        this.removeItems([StorageKeys.TOKEN_INFO])
    }

    static setTokenInfo = (data: TokenDto) => {
        const tokenInfo: TokenInfoLS = {
            [StorageKeys.ACCESS_TOKEN]: data.accessToken,
            [StorageKeys.REFRESH_TOKEN]: data.refreshToken,
            [StorageKeys.ENTRY_TIME]: new Date().toString(),
            [StorageKeys.EXPIRES_IN]: data.expiresIn.toString()
        }

        this.setItem(StorageKeys.TOKEN_INFO, JSON.stringify(tokenInfo))
    }

    static getTokenInfo = (): TokenInfoLS | null => {
        const tokenInfo = this.getItem(StorageKeys.TOKEN_INFO)
        if (tokenInfo) {
            return JSON.parse(tokenInfo)
        } else {
            return null
        }
    }

    static setOpenMenu = (keys: string[], locationMenu: keyof OpenMenuKey) => {
        const openMenu = this.getOpenMenu()
        openMenu[locationMenu] = keys
        this.setItem(StorageKeys.OPEN_MENU, JSON.stringify(openMenu))
    }

    static getOpenMenu = (): OpenMenuKey => {
        return JSON.parse(this.getItem(StorageKeys.OPEN_MENU) || "{}")
    }

    private static getItem = (key: string): string | null => {
        return localStorage.getItem(key)
    }

    private static setItem = (key: string, value: string) => {
        localStorage.setItem(key, value)
    }

    private static removeItems = (keys: string[]) => {
        keys.forEach(key => localStorage.removeItem(key))
    }


}
