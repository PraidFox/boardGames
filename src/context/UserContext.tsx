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
        if (!userInfo) {
            UsersApi.getMe().then(r => console.log("getMe", r.data))
            const userInfoLs = LocalStorageUtils.getUserInfo()
            if (userInfoLs && userInfoLs.id !== 0) {
                //Поход в БД и взять инфу по id пользователю. (Ник и должен ли он быть залогинен) а пока заглушка
                setUserInfo({
                    id: userInfoLs.id,
                    nickname: "Какой-то ник",
                    email: "Логин@почта"
                })
            }
        }
    }, []);

    const authUser = async (login: string, password: string, remember: boolean): Promise<void> => {
        const r = await AuthApi.loginUser(login, password);
        setUserInfo({id: 1, nickname: "Какой-то ник", email: "Какой-то почта"});
        LocalStorageUtils.setTokenInfo(r.data.accessToken, r.data.refreshToken, r.data.expiresIn);
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





