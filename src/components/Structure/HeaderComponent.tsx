import {Layout} from "antd";
import React, {ReactNode} from "react";


const {Header} = Layout;

export const HeaderComponent = ({children}: { children: ReactNode }) => {
    return <Header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    }}>
        {children}
    </Header>
}