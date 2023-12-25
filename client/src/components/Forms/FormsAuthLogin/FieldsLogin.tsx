import {FormInstance} from "antd/es/form";
import {Form, Input} from "antd";
import React from "react";

export const FieldsLogin = () => {
    return <>
        <Form.Item
            label="Логин"
            name="username"
            rules={[{required: true, message: 'Пожалуйста заполните логин'}]}
        >
            <Input/>
        </Form.Item>

        <Form.Item
            label="Пароль"
            name="password"
            rules={[{required: true, message: 'Пожалуйста заполните пароль'}]}
            extra={<i>Забыли данные для входа? Мы вам поможем.</i>}
        >
            <Input.Password/>
        </Form.Item>


        </>
}