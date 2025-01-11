import {createContext, ReactNode, useLayoutEffect, useState} from "react";
import {AuthContext, UserInfo} from "../tools/interfaces/other.Interface.ts";
import {LocalStorageUtils} from "../tools/utils/LocalStorageUtils";
import {AuthService} from "../tools/rest/services/Auth.service.ts";
import {useMessage} from "../tools/hooks/hooksContext/useMessage";
import {StorageSettingMessage} from "../tools/storages/storageSettingMessage";
import {UsersService} from "../tools/rest/services/Users.service.ts";


export const UserLoginContext = createContext<AuthContext>({} as AuthContext);

export const UserLoginProvider = ({children}: {
    children: ReactNode
}) => {
    const [userInfo, setUserInfo] = useState<UserInfo | undefined>()
    const [rememberUser, setRememberUser] = useState<boolean>(false)
    const {setSettingMessage} = useMessage()


    useLayoutEffect(() => {

        if (!userInfo) {
            UsersService.getMe().then(res =>
                setUserInfo({
                    id: 13212,
                    nickname: res.data.userName,
                    email: res.data.email
                })
            ).catch(() => logoutUser())
        }
    }, [userInfo]);

    const authUser = async (login: string, password: string, remember: boolean): Promise<void> => {
        const r = await AuthService.loginUser(login, password);
        console.log("r.data", r.data)
        LocalStorageUtils.setTokenInfo(r.data.accessToken, r.data.refreshToken, r.data.expiresIn);

        const user = await UsersService.getMe()
        setUserInfo({id: 1, nickname: user.data.userName, email: user.data.email});
        LocalStorageUtils.setUserInfo(1, remember);
    }

    const logoutUser = () => {
        LocalStorageUtils.removeTokenInfo()
        LocalStorageUtils.removeUserInfo()

        setSettingMessage(StorageSettingMessage.loggedOut)
        setUserInfo(r => undefined)
        setRememberUser(false)
    }

    return <UserLoginContext.Provider
        value={{...userInfo, authUser, logoutUser, rememberUser}}>
        {children}
    </UserLoginContext.Provider>
}





