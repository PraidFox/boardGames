import React, {useState} from 'react';
import {Button, ConfigProvider, Layout} from 'antd';
import {LeftMenuTop} from "./components/UiElements/Menu/LeftMenuTop";
import {ContentComponent} from "./components/Structure/ContentComponent";
import {FooterComponent} from "./components/Structure/FooterComponent";
import "./style/global.css"
import {useErrorInfo} from "./tools/hooks/hooksContext/useErrorInfo";
import {viewError} from "./tools/utils/utilsTsx";
import {useMessage} from "./tools/hooks/hooksContext/useMessage";
import {FieldSearchByGames} from "./components/UiElements/Fields/FieldSearchByGames";
import {Logo} from "./components/UiElements/Logo";
import {configStyle} from "./tools/configStyle";
import {LeftMenuBottom} from "./components/UiElements/Menu/LeftMenuBottom";
import Overlay from "./components/UiElements/Overlays";
import {FloatButtonMy} from "./components/UiElements/Buttons/FloatButtonMy";
import {useInfoUser} from "./tools/hooks/hooksContext/useInfoUser";

const {Sider} = Layout;
//TODO хранить токен в HttpOnly и хочет ли пользователь что бы его помнили?
//TODO может дать урлу для модалок? Что бы можно было вызвать их по урлу из любого места. /любой вариант/editBoard

export const App = () => {
    const {nameError} = useErrorInfo()
    const {contextHolder} = useMessage()
    const [collapsedSider, setCollapsedSider] = useState<boolean>(false)

    const {logoutUser} = useInfoUser()

    return (
        <ConfigProvider
            theme={configStyle}
        >

            <Layout style={{minHeight: '100vh'}}>
                <Button onClick={logoutUser}> Выход </Button>
                <Layout>
                    <Sider collapsible onCollapse={(collapsed) => setCollapsedSider(collapsed)}>
                        {/*<Sider*/}
                        {/*    style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0}}*/}
                        {/*>*/}
                        <Logo type={collapsedSider ? "mini" : "full"}/>
                        <LeftMenuTop/>
                        <LeftMenuBottom collapsedSider={collapsedSider}/>
                    </Sider>
                    <Layout style={{padding: '1% 3%'}}>
                        <FieldSearchByGames/>
                        {contextHolder}
                        {nameError && viewError(nameError)}
                        <ContentComponent/>

                        <br/>
                        {/*<FooterComponent/>*/}
                    </Layout>

                </Layout>

            </Layout>

            <FloatButtonMy/>
            <Overlay/>
        </ConfigProvider>
    );
};

