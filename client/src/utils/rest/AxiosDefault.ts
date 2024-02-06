import axios from "axios";

axios.defaults.headers.common["accept"] = "application/json"
axios.defaults.headers.common["Content-Type"] = 'application/json'
axios.defaults.headers.common["Cross-Origin-Resource-Policy"] = 'none'
axios.defaults.withCredentials = true;
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = '*'


//PathParam - параметр в строковый запрос. `/rest/team-management/1/access/${issueId}`
//QueryParam - в объект params
export class AxiosDefault {
    static baseUrl():string {
            return "http://radgalf.fvds.ru:8080"
    }
}
