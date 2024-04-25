import React, {createContext, ReactNode, useLayoutEffect, useState} from "react";
import {AuthContext, UserInfo} from "../tools/interfaces/otherInterface";
import {LocalStorageUtils} from "../tools/utils/LocalStorageUtils";
import {AuthApi} from "../tools/rest/AuthApi";
import {useMessage} from "../tools/hooks/hooksContext/useMessage";
import {StorageSettingMessage} from "../tools/storages/storageSettingMessage";
import {LocalStorageKeys} from "../tools/storages/localStorageKeys";

export const UserLoginContext = createContext<AuthContext>({} as AuthContext);

export const UserLoginProvider = ({children}: {
    children: ReactNode
}) => {
    const [userInfo, setUserInfo] = useState<UserInfo | undefined>()
    const [rememberUser, setRememberUser] = useState<boolean>(false)
    const {setSettingMessage} = useMessage()

    console.log(userInfo)

    useLayoutEffect(() => {
        if (!userInfo) {
            const userInfoLs = LocalStorageUtils.getUserInfo()
            if (userInfoLs && userInfoLs.id !== 0) {
                //Поход в БД и взять инфу по id пользователю. (Ник и должен ли он быть залогинен) а пока заглушка
                setUserInfo({
                    id: userInfoLs.id,
                    nickname: "Какой-то ник",
                    email: "Логин@почта"
                })
            } else {
                alert('А пользователя по такому id нет, разработчик ты чего-то напутал')
            }
        }
    }, []);

    const authUser = async (email: string, password: string, remember: boolean): Promise<void> => {
        const r = await AuthApi.loginUser(email, password);
        setUserInfo({id: 1, nickname: email, email: email});
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





