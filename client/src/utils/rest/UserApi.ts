import axios from "axios";
import {AxiosDefault} from "./AxiosDefault";

export class UserApi {
    static loginUser(email: string, password: string) {
        return axios.post(AxiosDefault.baseUrl() + `/login?useCookies=true`, {email, password});
        // return axios.post(AxiosDefault.baseUrl() + `/login`, {email, password});
    }


}