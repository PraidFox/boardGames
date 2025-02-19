import axios, {AxiosError, AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig} from "axios";
import {StorageKeys} from "../storages/StorageKeys.ts";
import {LocalStorageUtils} from "../utils/LocalStorageUtils.ts";
import {AuthService} from "./services/Auth.service.ts";

export type PAR<T> = Promise<AxiosResponse<T>>;

const defaultSettingAxios: CreateAxiosDefaults = {
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {'accept': "application/json", "Content-Type": 'application/json'},
    withCredentials: true,
    paramsSerializer: {
        indexes: null
    }
}

const FileSettingAxios: CreateAxiosDefaults = {
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {'Content-Type': 'multipart/form-data'},
    withCredentials: true
}


export const axiosBG = axios.create(defaultSettingAxios);
export const axiosBGFile = axios.create(FileSettingAxios);
export const axiosRefresh = axios.create(defaultSettingAxios);

axiosBG.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        // Add auth token if available
        const tokenInfo = LocalStorageUtils.getTokenInfo();
        if (tokenInfo && config.headers) {

            config.headers.Authorization = `Bearer ${tokenInfo[StorageKeys.ACCESS_TOKEN]}`;
        }
        return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
        return Promise.reject(error);
    }
);


interface ErrorResponse {
    message: string;
    code: string;
}

/**
 * Перехватчик ответов
 * - Handles response data transformation
 * - Manages authentication errors
 * - Standardizes error handling
 */
axiosBG.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
        return response;
    },
    async (error: AxiosError<ErrorResponse>) => {
        const originalRequest = error.config;

        const tokenInfo = LocalStorageUtils.getTokenInfo();
        const rememberMe = LocalStorageUtils.getRememberMe();

        if (error.response?.status === 401 && originalRequest) {

            if (rememberMe && tokenInfo) {
                const {refreshToken} = tokenInfo

                try {
                    const response = await AuthService.refreshToken(refreshToken)
                    LocalStorageUtils.setTokenInfo(response.data)
                    originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
                    return axiosBG(originalRequest);
                } catch (refreshError) {
                    LocalStorageUtils.removeTokenInfo()
                    LocalStorageUtils.removeRememberMe()
                    return Promise.reject(refreshError);
                }

            } else {
                LocalStorageUtils.removeTokenInfo()
                LocalStorageUtils.removeRememberMe()
                return Promise.reject(error);
            }
        } else {
            return Promise.reject(error);
        }

    }
);


// axiosBG.interceptors.request.use(requestHandler, errorHandler);
// axiosBGFile.interceptors.request.use(requestHandler, errorHandler);

