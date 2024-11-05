import {FieldsRegistration} from "./FieldsRegistration";
import {Form} from "antd";
import React, {useState} from "react";
import {AuthApi} from "../../../../tools/rest/AuthApi";
import {Registration} from "../../../../tools/interfaces/formInterface";
import {useMessage} from "../../../../tools/hooks/hooksContext/useMessage";
import {StorageSettingMessage} from "../../../../tools/storages/storageSettingMessage";
import {FormButtons} from "../../../UiElements/Buttons/FormButtons";

export const FormRegistration = ({onClose}: {
    onClose: () => void
}) => {
    const [form] = Form.useForm();
    //const [messageAlert, setMessageAlert] = useState<MessageInfoType>()
    const [loading, setLoading] = useState<boolean>(false);
    const {setSettingMessage} = useMessage()
    const onFinish = (values: Registration) => {
        setLoading(true)
        setSettingMessage(StorageSettingMessage.registrationLoading)
        AuthApi.registrationUser(values.email, values.userName, values.password)
            .then(r => {
                setSettingMessage(StorageSettingMessage.registrationAccess)
                setLoading(false)
            })
            .catch(r => {
                //Какие еще может бек вернуть ошибки?
                console.log("ошибка", r.response)

                setSettingMessage({
                    ...StorageSettingMessage.registrationError,
                    content: r.response.data.map((e: any) => e.description).join("\n"),
                })
                setLoading(false)

            })
    };


    const onFinishFailed = (errorInfo: any) => {

    };


    return (<Form
        name={"FormRegistration"}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        {/*{messageAlert && <MessageInfo text={messageAlert.text} type={messageAlert.type} width={messageAlert.width}/>}*/}
        <FieldsRegistration form={form}/>
        <FormButtons nameOk={"Зарегистрироваться"} handleCancel={onClose} loading={loading}/>

    </Form>)
}