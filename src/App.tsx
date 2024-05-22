import React from 'react';
import {Layout} from 'antd';
import {HeaderComponent} from "./components/Structure/HeaderComponent";
import {LeftMenu} from "./components/UiElements/Menu/LeftMenu";
import {ContentComponent} from "./components/Structure/ContentComponent";
import {FooterComponent} from "./components/Structure/FooterComponent";

import {AuthOrProfile} from "./components/UiElements/AuthOrProfile/AuthOrProfile";
import "./style/global.css"
import {useErrorInfo} from "./tools/hooks/hooksContext/useErrorInfo";
import {viewError} from "./tools/utils/utilsTsx";
import {useMessage} from "./tools/hooks/hooksContext/useMessage";

const {Sider} = Layout;
//TODO хранить токен в HttpOnly и хочет ли пользователь что бы его помнили?
//TODO может дать урлу для модалок? Что бы можно было вызвать их по урлу из любого места. /любой вариант/editBoard

export const App = () => {
    const {nameError} = useErrorInfo()
    const {contextHolder} = useMessage()


    return (
        <Layout style={{minHeight: '100vh'}}>
            <HeaderComponent>
                <AuthOrProfile/>
            </HeaderComponent>
            <Layout>
                <Sider collapsible>
                    <div style={{position: "sticky", top: 64}}>
                        <LeftMenu/>
                    </div>
                </Sider>
                <Layout style={{padding: '10px 10px'}}>
                    {contextHolder}
                    {nameError && viewError(nameError)}
                    <ContentComponent/>
                    <FooterComponent/>
                </Layout>
            </Layout>
        </Layout>

    );
};

