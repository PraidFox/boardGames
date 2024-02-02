import axios from "axios";

export class UserApi {
    static loginUser(email: string, password: string) {
        // return axios.post("http://radgalf.fvds.ru:8080/login", {email, password},{params: 'ntrcn'});
        console.log({email, password})

        return axios.post("http://radgalf.fvds.ru:8080/login", {email, password});
    }
}