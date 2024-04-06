import {FieldsLogin} from "./FieldsLogin";
import {Button, Form, Row, Space} from "antd";
import React, {useEffect} from "react";
import {Login} from "../../../../tools/interfaces/formInterface";
import {useInfoUser} from "../../../../tools/hooks/useInfoUser";
import {FormInstance} from "antd/es/form";


export const FormLogin = ({nameForm, onClose}: {
    nameForm: string
    onClose: () => void
}) => {
    const {authUser} = useInfoUser()
    const onFinish = (values: Login) => {
        authUser(values.email, values.password, values.remember)
    };

    const onFinishFailed = (errorInfo: any) => {
        //console.log('Failed:', errorInfo);
    };
    const onCancel = () => {
        //form.resetFields()
        onClose()
    }

    return (<Form
        name={nameForm}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <FieldsLogin/>

        <Row justify="end">
            <Space align="center">
                <Form.Item>
                    <Button type="primary" htmlType="submit"> Войти
                    </Button>
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
