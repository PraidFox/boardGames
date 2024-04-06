import {UserInfo} from "../interfaces/otherInterface";
import {TokenInfo} from "../interfaces/localStorageInterface";


export class LocalStorageUtils {
    static getUserInfo = (): UserInfo => {
        const loggedIn = localStorage.getItem("loggedIn")
        const nickname = localStorage.getItem("nickname")

        return {
            loggedIn: loggedIn ? loggedIn === "true" : false,
            nickname: nickname ? nickname : null
        }
    }
    
    static setTokenInfo = (accessToken: string, refreshToken: string, expiresIn: number) => {
        localStorage.setItem("accessToken", accessToken)
        localStorage.setItem("refreshToken", refreshToken)
        localStorage.setItem("entryTime", new Date().toString())
        localStorage.setItem("expiresIn", expiresIn.toString())
    }

    static getTokenInfo = (): TokenInfo => {
        return {
            accessToken: localStorage.getItem("accessToken"),
            refreshToken: localStorage.getItem("refreshToken"),
            entryTime: localStorage.getItem("entryTime"),
            expiresIn: localStorage.getItem("expiresIn")
        }
    }
}
