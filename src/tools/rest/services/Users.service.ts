import {axiosBG} from "../axios.config.ts";
import {UserDto} from "../../interfaces/DTO/user.dto.ts";
import {queryOptions, skipToken} from "@tanstack/react-query";


export class UsersService {
    static async getUser(userName: string, {signal}: { signal?: AbortSignal }): Promise<UserDto> {
        const {data} = await axiosBG.get(`/api/Users/${userName}`, {signal});
        return data
    }

    static async getMe({signal}: { signal?: AbortSignal }): Promise<UserDto> {
        const {data} = await axiosBG.get(`/api/Users/GetMe`, {signal});
        return data
    }

    static async getAllUsers({signal}: { signal?: AbortSignal }): Promise<UserDto[]> {
        const {data} = await axiosBG.get(`/api/Users`, {signal});
        return data
    }

    static async getUserRoles(userName: string, {signal}: { signal?: AbortSignal }): Promise<string[]> {
        const {data} = await axiosBG.get(`/api/users/${userName}/roles`, {signal});
        return data
    }

    static addRoleToUser(role: string, userName: string) {
        return axiosBG.put(`/api/users/${userName}/roles/AddRole`, role);
    }

    static removeRoleFromUser(role: string, userName: string) {
        return axiosBG.put(`/api/users/${userName}/roles/RemoveRole`, role);
    }

    static recordRoleToUser(roles: string[], userName: string) {
        return axiosBG.put(`/api/users/${userName}/roles/AssignRoles`, roles);
    }
}

export const UserServiceFN = {
    getUser:async (userName: string, {signal}: { signal?: AbortSignal }) => {
        const {data} = await axiosBG.get(`/api/Users/${userName}`, {signal});
        return data
    },

    getUserQO: (userName?: string) => {
        return queryOptions({
            queryKey: ['getUser', userName],
            queryFn: userName? async (meta) => {
                return await UsersService.getUser(userName, meta)
            } : skipToken
        })
    }
}
