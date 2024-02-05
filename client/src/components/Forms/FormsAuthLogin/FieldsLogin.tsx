import {Checkbox, Flex, Form, Input} from "antd";
import React from "react";
import {LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";

export const FieldsLogin = () => {
    return <>
        <Form.Item
            name="email"
            rules={[
                {
                    type: 'email',
                    message: 'Ввели неверную почту',
                },
                {
                    required: true,
                    message: 'Пожалуйста заполните E-mail',
                },
            ]}
        >
            <Input
                prefix={<MailOutlined/>}
                placeholder="E-mail"
            />
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
                <Form.Item name="remember" valuePropName="checked" initialValue={false} noStyle>
                    <Checkbox >Запомнить меня</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Забыл пароль
                </a>
            </Flex>
        </Form.Item>
    </>
}