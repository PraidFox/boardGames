import {FieldsRegistration} from "./FieldsRegistration";
import {Button, Form, Row, Space} from "antd";
import React, {useState} from "react";
import {UserApi} from "../../../../tools/rest/UserApi";
import {Registration} from "../../../../tools/interfaces/formInterface";
import {MessageInfo} from "../../../UiElements/MessageInfo";
import {MessageInfoType} from "../../../../tools/interfaces/otherInterface";


export const FormRegistration = ({onClose}: { onClose: () => void }) => {
    const [form] = Form.useForm();
    const [messageAlert, setMessageAlert] = useState<MessageInfoType>()
    const [loadings, setLoadings] = useState<boolean>(false);

    const onFinish = (values: Registration) => {
        setLoadings(true)
        UserApi.registrationUser(values.email, values.password)
            .then(r => {
                onCancel()
                alert("Зарегистрирован")
                setLoadings(false)
            })
            .catch(r => {
                setMessageAlert({text: r.response.data.errors.DuplicateUserName, type: "error", width: "100%"})
                setLoadings(false)
            })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onCancel = () => {
        onClose()
        setMessageAlert(undefined)
    }

    return (<Form
        name="formRegistration"
        labelCol={{span: 8}}
        form={form}
        style={{maxWidth: 600}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        {messageAlert && <MessageInfo text={messageAlert.text} type={messageAlert.type} width={messageAlert.width}/>}
        <FieldsRegistration form={form}/>,
        <Row justify="end">
            <Space align="center">
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loadings}> Зарегистрироваться </Button>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="reset" onClick={onCancel}>
                        Отмена
                    </Button>
                </Form.Item>
            </Space>
        </Row>
    </Form>)
}