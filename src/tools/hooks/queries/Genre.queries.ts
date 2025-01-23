import {useMutation, useQuery} from "@tanstack/react-query";
import {GenreService} from "../../rest/services/Genre.service.ts";
import {queryClient} from "../../rest/query.config.ts";

export const useGetGenres = () => {
    return useQuery({
        queryKey: ['getGenres'],
        queryFn: (meta) => {
            return GenreService.getGenres(meta)
        },
    });
}

export const useAddGenre = () => {
   return useMutation({
       mutationKey: ["addGenre"],
       mutationFn: async (genre: string) => {
           return GenreService.addGenre(genre);
       },
       onSuccess: async () => {
           await queryClient.invalidateQueries({queryKey: ['getGenres']});
       }
   })
}

export const useDeleteGenre = () => {
    return useMutation({
        mutationKey: ["deleteGenre"],
        mutationFn: async (id: string) => {
            return GenreService.deleteGenre(id);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['getGenres']});
        }
    })
}
