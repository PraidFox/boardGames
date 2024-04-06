import React, {createContext, ReactNode, useLayoutEffect, useState} from "react";
import {AuthContext, UserInfo} from "../tools/interfaces/otherInterface";
import {LocalStorageUtils} from "../tools/utils/localStorageUtils";
import {AuthApi} from "../tools/rest/AuthApi";

export const UserLoginContext = createContext<AuthContext>({
    loggedIn: false,
    nickname: null,
    authUser: () => {
    },
    logoutUser: () => {
    }
});

export const UserLoginProvider = ({children}: {
    children: ReactNode
}) => {
    const [userInfo, setUserInfo] = useState<UserInfo>({loggedIn: false, nickname: null})

    useLayoutEffect(() => {
        const {loggedIn, nickname}: UserInfo = LocalStorageUtils.getUserInfo()
        setUserInfo({loggedIn, nickname})
    }, []);

    const authUser = (email: string, password: string) => {
        AuthApi.loginUser(email, password)
            .then(r => {
                    setUserInfo({loggedIn: true, nickname: email})
                    LocalStorageUtils.setTokenInfo(r.data.accessToken, r.data.refreshToken, r.data.expiresIn)
                }
            )
            .catch(() => alert("Логин или пароль введены не верно. Или вы пытаетесь кого-то взломать"))
    }

    const logoutUser = () => {
        setUserInfo(r => ({...r, loggedIn: false}))
    }


    return <UserLoginContext.Provider
        value={{loggedIn: userInfo.loggedIn, nickname: userInfo.nickname, authUser, logoutUser}}>
        {children}
    </UserLoginContext.Provider>

}





