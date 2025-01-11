import {OpenMenuKey, TokenInfoLS, UserInfoLS} from "../interfaces/localStorage.Interface.ts";
import {StorageKeys} from "../storages/StorageKeys.ts";

export abstract class LocalStorageUtils {
    static getUserInfo = (): UserInfoLS | null => {
        const userInfo = this.getItem(StorageKeys.USER_INFO)
        if (userInfo) {
            return JSON.parse(userInfo)
        } else {
            return null
        }
    }

    static setUserInfo = (userId: number, rememberUser: boolean = false) => {
        const userInfo: UserInfoLS = {
            id: userId,
            remember: rememberUser
        }
        this.setItem(StorageKeys.USER_INFO, JSON.stringify(userInfo))
    }

    static removeUserInfo = () => {
        this.removeItems([StorageKeys.USER_INFO])
    }

    static removeTokenInfo = () => {
        this.removeItems([StorageKeys.TOKEN_INFO])
    }

    static setTokenInfo = (accessToken: string, refreshToken: string, expiresIn: number) => {
        const tokenInfo: TokenInfoLS = {
            [StorageKeys.ACCESS_TOKEN]: accessToken,
            [StorageKeys.REFRESH_TOKEN]: refreshToken,
            [StorageKeys.ENTRY_TIME]: new Date().toString(),
            [StorageKeys.EXPIRES_IN]: expiresIn.toString()
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
