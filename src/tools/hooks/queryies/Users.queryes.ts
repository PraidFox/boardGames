import {useQuery} from "@tanstack/react-query";
import {UsersService} from "../../rest/services/Users.service.ts";
import {LocalStorageUtils} from "../../utils/LocalStorageUtils.ts";

export const useGetMe = () => {
    return useQuery({
        queryKey: ['getMe'],
        queryFn: async (meta) => {

            const tokenInfo = LocalStorageUtils.getTokenInfo()
            if (!tokenInfo) return Promise.resolve({data: undefined})

            try {
                return await UsersService.getMe(meta)
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                return Promise.resolve({data: undefined})
            }
        },
        select: (data) => {
            return data.data
        },
    })
}