import React, {createContext, useEffect, useState} from 'react';
import {Flex, Layout} from 'antd';

import {HeaderComponent} from "./components/Structure/HeaderComponent";
import {LeftPanel} from "./components/Structure/LeftPanel";
import {ContentComponent} from "./components/Structure/ContentComponent";
import {FooterComponent} from "./components/Structure/FooterComponent";
import {ButtonsLogout} from "./components/UiElements/ButtonsLogout";
import {UserContext} from "./tools/interfaces/otherInterface";
import {boardGame, user} from "./tools/storages/itemMenu";
import {LocalStorageUtils} from "./tools/utils/localStorageUtils";
import {userLT} from "./tools/interfaces/localStorageInterface";
import {PopoverAnt} from "./components/UiElements/PopoverAnt";
import {FormLoginPopover} from "./components/Forms/FormsAuthLogin/FormLogin/FormLoginPopover";
import {ModalAnt} from "./components/UiElements/ModalAnt";
import {TabsFormAuthLogin} from "./components/Forms/FormsAuthLogin/TabsFormAuthLogin";

export const UserLoginContext = createContext<UserContext>({
    loggedIn: false,
    setLoggedInAndStorage: (accessToken: string, refreshToken: string) => {
        console.log(accessToken, refreshToken)
    },
    setLogout: () => {
    }
});
export const App = () => {
    const [userInfo, setUserInfo] = useState<userLT>({loggedIn: false})
    const [itemsMenu, setItemsMenu] = useState([boardGame])

    useEffect(() => {
        const {loggedIn, access, refresh}: userLT = LocalStorageUtils.getUserInfo()
        setUserInfo({loggedIn, access, refresh})
    }, []);

    useEffect(() => {
        if (userInfo.loggedIn) {
            setItemsMenu(r => [user, ...r])
        } else {
            setItemsMenu(r => r.filter(x => x?.key !== "user"))
        }
    }, [userInfo.loggedIn]);

    const setLoggedInAndStorage = (access: string, refresh: string) => {
        LocalStorageUtils.setUserInfo(access, refresh)
        setUserInfo({loggedIn: true, access, refresh})
    }
    const setLogout = () => {
        setUserInfo(r => ({...r, loggedIn: false}))
        LocalStorageUtils.setItemInfo("loggedIn", "false")
    }

    return (
        <UserLoginContext.Provider
            value={{loggedIn: userInfo.loggedIn, setLoggedInAndStorage, setLogout}}>
            <Layout>
                <HeaderComponent>
                    {userInfo.loggedIn ?
                        <ButtonsLogout/> :
                        <Flex gap="small" wrap="wrap">
                            <PopoverAnt component={<FormLoginPopover/>} title={"Данные для входа"}
                                        buttonName={"Войти"}/>
                            <ModalAnt>
                                {(onClose) => <TabsFormAuthLogin onClose={onClose}/>}
                            </ModalAnt>
                        </Flex>}
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

