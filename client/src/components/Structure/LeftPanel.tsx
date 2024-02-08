import {Layout, Menu, MenuProps} from "antd";
import React from "react";
const {Sider} = Layout;

export const LeftPanel = ({itemsMenu}: {itemsMenu: MenuProps['items']}) => {
    return <Sider
        style={{overflow: 'auto', height: '93vh', position: 'sticky', top: 64}}
        collapsible
    >
        <Menu
            theme="dark"
            mode="inline"
            defaultOpenKeys={['user']}
            items={itemsMenu}
        />

    </Sider>
}