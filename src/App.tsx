import React from 'react';
import {Layout} from 'antd';
import {HeaderComponent} from "./components/Structure/HeaderComponent";
import {LeftMenu} from "./components/Structure/LeftMenu";
import {ContentComponent} from "./components/Structure/ContentComponent";
import {FooterComponent} from "./components/Structure/FooterComponent";
import {UserLoginProvider} from "./context/UserContext";
import {AuthOrProfile} from "./components/UiElements/AuthOrProfile/AuthOrProfile";
import "./style/global.css"

const {Sider} = Layout;

export const App = () => {
    //TODO ВЫНЕСТИ ХРАНЕНИЕ ИНФОРМАЦИИ ЗАЛОГИНЕН ПОЛЬЗОВАТЕЛЬ ИЛИ НЕТ или шифровать
    return (
        <UserLoginProvider>
            <Layout style={{minHeight: '100vh'}}>
                <HeaderComponent>
                    <AuthOrProfile/>
                </HeaderComponent>
                <Layout>
                    <Sider collapsible>
                        <LeftMenu/>
                    </Sider>
                    <Layout style={{padding: '10px 10px'}}>
                        <ContentComponent/>
                        <FooterComponent/>
                    </Layout>
                </Layout>
            </Layout>
        </UserLoginProvider>
    );
};

