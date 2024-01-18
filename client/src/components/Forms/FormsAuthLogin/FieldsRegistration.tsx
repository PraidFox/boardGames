import {Form, Input, Radio} from "antd";
import React from "react";
import {FormInstance} from "antd/es/form";
import {LockOutlined, UserOutlined, MailOutlined} from "@ant-design/icons";

type FieldType = {
    username?: string;
    password?: string;
    passwordRepeat?: string;
};
export const FieldsRegistration = ({form} : {form: FormInstance}) => {
    const validatePasswordRepeat = (_: any, value: string) => {
        if(form.getFieldValue("password") === value) {
            return Promise.resolve();
        } else {
            return Promise.reject('Пароли должны совпадать');
        }
    }

    return (<>
            <Form.Item<FieldType>
                name="username"
                rules={[{required: true, message: 'Пожалуйста заполните логин'}]}
            >
                <Input prefix={<UserOutlined/>} placeholder="Логин"/>
            </Form.Item>

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

            <Form.Item<FieldType>
                name="password"
                rules={[{required: true, message: 'Пожалуйста заполните пароль'}]}
            >
                <Input.Password
                    prefix={<LockOutlined/>}
                    type="password"
                    placeholder="Пароль"
                />
            </Form.Item>

            <Form.Item<FieldType>
                name="passwordRepeat"
                rules={[{required: true, message: 'Пожалуйста повторите пароль'},
                    {validator: validatePasswordRepeat}]}
            >
                <Input.Password
                    prefix={<LockOutlined/>}
                    type="password"
                    placeholder="Повторить пароль"
                />
            </Form.Item>

            <Form.Item name="typeUser" wrapperCol={{offset: 8, span: 16}} initialValue={"user"}>
                <Radio.Group>
                    <Radio value={"user"}>Игрок</Radio>
                    <Radio value={"company"} disabled={true}>Компания</Radio>
                </Radio.Group>
            </Form.Item>
        </>
    )
}