import React, {createContext, ReactNode, useLayoutEffect, useState} from "react";
import {AuthContext, UserInfo} from "../tools/interfaces/otherInterface";
import {LocalStorageUtils} from "../tools/utils/LocalStorageUtils";
import {AuthApi} from "../tools/rest/AuthApi";
import {useMessage} from "../tools/hooks/hooksContext/useMessage";
import {StorageSettingMessage} from "../tools/storages/storageSettingMessage";
import {UsersApi} from "../tools/rest/UsersApi";


export const UserLoginContext = createContext<AuthContext>({} as AuthContext);

export const UserLoginProvider = ({children}: {
    children: ReactNode
}) => {
    const [userInfo, setUserInfo] = useState<UserInfo | undefined>()
    const [rememberUser, setRememberUser] = useState<boolean>(false)
    const {setSettingMessage} = useMessage()


    useLayoutEffect(() => {
        console.log("userInfo", userInfo)
        if (!userInfo) {
            const userInfoLs = LocalStorageUtils.getUserInfo()

            UsersApi.getMe().then(res =>
                setUserInfo({
                    id: userInfoLs!.id,
                    nickname: res.data.userName,
                    email: res.data.email
                })
            )
        }
    }, [userInfo]);

    const authUser = async (login: string, password: string, remember: boolean): Promise<void> => {
        const r = await AuthApi.loginUser(login, password);
        LocalStorageUtils.setTokenInfo(r.data.accessToken, r.data.refreshToken, r.data.expiresIn);

        const user = await UsersApi.getMe()
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





