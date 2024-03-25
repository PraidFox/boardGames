import axios from "axios";
import {AuthApi} from "./AuthApi";
import {LocalStorageUtils} from "../utils/localStorageUtils";


export const axiosBG = axios.create({
    baseURL: 'http://94.125.48.107:8080',
    // timeout: 1000,
    headers: {'accept': "application/json", "Content-Type": 'application/json'}
});

export const axiosBGauth = axios.create({
    baseURL: 'http://94.125.48.107:8080',
    headers: {'accept': "application/json", "Content-Type": 'application/json'}
});


axiosBGauth.interceptors.request.use((response) => {
        console.log("Перед отправкой", response)
        return response;
    },
    async (error) => {
        const originalConfig = error.config;

        if (error.response) {
            if (error.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;

                let token = localStorage.getItem("access")
                if (token) {
                    AuthApi.refreshToken(localStorage.getItem("refresh")!).then(r => {
                            LocalStorageUtils.setTokenInfo(r.data.accessToken, r.data.refreshToken)
                            axiosBG.defaults.headers.common["Authorization"] = `Bearer ${token}`
                        }
                    )
                }
                return Promise.reject(error.response.data);
            }
        }
        return Promise.reject(error);
    })

