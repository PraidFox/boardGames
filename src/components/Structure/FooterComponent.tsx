import React from "react";
import {Layout, theme} from "antd";

const {Footer} = Layout;
export const FooterComponent = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();


    return <Footer style={{textAlign: 'center', borderRadius: borderRadiusLG}}>
        Создано и создано... ©{new Date().getFullYear()} Created by RadFoxDV
    </Footer>
}