import {FieldsLogin} from "./FieldsLogin";
import {Button, Form, Row, Space} from "antd";
import React from "react";
import {Login} from "../../../../tools/interfaces/formInterface";
import {useInfoUser} from "../../../../tools/hooks/useInfoUser";
import {useMessage} from "../../../../tools/hooks/useMessage";
import {StorageSettingMessage} from "../../../../tools/storages/storageSettingMessage";


export const FormLogin = ({nameForm, onClose}: {
    nameForm: string
    onClose: () => void
}) => {
    const {authUser} = useInfoUser()
    const {setSettingMessage} = useMessage()
    const onFinish = (values: Login) => {
        setSettingMessage(StorageSettingMessage.authorizationLoading)

        authUser(values.email, values.password, values.remember).then(() => {
            setSettingMessage(StorageSettingMessage.authorizationAccess)
            onClose()
        }).catch(r => {
            setSettingMessage(StorageSettingMessage.authorizationError)
        })
    };

    const onCancel = () => {
        onClose()
    }

    return (<Form
        name={nameForm}
        onFinish={onFinish}
        autoComplete="off"
    >
        <FieldsLogin/>
        <Row justify="end">
            <Space align="center">
                <Form.Item>
                    <Button type="primary" htmlType="submit"> Войти
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="reset" onClick={onCancel}>
                        Отмена
                    </Button>
                </Form.Item>
            </Space>
        </Row>
    </Form>)
}
