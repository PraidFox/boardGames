import {Checkbox, Flex, Form, Input} from "antd";
import React, {useEffect, useState} from "react";
import {LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";

export const FieldsLogin = () => {
    const [email, setEmail] = useState<string | undefined>()
    const [password, setPassword] = useState<string | undefined>()
    const [loading, setLoading] = useState<boolean>(true)
    const [remember, setRemember] = useState<boolean>(false)

    useEffect(() => {
        const email = localStorage.getItem("email")
        const password = localStorage.getItem("password")
        const remember = localStorage.getItem("remember")

        if (email) {
            setEmail(email)
        }
        if (password) {
            setPassword(password)
        }
        if(remember){
            remember === "true" ? setRemember(true) : setRemember(false)
        }

        setLoading(false)
    }, []);


    return <>
        {loading ? <></> : <><Form.Item
            name="email"
            initialValue={email}
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
                initialValue={password}
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
                    <Form.Item name="remember" valuePropName="checked" initialValue={remember} noStyle>
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Забыл пароль
                    </a>
                </Flex>
            </Form.Item></>}

    </>
}