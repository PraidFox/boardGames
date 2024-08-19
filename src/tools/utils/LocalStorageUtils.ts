import {OpenMenuKey, TokenInfoLS, UserInfoLS} from "../interfaces/localStorageInterface";
import {LocalStorageKeys} from "../storages/localStorageKeys";

export abstract class LocalStorageUtils {
    private static getItem = (key: string): string | null => {
        return localStorage.getItem(key)
    }
    private static setItem = (key: string, value: string) => {
        localStorage.setItem(key, value)
    }
    private static removeItems = (keys: string[]) => {
        keys.forEach(key => localStorage.removeItem(key))
    }
    static getUserInfo = (): UserInfoLS | null => {
        const userInfo = this.getItem(LocalStorageKeys.USER_INFO)
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
        this.setItem(LocalStorageKeys.USER_INFO, JSON.stringify(userInfo))
    }

    static removeUserInfo = () => {
        this.removeItems([LocalStorageKeys.USER_INFO])
    }
    static removeTokenInfo = () => {
        this.removeItems([LocalStorageKeys.TOKEN_INFO])
    }

    static setTokenInfo = (accessToken: string, refreshToken: string, expiresIn: number) => {
        const tokenInfo: TokenInfoLS = {
            [LocalStorageKeys.ACCESS_TOKEN]: accessToken,
            [LocalStorageKeys.REFRESH_TOKEN]: refreshToken,
            [LocalStorageKeys.ENTRY_TIME]: new Date().toString(),
            [LocalStorageKeys.EXPIRES_IN]: expiresIn.toString()
        }

        this.setItem(LocalStorageKeys.TOKEN_INFO, JSON.stringify(tokenInfo))
    }
    static getTokenInfo = (): TokenInfoLS | null => {
        const tokenInfo = this.getItem(LocalStorageKeys.TOKEN_INFO)
        if (tokenInfo) {
            return JSON.parse(tokenInfo)
        } else {
            return null
        }
    }

    static setOpenMenu = (keys: string[], locationMenu: keyof OpenMenuKey) => {
        let openMenu = this.getOpenMenu()
        openMenu[locationMenu] = keys
        this.setItem(LocalStorageKeys.OPEN_MENU, JSON.stringify(openMenu))
    }

    static getOpenMenu = (): OpenMenuKey => {
        return JSON.parse(this.getItem(LocalStorageKeys.OPEN_MENU) || "{}")
    }
}
