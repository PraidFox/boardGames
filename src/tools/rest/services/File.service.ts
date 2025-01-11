import {axiosBGFile} from "../axios.config.ts";


export class FileService {
    static uploadFile(data: any) {
        return axiosBGFile.post(`/api/File/upload`, data);
    }

    static getFile(fileId: string) {
        return `http://94.125.48.107:8080/api/File?id=${fileId}`
    }
}