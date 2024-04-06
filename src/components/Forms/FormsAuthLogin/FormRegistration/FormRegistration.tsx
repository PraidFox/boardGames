import {FieldsRegistration} from "./FieldsRegistration";
import {Form} from "antd";
import React, {useEffect, useState} from "react";
import {AuthApi} from "../../../../tools/rest/AuthApi";
import {Registration} from "../../../../tools/interfaces/formInterface";
import {MessageInfo} from "../../../UiElements/MessageInfo";
import {MessageInfoType} from "../../../../tools/interfaces/otherInterface";
import {FormInstance} from "antd/es/form";


export const FormRegistration = ({nameForm, setForm}: { nameForm: string, setForm: (form: FormInstance) => void }) => {
    const [form] = Form.useForm();
    const [messageAlert, setMessageAlert] = useState<MessageInfoType>()
    const [loadings, setLoadings] = useState<boolean>(false);

    const onFinish = (values: Registration) => {
        setLoadings(true)
        AuthApi.registrationUser(values.email, values.password)
            .then(r => {
                //alert("Зарегистрирован")
                setLoadings(false)
            })
            .catch(r => {
                setMessageAlert({text: r.response.data.errors.DuplicateUserName, type: "error", width: "100%"})
                setLoadings(false)
            })
    };

    useEffect(() => {
        setForm(form)
    }, [form, setForm]);
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (<Form
        name={nameForm}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        {messageAlert && <MessageInfo text={messageAlert.text} type={messageAlert.type} width={messageAlert.width}/>}
        <FieldsRegistration form={form}/>,
    </Form>)
}