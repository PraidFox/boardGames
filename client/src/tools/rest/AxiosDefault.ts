import axios from "axios";
import {UserApi} from "./UserApi";
import {LocalStorageUtils} from "../utils/localStorageUtils";

axios.defaults.headers.common["accept"] = "application/json"
axios.defaults.headers.common["Content-Type"] = 'application/json'
// axios.defaults.headers.common["Cross-Origin-Resource-Policy"] = 'none'
axios.defaults.withCredentials = true;
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = '*'

let token = localStorage.getItem("access")
if (token) {
    const entryTime = new Date(localStorage.getItem("entryTime")!).getTime();
    const currentTime = new Date().getTime()

    if (currentTime - Number(entryTime) > 3600000) {
        UserApi.refreshToken(localStorage.getItem("refresh")!).then(r => {
                token = r.data.accessToken
                LocalStorageUtils.setTokenInfo(r.data.accessToken, r.data.refreshToken)
            }
        )
    }

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

//PathParam - параметр в строковый запрос. `/rest/team-management/1/access/${issueId}`
//QueryParam - в объект data
export class AxiosDefault {
    static baseUrl(): string {
        return "http://radgalf.fvds.ru:8080"
    }
}
