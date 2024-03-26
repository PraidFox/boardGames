import axios from "axios";
import {AuthApi} from "./AuthApi";
import {LocalStorageUtils} from "../utils/localStorageUtils";
import {TokenInfo} from "../interfaces/localStorageInterface";


export const axiosBG = axios.create({
    baseURL: 'http://94.125.48.107:8080',
    // timeout: 1000,
    headers: {'accept': "application/json", "Content-Type": 'application/json'}
});

export const axiosBGauth = axios.create({
    baseURL: 'http://94.125.48.107:8080',
    headers: {'accept': "application/json", "Content-Type": 'application/json'}
});


axiosBGauth.interceptors.request.use(async function (config) {
    const {accessToken, refreshToken, entryTime, expiresIn}: TokenInfo = LocalStorageUtils.getTokenInfo()
   

    if (accessToken) {
        const entryTimeDate = new Date(entryTime!).getTime();
        const currentTimeDate = new Date().getTime()

        if (currentTimeDate - entryTimeDate > Number(expiresIn)) {
            const newToken = await AuthApi.refreshToken(refreshToken!)
            config.headers["Authorization"] = `Bearer ${newToken.data.accessToken}`
        } else {
            config.headers["Authorization"] = `Bearer ${accessToken}`
        }
        return config;
    } else {
        console.log("Прервал запрос")
        return new Promise(function () {
        });
    }
}, function (error) {
    // Обработка ошибок перехватчика запроса
    console.log("А какая тут может быть ошибка?", error)
    return Promise.reject(error);
});

