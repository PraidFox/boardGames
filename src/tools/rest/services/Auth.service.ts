import {axiosBG, axiosRefresh, PAR} from "../axios.config.ts";
import {TokenDto} from "../../interfaces/DTO/user.dto.ts";
import {IAuth, IRegistration} from "../../interfaces/auth.interface.ts";


export class AuthService {
    static async loginUser(data: IAuth): PAR<TokenDto> {
        return await axiosBG.post(`/api/Account1/login`, data);
    }

    static async registrationUser(data: IRegistration): PAR<void> {
        return await axiosBG.post(`/api/Account1/register`, data);
    }

    static async refreshToken(refreshToken: string): PAR<TokenDto> {
        return await axiosRefresh.post(`/api/account/refresh`, {refreshToken});
    }
}