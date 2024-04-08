import {Layout, Menu, MenuProps} from "antd";
import React, {ReactNode, useLayoutEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {useInfoUser} from "../../tools/hooks/hooksContext/useInfoUser";
import {PathStorage} from "../../tools/storages/const";
import {HeaderMenu} from "../UiElements/HeaderMenu";


const {Header} = Layout;

export const HeaderComponent = ({children}: { children: ReactNode }) => {


    return <Header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    }}>
        <div style={{marginRight: "1%"}}>
            <NavLink to={"/"} style={{color: 'white', flex: 1}}>НаСтолИгры</NavLink>
        </div>
        <HeaderMenu/>

        {children}
    </Header>
}