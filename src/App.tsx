import React from 'react';
import {Layout} from 'antd';
import {HeaderComponent} from "./components/Structure/HeaderComponent";
import {LeftMenu} from "./components/Structure/LeftMenu";
import {ContentComponent} from "./components/Structure/ContentComponent";
import {FooterComponent} from "./components/Structure/FooterComponent";

import {AuthOrProfile} from "./components/UiElements/AuthOrProfile/AuthOrProfile";
import "./style/global.css"
import {useErrorInfo} from "./tools/hooks/useErrorInfo";
import {checkError} from "./tools/utils/utilsTsx";
import {useMessage} from "./tools/hooks/useMessage";

const {Sider} = Layout;
//TODO хранить токен в HttpOnly и хочет ли пользователь что бы его помнили?


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
                    <LeftMenu/>
                </Sider>
                <Layout style={{padding: '10px 10px'}}>
                    {contextHolder}
                    {nameError && checkError(nameError)}
                    <ContentComponent/>
                    <FooterComponent/>
                </Layout>
            </Layout>
        </Layout>

    );
};

