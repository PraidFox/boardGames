import {axiosBdLocal, axiosBG, axiosBGauth} from "./AxiosDefault";

export class LocalBD {
    static getLocalBoardGame() {
        // return axios.get(`/api/BoardGame`, {params: {tt: "wqeqwe"}});
        return axiosBdLocal.get(`/`);
    }

    // static addBoardGame(data: CreateBoardGame) {
    //     return axiosBGauth.post(`/api/BoardGame`, {id: 0, ...data});
    // }
    //
    // static updateBoardGame(id: string, name: string) {
    //     return axiosBGauth.put(`/api/BoardGame/${id}`, {id, name});
    // }
    //
    // static deleteBoardGame(id: number) {
    //     return axiosBGauth.delete(`/api/BoardGame/${id}`,);
    // }
}