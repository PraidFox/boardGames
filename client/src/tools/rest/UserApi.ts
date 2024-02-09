import axios from "axios";
import {AxiosDefault} from "./AxiosDefault";

export class UserApi {
    // static loginUser(email: string, password: string) {
    //     return axios.post(AxiosDefault.baseUrl() + `/account/login?useCookies=true`, {email, password}, {withCredentials: true});
    // }

    static loginUser(email: string, password: string) {
        return axios.post(AxiosDefault.baseUrl() + `/account/login`, {email, password});
    }

    static registrationUser(email: string, password: string) {
        return axios.post(AxiosDefault.baseUrl() + `/account/register`, {email, password});
    }

    static refreshToken(refreshToken: string) {
        return axios.post(AxiosDefault.baseUrl() + `/account/refresh`, {refreshToken});
    }
}