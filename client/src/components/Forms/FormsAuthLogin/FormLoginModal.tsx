import {FieldsLogin} from "./FieldsLogin";
import {Button, Form, Row, Space} from "antd";
import React from "react";
import {UserApi} from "../../../utils/rest/UserApi";
import {Login} from "../../../utils/interface/formInterface";
import {UserLoginContext} from "../../MainScreen/MainScreen";


export const FormLoginModal = ({onClose}: { onClose: () => void }) => {
    const {setLoggedIn} = React.useContext(UserLoginContext)

    const onFinish = (values: Login) => {
        UserApi.loginUser(values.userName, values.password)
            .then(r => setLoggedIn(true))
            .catch(r => alert("Логин или пароль введены не верно. Или вы пытаетесь кого-то взломать"))
    };

    const onFinishFailed = (errorInfo: any) => {
        //console.log('Failed:', errorInfo);
    };

    return (<Form
        name="formLogin"
        labelCol={{span: 8}}
        style={{maxWidth: 600}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <FieldsLogin/>
        <Row justify="end">
            <Space align="center">
                <Form.Item>
                    <Button type="primary" htmlType="submit" > Войти
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="reset" onClick={onClose}>
                        Отмена
                    </Button>
                </Form.Item>
            </Space>
        </Row>
    </Form>)
}
