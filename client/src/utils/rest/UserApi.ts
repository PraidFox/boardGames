import axios from "axios";
import {AxiosDefault} from "./AxiosDefault";

export class UserApi {
    static loginUser(email: string, password: string) {
        return axios.post(AxiosDefault.baseUrl() + `/account/login?useCookies=true`, {email, password}, {withCredentials: true});
    }

    static registrationUser(email: string, password: string) {
        return axios.post(AxiosDefault.baseUrl() + `/account/register`, {email, password});
    }
}