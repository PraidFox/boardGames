import {FieldsRegistration} from "./FieldsRegistration";
import {Button, Form, Row, Space} from "antd";
import React from "react";
import {UserApi} from "../../../utils/rest/UserApi";
import {Registration} from "../../../utils/interface/formInterface";

const onFinish = (values: Registration) => {
    UserApi.registrationUser(values.email, values.password).then(r => alert(r.data.message))
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
export const FormRegistration = ({onClose}: { onClose: () => void }) => {
    const [form] = Form.useForm();

    return (<Form
        name="formRegistration"
        labelCol={{span: 8}}
        form={form}
        style={{maxWidth: 600}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <FieldsRegistration form={form}/>,
        <Row justify="end">
            <Space align="center">
                <Form.Item>
                    <Button type="primary" htmlType="submit"> Зарегистрироваться </Button>
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