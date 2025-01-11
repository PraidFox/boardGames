import {useMutation} from "@tanstack/react-query";
import {StorageKeys} from "../../storages/StorageKeys.ts";
import {AuthService} from "../../rest/services/Auth.service.ts";
import {queryClient} from "../../rest/query.config.ts";

export const useAuth = () => {
    return useMutation({
        mutationKey: ["login"],
        mutationFn: async ({auth, rememberMe}: { auth: IAuth, rememberMe: boolean }) => {
            localStorage.setItem(StorageKeys.REMEMBER_ME, rememberMe.toString())
            const response = await AuthService.loginUser(auth);
            return response.data;
        },
        onSuccess: async (response) => {
            localStorage.setItem(StorageKeys.ACCESS_TOKEN, response.token);
            localStorage.setItem(StorageKeys.EXPIRED_TOKEN, response.expire.toString());
            await queryClient.invalidateQueries({queryKey: ['getMe']});
        },
        onError: async () => {
            clearTokenInfo()
        }
    })
}


export const useLogout = () => {
    //const navigate = useNavigate();

    return useMutation({
        mutationKey: ["logout"],
        mutationFn: async () => {
            await AuthService.logoutUser();
        },
        onSuccess: async () => {
            clearTokenInfo()
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
