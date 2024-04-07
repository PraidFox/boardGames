import React, {createContext, ReactNode, useLayoutEffect, useState} from "react";
import {AuthContext, UserInfo} from "../tools/interfaces/otherInterface";
import {LocalStorageUtils} from "../tools/utils/localStorageUtils";
import {AuthApi} from "../tools/rest/AuthApi";
import {useMessage} from "../tools/hooks/useMessage";
import {StorageSettingMessage} from "../tools/storages/storageSettingMessage";

export const UserLoginContext = createContext<AuthContext>({} as AuthContext);

export const UserLoginProvider = ({children}: {
    children: ReactNode
}) => {
    const [userInfo, setUserInfo] = useState<UserInfo | undefined>()
    const {setSettingMessage} = useMessage()

    useLayoutEffect(() => {
        //Поход в БД и взять инфу по id пользователю. (Ник и должен ли он быть залогинен)
        const idUser = LocalStorageUtils.getUserInfo()

        if (idUser && Number(idUser) !== 0) {
            setUserInfo({id: 1, loggedIn: true, nickname: idUser})
        }
    }, []);

    const authUser = (email: string, password: string, remember: boolean): Promise<void> => {
        return AuthApi.loginUser(email, password)
            .then(r => {
                    setUserInfo({loggedIn: true, nickname: email, id: 1})
                    LocalStorageUtils.setTokenInfo(r.data.accessToken, r.data.refreshToken, r.data.expiresIn)
                    //И сохранить в куках запомнить пользователя или нет
                    LocalStorageUtils.setUserInfo(1)
                }
            )
    }
    const logoutUser = () => {
        //И отправка в бек, что пользователь вышел

        setSettingMessage(StorageSettingMessage.loggedOut)
        LocalStorageUtils.setUserInfo(0)
        setUserInfo(r => undefined)
    }

    return <UserLoginContext.Provider
        value={{...userInfo, authUser, logoutUser}}>
        {children}
    </UserLoginContext.Provider>
}





