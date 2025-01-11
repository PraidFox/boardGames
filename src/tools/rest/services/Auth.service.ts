import {axiosBG} from "../axios.config.ts";


export class AuthService {
    static loginUser(login: string, password: string) {
        return axiosBG.post(`/api/Account1/login`, {userName: login, password});
    }

    static registrationUser(email: string, userName: string, password: string) {
        return axiosBG.post(`/api/Account1/register`, {email, password, userName});
    }

    static refreshToken(refreshToken: string) {

        return axiosBG.post(`/api/account/refresh`, {refreshToken});
    }
}