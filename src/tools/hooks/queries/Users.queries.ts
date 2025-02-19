import {keepPreviousData, skipToken, useMutation, useQuery} from "@tanstack/react-query";
import {UsersService} from "../../rest/services/Users.service.ts";
import {LocalStorageUtils} from "../../utils/LocalStorageUtils.ts";
import {queryClient} from "../../rest/query.config.ts";
import {FilterUsersDTO} from "../../interfaces/DTO/user.dto.ts";

export const useGetMe = () => {
    return useQuery({
        queryKey: ['getMe'],
        queryFn: async (meta) => {

            const tokenInfo = LocalStorageUtils.getTokenInfo()
            if (!tokenInfo) return Promise.resolve(null)

            return await UsersService.getMe(meta)
        }
    })
}

export const useGetUser = (userName?: string) => {
    return useQuery({
        queryKey: ['getUser', userName],
        queryFn: userName? async (meta) => {
            return await UsersService.getUser(userName, meta)
        } : skipToken
    })
}

export const useGetUserRoles = (userName?: string | null) => {
    return useQuery({
        queryKey: ['getRolesUser', userName],
        queryFn: userName ? (meta) => {
            return UsersService.getUserRoles(userName, meta)
        } : skipToken
    })
}


export const useGetFilterUsers = (filter: FilterUsersDTO) => {
    return useQuery({
        queryKey: ['getAllUsers', filter.userNameSearch, filter.page, filter.pageSize],
        queryFn: async (meta) => {
            return await UsersService.getFilterUsers(filter, meta)
        },
        placeholderData: keepPreviousData
    })
}

export const useRecordRoleToUser = () => {
    return useMutation({
        mutationKey: ["recordRoleToUser"],
        mutationFn: async ({roles, userName}:{roles: string[], userName: string}) => {
            return UsersService.recordRoleToUser(roles, userName);
        },
        onSuccess: async (_, {userName}) => {
            await queryClient.invalidateQueries({queryKey: ['getRolesUser', userName]});
        }
    })
}

