import {FormInstance} from "antd/es/form";
import {Checkbox, Flex, Form, Input} from "antd";
import React from "react";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

export const FieldsLogin = () => {
    return <>
        <Form.Item
            name="username"
            rules={[{required: true, message: 'Пожалуйста заполните логин'}]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Логин"/>
        </Form.Item>
        <Form.Item
            name="password"
            rules={[{required: true, message: 'Пожалуйста заполните пароль'}]}
            // extra={<div style={{textAlign: 'right'}}>Забыл пароль</div>}
        >
            <Input.Password
                prefix={<LockOutlined className="site-form-item-icon"/>}
                type="password"
                placeholder="Пароль"
            />

        </Form.Item>
        <Form.Item>
            <Flex gap="middle" align="flex-end">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Забыл пароль
                </a>
            </Flex>
        </Form.Item>
    </>
}