import React, {createContext, useEffect, useState} from 'react';

import {HeaderComponent} from "./components/Structure/HeaderComponent";
import {LeftPanel} from "./components/Structure/LeftPanel";
import {ContentComponent} from "./components/Structure/ContentComponent";
import {FooterComponent} from "./components/Structure/FooterComponent";


import {ButtonsAuthModal} from "./components/UiElements/Buttons/ButtonsAuthModal";


import {UserContext} from "./tools/interfaces/otherInterface";
import {ButtonsLogout} from "./components/UiElements/Buttons/ButtonsLogout";

import {boardGame, user} from "./tools/storages/itemMenu";
import {localStorageUtils} from "./tools/utils/localStorageUtils";
import {userLT} from "./tools/interfaces/localStorageInterface";



import {Layout, MenuProps} from 'antd';
export const item: MenuProps['items'] = [boardGame]
export const UserLoginContext = createContext<UserContext>({
    loggedIn: false,
    setLoggedInAndStorage: (accessToken: string, refreshToken: string) => {
    },
    setLogout: () => {
    }
});
export const App = () => {
    const [userInfo, setUserInfo] = useState<userLT>({loggedIn: false})
    const [itemsMenu, setItemsMenu] = useState(item)

    useEffect(() => {
        const {loggedIn, access, refresh}: userLT = localStorageUtils.getUserInfo()
        setUserInfo({loggedIn, access, refresh})
    }, []);

    useEffect(() => {
        if (userInfo.loggedIn) {
            setItemsMenu(r => [user, ...r])
        } else {
            setItemsMenu(r => r.filter(x => x?.key != "user"))
        }
    }, [userInfo.loggedIn]);

    const setLoggedInAndStorage = (access: string, refresh: string) => {
        localStorageUtils.setUserInfo(access, refresh)
        setUserInfo({loggedIn: true, access, refresh})
    }
    const setLogout = () => {
        setUserInfo(r => ({...r, loggedIn: false}))
        localStorageUtils.setItemInfo("loggedIn", "false")
    }

    return (
        <UserLoginContext.Provider
            value={{loggedIn: userInfo.loggedIn, setLoggedInAndStorage, setLogout}}>
            <Layout>
                <HeaderComponent>
                    {userInfo.loggedIn ? <ButtonsLogout/> : <ButtonsAuthModal/>}
                </HeaderComponent>
                <Layout>
                    <LeftPanel itemsMenu={itemsMenu}></LeftPanel>
                    <Layout style={{padding: '10px 10px'}}>
                        <ContentComponent/>
                        <FooterComponent/>
                    </Layout>
                </Layout>
            </Layout>
        </UserLoginContext.Provider>
    );
};

