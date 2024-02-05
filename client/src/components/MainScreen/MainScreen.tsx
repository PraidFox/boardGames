import {UserOutlined, BookOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, Menu, theme} from 'antd';
import {HeaderComponent} from "./HeaderComponent";
import {ButtonsAuth} from "./ButtonsAuth";
import {MyCollectionGameContent} from "../Content/MyCollectionGameContent";
import React, {createContext, useEffect, useState} from 'react';
import {UserLogin} from "../../utils/interface/otherInterface";
import {ButtonsLogout} from "./ButtonsLogout";

const {Content, Sider, Footer, Header} = Layout;


const item = [{
    key: `boardGames`,
    icon: <BookOutlined/>,
    label: `Настолки`,
    children: [
        {
            key: "allBoardGames",
            label: `Все настолки`,
        },
        {
            key: "rating",
            label: `Рейтинг`,
        },
        {
            key: "newBoardGames",
            label: `Новинки`,
        }
    ]
}]



export const UserLoginContext = createContext<UserLogin>({
    loggedIn: false,
    setLoggedInAndStorage: (value) => {}
});


export const MainScreen = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    const [itemsMenu, setItemsMenu] = useState(item)

    useEffect(() => {
        let loggedIn = localStorage.getItem("loggedIn")
        if(loggedIn){
            loggedIn == "true" ? setLoggedIn(true) : setLoggedIn(false)
            setLoggedIn(loggedIn == "true")
        }
    }, []);

    const setLoggedInAndStorage = () => {
        if(loggedIn){
            localStorage.setItem("loggedIn", "false")
            setLoggedIn(false)
        } else {
            localStorage.setItem("loggedIn", "true")
            setLoggedIn(true)
        }
    }

    useEffect(() => {
        if(loggedIn){
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
            }, ...r ])
        } else {
            setItemsMenu(r => r.filter(x => x.key != "user"))
        }
    }, [loggedIn]);


    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <UserLoginContext.Provider value={{loggedIn, setLoggedInAndStorage}}>
            <Layout>
                <HeaderComponent>
                    {loggedIn ? <ButtonsLogout/> :  <ButtonsAuth/>}

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
                            <MyCollectionGameContent/>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            Создано и создано... ©{new Date().getFullYear()} Created by RedFoxDV
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        </UserLoginContext.Provider>

    );
};

