import axios from "axios";
import {AuthService} from "./services/Auth.service.ts";
import {LocalStorageUtils} from "../utils/LocalStorageUtils";
import {TokenInfoLS} from "../interfaces/localStorage.Interface.ts";
import {MyError} from "../storages/const";


const defaultSettingAxios = {
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {'accept': "application/json", "Content-Type": 'application/json'},
    withCredentials: true,
}

const FileSettingAxios = {
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {'Content-Type': 'multipart/form-data'}
}

//export const axiosBG = axios.create(defaultSettingAxios);
export const axiosBG = axios.create(defaultSettingAxios);
export const axiosBGFile = axios.create(FileSettingAxios);

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
                AuthService.refreshToken(refreshToken!)
                    .then(res => {
                            LocalStorageUtils.setTokenInfo(res.data.accessToken, res.data.refreshToken, res.data.expiresIn);
                            config.headers["Authorization"] = `Bearer ${res.data.accessToken}`
                        }
                    )
                    .catch(() => {
                        LocalStorageUtils.removeTokenInfo()
                        LocalStorageUtils.removeUserInfo()
                        alert(MyError.NEED_AUTHORIZATION)
                    })
            } else {
                LocalStorageUtils.removeTokenInfo()
                LocalStorageUtils.removeUserInfo()
                alert(MyError.NEED_AUTHORIZATION)
            }
        } else {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    } else {
        console.log("need auth", config)
        //Разобраться что здесь возвращать
        return config
    }
};


const errorHandler = (error: any) => {
    return Promise.reject(error);
};

axiosBG.interceptors.request.use(requestHandler, errorHandler);
axiosBG.interceptors.request.use(requestHandler, errorHandler);
axiosBGFile.interceptors.request.use(requestHandler, errorHandler);

