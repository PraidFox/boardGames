import {OpenMenuKey, TokenInfoLS} from "../interfaces/localStorageInterface";

export class LocalStorageUtils {
    private static getItem = (key: string): string | null => {
        return localStorage.getItem(key)
    }
    private static setItem = (key: string, value: string) => {
        localStorage.setItem(key, value)
    }
    static getUserInfo = (): string | null => {
        return this.getItem("idUser")
    }
    static setUserInfo = (idUser: number) => {
        return this.setItem("idUser", idUser.toString())
    }

    static setTokenInfo = (accessToken: string, refreshToken: string, expiresIn: number) => {
        this.setItem("accessToken", accessToken)
        this.setItem("refreshToken", refreshToken)
        this.setItem("entryTime", new Date().toString())
        this.setItem("expiresIn", expiresIn.toString())
    }
    static getTokenInfo = (): TokenInfoLS => {
        return {
            accessToken: this.getItem("accessToken"),
            refreshToken: this.getItem("refreshToken"),
            entryTime: this.getItem("entryTime"),
            expiresIn: this.getItem("expiresIn")
        }
    }

    static setOpenMenu = (keys: string[], locationMenu: keyof OpenMenuKey) => {
        let openMenu = this.getOpenMenu()
        openMenu[locationMenu] = keys
        this.setItem("openMenu", JSON.stringify(openMenu))
    }

    static getOpenMenu = (): OpenMenuKey => {
        return JSON.parse(this.getItem("openMenu") || "{}")
    }
}
