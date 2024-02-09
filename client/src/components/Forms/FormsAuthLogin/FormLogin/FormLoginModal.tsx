import {FieldsLogin} from "./FieldsLogin";
import {Button, Form, Row, Space} from "antd";
import React, {useContext} from "react";
import {UserApi} from "../../../../tools/rest/UserApi";
import {Login} from "../../../../tools/interfaces/formInterface";
import {UserLoginContext} from "../../../../App";


export const FormLoginModal = ({onClose}: { onClose: () => void }) => {
    const {setLoggedInAndStorage} = useContext(UserLoginContext)

    const onFinish = (values: Login) => {
        UserApi.loginUser(values.email, values.password)
            .then(r => setLoggedInAndStorage(r.data.accessToken, r.data.refreshToken))
            //.then(r => console.log(r))
            .catch(() => alert("Логин или пароль введены не верно. Или вы пытаетесь кого-то взломать"))

        // if (values.remember) {
        //     localStorage.setItem("email", values.email)
        //     localStorage.setItem("password", values.password)
        // }

        localStorage.setItem("remember", values.remember)
    };

    const onFinishFailed = (errorInfo: any) => {
        //console.log('Failed:', errorInfo);
    };

    return (<Form
        name="formLoginModal"
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
                    <Button type="primary" htmlType="submit"> Войти
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
