import React, {createContext, ReactNode, useEffect, useLayoutEffect, useState} from "react";
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
            // .then(r => setLoggedInAndStorage(r.data.accessToken, r.data.refreshToken))
            // .catch(() => alert("Логин или пароль введены не верно. Или вы пытаетесь кого-то взломать"))
            .then(r => console.log(r.data))
    }

    const logoutUser = () => {
        console.log("logoutUser")
        //LocalStorageUtils.setUserInfo(access, refresh)
        //setUserInfo({loggedIn: true})
    }


    return <UserLoginContext.Provider
        value={{loggedIn: userInfo.loggedIn, nickname: userInfo.nickname, authUser, logoutUser}}>
        {children}
    </UserLoginContext.Provider>

}





