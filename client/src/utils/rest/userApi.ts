import axios from "axios";

export class UserApi {
    static registrationUser(email: string, password: string) {
        return axios.post("http://radgalf.fvds.ru:8080/register", {email, password});
    }
}