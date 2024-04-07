import {Layout, Menu, MenuProps} from "antd";
import React, {ReactNode, useLayoutEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {useInfoUser} from "../../tools/hooks/useInfoUser";


const {Header} = Layout;

export const HeaderComponent = ({children}: { children: ReactNode }) => {
    const [menuItems, setMenuItems] = useState<MenuProps['items']>()
    const {loggedIn} = useInfoUser()


    useLayoutEffect(() => {
        // let menuName = ['Коллекция?', 'Статьи?', 'Игроки?']
        let menuName = [
            {nameRu: 'Коллекция', nameEn: 'collection'},
            {nameRu: 'Статьи', nameEn: 'articles'},
            {nameRu: 'Игроки', nameEn: 'players'},
            {nameRu: "VK", nameEn: "VK"}
        ]
        if (loggedIn) {
            //Еще проверяем на админа
            menuName.push({nameRu: 'Админ', nameEn: 'projectSetting'})
        }
        setMenuItems(menuName.map((obj) => ({
            key: obj.nameEn,
            label: <NavLink to={obj.nameEn}>{obj.nameRu}</NavLink>,
        })))
    }, [loggedIn]);


    return <Header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        // height: "90px"
    }}>
        <div className="demo-logo" style={{marginRight: "1%"}}>
            <NavLink to={"/"} style={{color: 'white', flex: 1}}>НаСтолИгры</NavLink>
        </div>
        <Menu
            theme="dark"
            mode="horizontal"
            items={menuItems}
            style={{flex: 1, minWidth: 0}}
        />

        {children}
    </Header>
}