import {Tabs, TabsProps} from 'antd';
import React from "react";
import {FormRegistration} from "./FormRegistration/FormRegistration";
import {FormLogin} from "./FormLogin/FormLogin";
import {FormType} from "../../../tools/storages/const";

export const TabsFormAuthLogin = ({onClose}: {
    onClose: () => void
}) => {


    const items: TabsProps['items'] = [
        {
            key: FormType.REGISTRATION,
            label: 'Регистрация',
            children: <FormRegistration onClose={onClose}/>
        },
        {
            key: FormType.AUTH,
            label: 'Войти',
            children: <FormLogin nameForm={"modalAuth"} onClose={onClose}/>,
        },
    ];


    return (
        <Tabs defaultActiveKey="registration" items={items}/>
    )
}


