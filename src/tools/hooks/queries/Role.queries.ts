import {RoleService} from "../../rest/services/Role.service.ts";
import {useMutation, useQuery} from "@tanstack/react-query";
import {queryClient} from "../../rest/query.config.ts";

export const useGetRoles = () => {
    return useQuery({
        queryKey: ['getRoles'],
        queryFn: (meta) => {
            return RoleService.getRoles(meta)
        }
    })
}

export const useAddRole = () => {
    return useMutation({
        mutationKey: ["addRole"],
        mutationFn: async (name: string) => {
            return RoleService.addRole(name);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['getRoles']});
        }
    })
}

export const useDeleteRole = () => {
    return useMutation({
        mutationKey: ["deleteRole"],
        mutationFn: async (id: string) => {
            return RoleService.deleteRole(id);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['getTypes']});
        }
    })
}

