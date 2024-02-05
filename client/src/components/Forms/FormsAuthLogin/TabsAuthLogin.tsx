import {Tabs, TabsProps} from 'antd';
import React from "react";
import {FormRegistration} from "./FormRegistration";
import {FormLoginModal} from "./FormLoginModal";




export const TabsAuthLogin = ({onClose}: { onClose: () => void }) => {

    const items: TabsProps['items'] = [
        {
            key: 'registration',
            label: 'Регистрация',
            children: <FormRegistration onClose={onClose}/>
        },
        {
            key: 'login',
            label: 'Войти',
            children: <FormLoginModal onClose={onClose}/>,
        },
    ];


    return (
        <Tabs defaultActiveKey="1" items={items}/>
    )
}


