import {UserOutlined, BookOutlined} from '@ant-design/icons';
import {Layout, Menu, theme} from 'antd';
import {HeaderComponent} from "./HeaderComponent";
import {ButtonsAuth} from "./ButtonsAuth";
import {NavLink, Outlet} from "react-router-dom";
import React, {createContext, useEffect, useState} from 'react';
import {UserLogin} from "../../utils/interface/otherInterface";
import {ButtonsLogout} from "./ButtonsLogout";

const {Content, Sider, Footer} = Layout;


const item = [{
    key: `boardGames`,
    icon: <BookOutlined/>,
    label: `Настолки`,
    children: [
        {
            key: "allBoardGames",
            label: <NavLink to="/allBoardGames">Все настолки</NavLink>,
        },
        {
            key: "rating",
            label: <NavLink to="/rating">Рейтинг</NavLink>,
        },
        {
            key: "newBoardGames",
            label: `Новинки`,
        }
    ]
}]


export const UserLoginContext = createContext<UserLogin>({
    loggedIn: false,
    setLoggedInAndStorage: (accessToken: string, refreshToken: string) => {},
    setLogout: () => {}
});


export const MainScreen = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    const [accessToken, setAccessToken] = useState<string>("")
    const [refreshToken, setRefreshToken] = useState<string>("")
    const [itemsMenu, setItemsMenu] = useState(item)

    useEffect(() => {
        const loggedIn = localStorage.getItem("loggedIn")
        const access = localStorage.getItem("access")
        const refresh = localStorage.getItem("refresh")

        if (loggedIn) {
            loggedIn == "true" ? setLoggedIn(true) : setLoggedIn(false)
            setLoggedIn(loggedIn == "true")
        }

        if (access) {
            setAccessToken(access)
        }

        if (refresh) {
            setRefreshToken(refresh)
        }
    }, []);

    const setLoggedInAndStorage = (access: string, refresh: string) => {
        localStorage.setItem("loggedIn", "true")
        localStorage.setItem("access", access)
        localStorage.setItem("refresh", refresh)

        setLoggedIn(true)
        setAccessToken(access)
        setRefreshToken(refresh)
    }


    const setLogout = () => {
        setLoggedIn(false)
        localStorage.setItem("loggedIn", "false")
    }


    useEffect(() => {
        if (loggedIn) {
            setItemsMenu(r => [{
                key: `user`,
                icon: <UserOutlined/>,
                label: `Профиль`,
                children: [
                    {
                        key: "myCollections",
                        label: `Моя коллекция`,
                    },
                    {
                        key: "myFriends",
                        label: `Друзья`,
                    },
                    {
                        key: "setting",
                        label: `Настройки`,
                    }
                ]
            }, ...r])
        } else {
            setItemsMenu(r => r.filter(x => x.key != "user"))
        }
    }, [loggedIn]);


    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <UserLoginContext.Provider
            value={{loggedIn, setLoggedInAndStorage, setLogout, accessToken, refreshToken}}>
            <Layout>
                <HeaderComponent>
                    {loggedIn ? <ButtonsLogout/> : <ButtonsAuth/>}

                </HeaderComponent>
                <Layout>
                    <Sider
                        style={{overflow: 'auto', height: '93vh', position: 'sticky', top: 64}}
                        collapsible
                    >
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultOpenKeys={['user']}
                            items={itemsMenu}
                        />

                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <br/>
                        <Content
                            style={{
                                padding: 24,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                                overflow: "initial"
                            }}
                        >
                            <Outlet/>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            Создано и создано... ©{new Date().getFullYear()} Created by RadFoxDV
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        </UserLoginContext.Provider>

    );
};

