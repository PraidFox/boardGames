import {Outlet} from "react-router-dom";
import React from "react";
import {Layout, theme} from "antd";
const {Content} = Layout;
export const ContentComponent = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return <Content
        style={{
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "initial"
        }}
    >
        <Outlet/>
    </Content>
}