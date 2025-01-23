import {useMutation, useQuery} from "@tanstack/react-query";
import {TypeService} from "../../rest/services/Type.service.ts";
import {queryClient} from "../../rest/query.config.ts";

export const useGetTypes = () => {
    return useQuery({
        queryKey: ['getTypes'],
        queryFn: (meta) => {
            return TypeService.getTypes(meta)
        },
        
    });
}

export const useAddType = () => {
    return useMutation({
        mutationKey: ["addType"],
        mutationFn: async (name: string) => {
            return TypeService.addType(name);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['getTypes']});
        }
    })
}

export const useDeleteType = () => {
    return useMutation({
        mutationKey: ["deleteType"],
        mutationFn: async (id: string) => {
            return TypeService.deleteType(id);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['getTypes']});
        }
    })
}

