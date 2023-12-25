import React, {useState} from 'react';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, Menu, theme} from 'antd';
import {HeaderComponent} from "./HeaderComponent";
import {ButtonsAuth} from "./ButtonsAuth";

const {Content, Sider} = Layout;


const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);

export const MainScreen = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (


        <Layout>
            <HeaderComponent>
                <ButtonsAuth/>
            </HeaderComponent>


            <Layout>
                <Sider
                    style={{
                        // overflow: 'auto',
                        // height: '95vh',
                        // position: 'fixed',
                        // left: 0,
                        // top: 0,
                        // bottom: 0,
                        background: colorBgContainer
                    }}
                    collapsible width={200}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}
                        items={items2}
                    />
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <br/>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,

                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

