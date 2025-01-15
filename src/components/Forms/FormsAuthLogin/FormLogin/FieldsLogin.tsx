import {Checkbox, Flex, Form, Input} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import {IFieldLogin} from "../../../../tools/interfaces/fieldsForm.Interface.ts";
import {NF_Auth} from "../../../../tools/storages/FieldName.storage.ts";

export const FieldsLogin = () => {
    return (
        <>
            <Form.Item<IFieldLogin>
                name={NF_Auth.LOGIN}
            >
                <Input
                    prefix={<MailOutlined/>}
                    placeholder="Логин"
                />
            </Form.Item>
            <Form.Item<IFieldLogin>
                name={NF_Auth.PASSWORD}
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
                    {/*//TODO разобраться как проставить автоматом false*/}
                    <Form.Item<IFieldLogin> name={NF_Auth.REMEMBER_ME} valuePropName="checked" noStyle>
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