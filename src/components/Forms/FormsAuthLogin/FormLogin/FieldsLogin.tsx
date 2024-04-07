import {Checkbox, Flex, Form, Input} from "antd";
import React from "react";
import {LockOutlined, MailOutlined} from "@ant-design/icons";

export const FieldsLogin = () => {
    return (
        <>
            <Form.Item
                name="email"
                rules={[
                    {
                        type: 'email',
                        message: 'Формат почты не верен',
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

                    <span className="login-form-forgot">
                        Забыл пароль
                    </span>
                </Flex>
            </Form.Item>
        </>
    )
}