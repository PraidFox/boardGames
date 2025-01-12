import {axiosBGFile} from "../axios.config.ts";


export class FileService {
    static async uploadFile(data: any) {
        return await axiosBGFile.post(`/api/File/upload`, data);
    }

    static async uploadFileInBG(data: any, bgId: string) {
        return await axiosBGFile.post(`/api/File/upload/${bgId}`, data);
    }

    static async getFile(fileId: string) {
        return await axiosBGFile.get(`api/File?id=${fileId}`);
    }
}