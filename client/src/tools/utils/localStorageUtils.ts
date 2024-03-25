import {userLT} from "../interfaces/localStorageInterface";
import {UserInfo} from "../interfaces/otherInterface";

export class LocalStorageUtils {
    static getUserInfo = (): UserInfo => {
        const loggedIn = localStorage.getItem("loggedIn")
        const nickname = localStorage.getItem("nickname")

        return {
            loggedIn: loggedIn ? loggedIn === "true" : false,
            nickname: nickname ? nickname : null
        }
    }

    static getUserInfoFull = (): userLT => {
        const loggedIn = localStorage.getItem("loggedIn")
        const access = localStorage.getItem("access")
        const refresh = localStorage.getItem("refresh")

        return {
            loggedIn: loggedIn ? loggedIn === "true" : false,
            access: access ? access : undefined,
            refresh: refresh ? refresh : undefined
        }
    }


    static setUserInfo = (access: string, refresh: string) => {
        localStorage.setItem("loggedIn", "true")
        localStorage.setItem("access", access)
        localStorage.setItem("refresh", refresh)
        localStorage.setItem("entryTime", new Date().toString())
    }

    static setItemInfo = (key: string, value: string) => {
        localStorage.setItem(key, value)
    }

    static setTokenInfo = (accessToken: string, refreshToken: string) => {
        localStorage.setItem("access", accessToken)
        localStorage.setItem("refresh", refreshToken)
        localStorage.setItem("entryTime", new Date().toString())
    }
}
