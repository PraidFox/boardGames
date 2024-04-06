import {Tabs, TabsProps} from 'antd';
import React from "react";
import {FormRegistration} from "./FormRegistration/FormRegistration";
import {FormLogin} from "./FormLogin/FormLogin";
import {FormInstance} from "antd/es/form";
import {FormType} from "../../../tools/storages/const";

export const TabsFormAuthLogin = ({setFormType, setForm}: {
    setFormType: (formType: string) => void,
    setForm: (form: FormInstance) => void
}) => {

    const items: TabsProps['items'] = [
        {
            key: FormType.REGISTRATION,
            label: 'Регистрация',
            children: <FormRegistration nameForm={"ModalFormRegistration"} setForm={setForm}/>
        },
        {
            key: FormType.AUTH,
            label: 'Войти',
            children: <FormLogin nameForm={"ModalFormAuth"} setForm={setForm}/>,
        },
    ];


    return (
        <Tabs onTabClick={e => setFormType(e)} defaultActiveKey="registration" items={items}/>
    )
}


