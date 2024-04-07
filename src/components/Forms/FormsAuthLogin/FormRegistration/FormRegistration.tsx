import {FieldsRegistration} from "./FieldsRegistration";
import {Button, Form, Row, Space} from "antd";
import React, {useState} from "react";
import {AuthApi} from "../../../../tools/rest/AuthApi";
import {Registration} from "../../../../tools/interfaces/formInterface";
import {useMessage} from "../../../../tools/hooks/useMessage";
import {StorageSettingMessage} from "../../../../tools/storages/storageSettingMessage";

export const FormRegistration = ({onClose}: {
    onClose: () => void
}) => {
    const [form] = Form.useForm();
    //const [messageAlert, setMessageAlert] = useState<MessageInfoType>()
    const [loadings, setLoadings] = useState<boolean>(false);
    const {setSettingMessage} = useMessage()
    const onFinish = (values: Registration) => {
        setLoadings(true)
        AuthApi.registrationUser(values.email, values.password)
            .then(r => {
                //alert("Зарегистрирован")
                setLoadings(false)
            })
            .catch(r => {

                //Какие еще может бек вернуть ошибки?
                const errorDoubleName = r.response.data.errors.DuplicateUserName

                setSettingMessage({
                    ...StorageSettingMessage.registrationError,
                    content: errorDoubleName ? errorDoubleName : StorageSettingMessage.registrationError.content
                })
                //setMessageAlert({text: r.response.data.errors.DuplicateUserName, type: "error", width: "100%"})
                setLoadings(false)
            })
    };


    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
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
        <Row justify="end">
            <Space align="center">
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loadings}> Зарегистрироваться </Button>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="reset" onClick={onClose}>
                        Отмена
                    </Button>
                </Form.Item>
            </Space>
        </Row>
    </Form>)
}