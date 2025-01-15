import {useEffect, useState} from 'react';
import {ConfigProvider, Layout} from 'antd';
import {LeftMenuTop} from "./components/UiElements/Menu/LeftMenuTop";
import {ContentComponent} from "./components/Structure/ContentComponent";
import "./style/global.css"
import {FieldSearchByGames} from "./components/UiElements/Fields/FieldSearchByGames";
import {Logo} from "./components/UiElements/Logo";
import {configStyle} from "./tools/configStyle";
import {LeftMenuBottom} from "./components/UiElements/Menu/LeftMenuBottom";
import Overlay from "./components/UiElements/Overlays";
import {FloatButtonMy} from "./components/UiElements/Buttons/FloatButtonMy";
import {GameRatingService} from "./tools/rest/services/GameRating.service.ts";

const {Sider} = Layout;
//TODO хранить токен в HttpOnly и хочет ли пользователь что бы его помнили?
//TODO может дать урлу для модалок? Что бы можно было вызвать их по урлу из любого места. /любой вариант/editBoard

export const App = () => {
    const [collapsedSider, setCollapsedSider] = useState<boolean>(false)


    useEffect(() => {
        GameRatingService.getRating(56964).then(r => console.log(r))
    }, []);

    return (
        <ConfigProvider
            theme={configStyle}
        >

            <Layout style={{minHeight: '100vh'}}>

                <Layout>
                    <Sider collapsible onCollapse={(collapsed) => setCollapsedSider(collapsed)}>
                        <Logo type={collapsedSider ? "mini" : "full"}/>
                        <LeftMenuTop/>
                        <LeftMenuBottom collapsedSider={collapsedSider}/>
                    </Sider>
                    <Layout style={{padding: '1% 3%'}}>
                        <FieldSearchByGames/>
                        <ContentComponent/>
                        <br/>
                    </Layout>

                </Layout>

            </Layout>

            <FloatButtonMy/>
            <Overlay/>
        </ConfigProvider>
    );
};

