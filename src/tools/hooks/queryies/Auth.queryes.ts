import {useMutation} from "@tanstack/react-query";
import {AuthService} from "../../rest/services/Auth.service.ts";
import {queryClient} from "../../rest/query.config.ts";
import {LocalStorageUtils} from "../../utils/LocalStorageUtils.ts";
import {IAuth, IRegistration} from "../../interfaces/auth.interface.ts";

export const useAuth = () => {
    return useMutation({
        mutationKey: ["login"],
        mutationFn: async ({auth, rememberMe}: { auth: IAuth, rememberMe: boolean }) => {
            LocalStorageUtils.setRememberMe(rememberMe)
            const response = await AuthService.loginUser(auth);
            return response.data;
        },
        onSuccess: async (response) => {
            LocalStorageUtils.setTokenInfo(response)
            await queryClient.invalidateQueries({queryKey: ['getMe']});
        },
        onError: async () => {
            LocalStorageUtils.removeTokenInfo()
        }
    })
}


export const useLogout = () => {
    return useMutation({
        mutationKey: ["logout"],
        mutationFn: async () => {
            LocalStorageUtils.removeTokenInfo()
            LocalStorageUtils.removeRememberMe()
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['getMe']});
        }
    })
}

export const useRegistration = () => {
    return useMutation({
        mutationKey: ["registration"],
        mutationFn: async (registration: IRegistration) => {
            const response = await AuthService.registrationUser(registration);
            return response.data;
        },
    })
}
