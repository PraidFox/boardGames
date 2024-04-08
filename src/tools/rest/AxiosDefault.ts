import axios from "axios";
import {AuthApi} from "./AuthApi";
import {LocalStorageUtils} from "../utils/LocalStorageUtils";
import {TokenInfoLS} from "../interfaces/localStorageInterface";
import {MyError} from "../storages/const";

const defaultSettingAxios = {
    baseURL: 'http://94.125.48.107:8080',
    headers: {'accept': "application/json", "Content-Type": 'application/json'}
}
export const axiosBG = axios.create(defaultSettingAxios);

export const axiosBGauth = axios.create(defaultSettingAxios);

export const axiosBdLocal = axios.create({
    ...defaultSettingAxios,
    baseURL: 'http://localhost:4000/',
});


axiosBGauth.interceptors.request.use(async function (config) {
    const {accessToken, refreshToken, entryTime, expiresIn}: TokenInfoLS = LocalStorageUtils.getTokenInfo()
    //const {remember} = useInfoUser()

    //Доставать с бека? Или... нужно изучить данный вопрос
    const remember = true
    //throw new Error(MyError.NEED_AUTHORIZATION);

    if (accessToken) {
        const entryTimeDate = new Date(entryTime!).getTime();
        const currentTimeDate = new Date().getTime()

        if (currentTimeDate - entryTimeDate > Number(expiresIn)) {
            if (remember) {
                const newToken = await AuthApi.refreshToken(refreshToken!)
                config.headers["Authorization"] = `Bearer ${newToken.data.accessToken}`
            } else {
                throw new Error(MyError.NEED_AUTHORIZATION);
            }
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

