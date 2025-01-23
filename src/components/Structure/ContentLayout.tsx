import {Outlet} from "react-router";
import {Layout, theme} from "antd";

const {Content} = Layout;
export const ContentLayout = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();


    return <Content
        style={{
            padding: "1%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "initial"
        }}
    >
        <Outlet/>
    </Content>
}