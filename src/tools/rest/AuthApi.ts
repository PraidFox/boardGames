import {axiosBG} from "./AxiosDefault";


export class AuthApi {
    // static loginUser(email: string, password: string) {
    //     return axios.post(AxiosDefault.baseUrl() + `/account/login?useCookies=true`, {email, password}, {withCredentials: true});
    // }

    static loginUser(login: string, password: string) {
        return axiosBG.post(`/api/Account1/login`, {userName: login, password});
    }

    static registrationUser(email: string, password: string) {
        return axiosBG.post(`/api/Account1/register`, {email, password});
    }

    static refreshToken(refreshToken: string) {
        return axiosBG.post(`/account/refresh`, {refreshToken});
    }
}