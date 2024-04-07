import {TokenInfoLS} from "../interfaces/localStorageInterface";

export class LocalStorageUtils {
    static getUserInfo = (): string | null => {
        return localStorage.getItem("idUser")
    }
    static setUserInfo = (idUser: number) => {
        return localStorage.setItem("idUser", idUser.toString())
    }

    static setTokenInfo = (accessToken: string, refreshToken: string, expiresIn: number) => {
        localStorage.setItem("accessToken", accessToken)
        localStorage.setItem("refreshToken", refreshToken)
        localStorage.setItem("entryTime", new Date().toString())
        localStorage.setItem("expiresIn", expiresIn.toString())
    }
    static getTokenInfo = (): TokenInfoLS => {
        return {
            accessToken: localStorage.getItem("accessToken"),
            refreshToken: localStorage.getItem("refreshToken"),
            entryTime: localStorage.getItem("entryTime"),
            expiresIn: localStorage.getItem("expiresIn")
        }
    }
}
