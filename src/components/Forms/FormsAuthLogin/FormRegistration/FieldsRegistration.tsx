import {Checkbox, Form, Input, Radio} from "antd";
import React from "react";
import {FormInstance} from "antd/es/form";
import {LockOutlined, UserOutlined, MailOutlined} from "@ant-design/icons";

type FieldType = {
    userName?: string;
    password?: string;
    passwordRepeat?: string;
};
export const FieldsRegistration = ({form}: { form: FormInstance }) => {
    const validatePasswordRepeat = (_: any, value: string) => {
        if (form.getFieldValue("password") === value) {
            return Promise.resolve();
        } else {
            return Promise.reject('Пароли должны совпадать');
        }
    }

    const validatePasswordValue = (_: any, value: string) => {
        const errors = [];

        if (value && !/[a-z]/.test(value)) {
            errors.push('Должен содержать хотя бы одну строчную (a-z)!')
        }
        if (value && !/[A-Z]/.test(value)) {
            errors.push('Должен содержать хотя бы одну заглавную букву (A-Z)!')
        }
        if (value && !/\d/.test(value)) {
            errors.push('Должен содержать хотя бы одну цифру (0-9)!')
        }
        if (value && !/[^a-zA-Z0-9]/.test(value)) {
            errors.push('Должен содержать хотя бы один небуквенно-цифровой символ')
        }

        if (errors.length > 0) {
            return Promise.reject(errors.map(x => new Error(x)));
        } else {
            return Promise.resolve();
        }
    };

    return (<>
            <Form.Item<FieldType>
                name="userName"
                rules={[{required: true, message: 'Пожалуйста заполните логин'}]}
            >
                <Input prefix={<UserOutlined/>} placeholder="Логин"/>
            </Form.Item>

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

            <Form.Item<FieldType>
                name="password"
                rules={[
                    {required: true, message: 'Пожалуйста заполните пароль'},
                    {min: 6, message: 'Минимальная длина пароля 6 символов'},
                    {validator: validatePasswordValue},
                ]}
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

            <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Запомнить меня</Checkbox>
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