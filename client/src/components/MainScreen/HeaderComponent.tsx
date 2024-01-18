import {Layout, Menu, MenuProps} from "antd";
import {ReactNode} from "react";



const {Header} = Layout;


const items1: MenuProps['items'] = ['Коллекция?', 'Статьи?', 'Игроки?'].map((key) => ({
    key,
    label: key,
}));


export const HeaderComponent = ({children} : {children: ReactNode}) => {
    return <Header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        // height: "90px"
    }}>
        <div className="demo-logo" style={{marginRight: "1%"}}>
            <span style={{color: 'white', flex: 1}}>На Стол Игры</span>
        </div>
        <Menu
            theme="dark"
            mode="horizontal"
            items={items1}
            style={{flex: 1, minWidth: 0}}
        />
        {children}
    </Header>
}