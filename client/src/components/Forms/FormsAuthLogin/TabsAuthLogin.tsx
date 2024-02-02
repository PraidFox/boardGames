import {Button, Form, Row, Space, Tabs, TabsProps} from 'antd';
import React, {useState} from "react";
import {FieldsRegistration} from "./FieldsRegistration";
import {FieldsLogin} from "./FieldsLogin";
import {UserApi} from "../../../utils/rest/UserApi";
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


