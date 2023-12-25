import {Form, Input, Radio} from "antd";
import React from "react";
import {FormInstance} from "antd/es/form";

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
                label="Логин"
                name="username"
                rules={[{required: true, message: 'Пожалуйста заполните логин'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
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
                <Input/>
            </Form.Item>

            <Form.Item<FieldType>
                label="Пароль"
                name="password"
                rules={[{required: true, message: 'Пожалуйста заполните пароль'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item<FieldType>
                label="Повторите пароль"
                name="passwordRepeat"
                rules={[{required: true, message: 'Пожалуйста повторите пароль'},
                    {validator: validatePasswordRepeat}]}
            >
                <Input.Password/>
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