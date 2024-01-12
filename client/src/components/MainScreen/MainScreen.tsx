import {UserOutlined, BookOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, Menu, theme} from 'antd';
import {HeaderComponent} from "./HeaderComponent";
import {ButtonsAuth} from "./ButtonsAuth";
import {MyCollectionGameContent} from "../Content/MyCollectionGameContent";

const {Content, Sider} = Layout;

const items2: MenuProps['items'] = [
    {
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
    },
    {
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
    }
]


export const MainScreen = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (

        <Layout>
            <HeaderComponent>
                <ButtonsAuth/>
            </HeaderComponent>
            <Layout>
                <Sider
                    // style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
                    collapsible
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0, background: "#f5f5f5"}}
                        items={items2}
                    />

                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <br/>
                    <Content
                        style={{
                            padding: 24,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <MyCollectionGameContent/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>


    );
};

