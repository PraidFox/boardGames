import {FieldsLogin} from "./FieldsLogin";
import {Button, Form, Row, Space} from "antd";
import React, {useEffect} from "react";
import {Login} from "../../../../tools/interfaces/formInterface";
import {useInfoUser} from "../../../../tools/hooks/useInfoUser";
import {FormInstance} from "antd/es/form";


export const FormLogin = ({nameForm, setForm, currentTab}: {
    nameForm: string,
    setForm: (form: FormInstance) => void,
    currentTab?: string
}) => {
    const {authUser} = useInfoUser()
    const [form] = Form.useForm();
    const onFinish = (values: Login) => {
        authUser(values.email, values.password, values.remember)
    };

    useEffect(() => {
        if (currentTab === nameForm) {
            setForm(form)
        }
    }, [form, setForm, currentTab, nameForm]);

    const onFinishFailed = (errorInfo: any) => {
        //console.log('Failed:', errorInfo);
    };


    return (<Form
        name={nameForm}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <FieldsLogin/>
    </Form>)
}
