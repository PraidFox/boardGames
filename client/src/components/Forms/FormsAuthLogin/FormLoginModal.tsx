import {FieldsLogin} from "./FieldsLogin";
import {Button, Form, Row, Space} from "antd";
import React from "react";
import {UserApi} from "../../../utils/rest/UserApi";
import {Login} from "../../../utils/interface/formInterface";

const onFinish = (values: Login) => {
    UserApi.loginUser(values.userName, values.password)
        .then(r => console.log("Сохранить что залогинился"))
        .catch(r => alert("Логин или пароль введены не верно. Или вы пытаетесь кого-то взломать"))
};

const onFinishFailed = (errorInfo: any) => {
    //console.log('Failed:', errorInfo);
};
export const FormLoginModal = ({onClose}: { onClose: () => void }) => {

    return (<Form
        name="formLogin"
        labelCol={{span: 8}}
        style={{maxWidth: 600}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <FieldsLogin/>
        <Row justify="end">
            <Space align="center">
                <Form.Item>
                    <Button type="primary" htmlType="submit" > Войти
                    </Button>
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
