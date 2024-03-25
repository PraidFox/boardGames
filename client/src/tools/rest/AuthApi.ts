import {axiosBG} from "./AxiosDefault";


export class AuthApi {
    // static loginUser(email: string, password: string) {
    //     return axios.post(AxiosDefault.baseUrl() + `/account/login?useCookies=true`, {email, password}, {withCredentials: true});
    // }

    static loginUser(email: string, password: string) {
        return axiosBG.post(`/account/login`, {email, password});
    }

    static registrationUser(email: string, password: string) {
        return axiosBG.post(`/account/register`, {email, password});
    }

    static refreshToken(refreshToken: string) {
        return axiosBG.post(`/account/refresh`, {refreshToken});
    }
}