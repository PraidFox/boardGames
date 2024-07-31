import axios from "axios";
import {AuthApi} from "./AuthApi";
import {LocalStorageUtils} from "../utils/LocalStorageUtils";
import {TokenInfoLS} from "../interfaces/localStorageInterface";
import {MyError} from "../storages/const";


const defaultSettingAxios = {
    baseURL: process.env.REACT_APP_URL,
    headers: {'accept': "application/json", "Content-Type": 'application/json'}
}

const FileSettingAxios = {
    baseURL: process.env.REACT_APP_URL,
    headers: {'Content-Type': 'multipart/form-data'}
}

export const axiosBG = axios.create(defaultSettingAxios);
export const axiosBGauth = axios.create(defaultSettingAxios);
export const axiosBGauthFile = axios.create(FileSettingAxios);

const requestHandler = async (config: any) => {
    const tokenInfo = LocalStorageUtils.getTokenInfo();
    const remember = LocalStorageUtils.getUserInfo()?.remember;

    if (tokenInfo) {
        const {accessToken, refreshToken, expiresIn, entryTime}: TokenInfoLS = tokenInfo;

        const currentTimeDate = new Date().getTime();
        const expiresInDate = Number(expiresIn) * 600;
        const entryTimeDate = new Date(entryTime).getTime();

        if (currentTimeDate > entryTimeDate + expiresInDate) {
            if (remember) {
                const newToken = await AuthApi.refreshToken(refreshToken!);
                config.headers["Authorization"] = `Bearer ${newToken.data.accessToken}`;
            } else {
                alert(MyError.NEED_AUTHORIZATION)
                //throw new Error(MyError.NEED_AUTHORIZATION);
            }
        } else {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    } else {
        return new Promise(function () {
        });
    }
};

const errorHandler = (error: any) => {
    console.log("А какая тут может быть ошибка?", error);
    return Promise.reject(error);
};


axiosBGauth.interceptors.request.use(requestHandler, errorHandler);
axiosBGauthFile.interceptors.request.use(requestHandler, errorHandler);

