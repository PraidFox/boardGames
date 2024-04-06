import {Tabs, TabsProps} from 'antd';
import React, {useEffect, useState} from "react";
import {FormRegistration} from "./FormRegistration/FormRegistration";
import {FormLogin} from "./FormLogin/FormLogin";
import {FormInstance} from "antd/es/form";
import {FormType} from "../../../tools/storages/const";

export const TabsFormAuthLogin = ({setFormType, setForm}: {
    setFormType: (formType: string) => void,
    setForm: (form: FormInstance) => void
}) => {
    const [currentTab, setCurrentTab] = useState<string>(FormType.REGISTRATION)


    useEffect(() => {
        setFormType(currentTab)
    }, [currentTab]);

    const items: TabsProps['items'] = [
        {
            key: FormType.REGISTRATION,
            label: 'Регистрация',
            children: <FormRegistration nameForm={FormType.REGISTRATION} setForm={setForm} currentTab={currentTab}/>
        },
        {
            key: FormType.AUTH,
            label: 'Войти',
            children: <FormLogin nameForm={FormType.AUTH} setForm={setForm} currentTab={currentTab}/>,
        },
    ];


    return (
        <Tabs onTabClick={e => setCurrentTab(e)} defaultActiveKey="registration" items={items}/>
    )
}


