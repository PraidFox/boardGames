import React from "react";
import {Layout} from "antd";
const {Footer} = Layout;
export const FooterComponent = () => {
    return <Footer style={{textAlign: 'center'}}>
        Создано и создано... ©{new Date().getFullYear()} Created by RadFoxDV
    </Footer>
}