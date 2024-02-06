import {FieldsLogin} from "./FieldsLogin";
import {Button, Form, Row} from "antd";
import React from "react";
import {UserLoginContext} from "../../MainScreen/MainScreen";
import {Login} from "../../../utils/interface/formInterface";
import {UserApi} from "../../../utils/rest/UserApi";

export const FormLoginPopover = () => {
    const {setLoggedInAndStorage} = React.useContext(UserLoginContext)

    const onFinish = (values: Login) => {
        UserApi.loginUser(values.email, values.password)
            .then(r => setLoggedInAndStorage(r.data.accessToken, r.data.refreshToken))
            .then(r => console.log(r))
            .catch(() => alert("Логин или пароль введены не верно. Или вы пытаетесь кого-то взломать"))

        if(values.remember){
            localStorage.setItem("email", values.email)
            localStorage.setItem("password", values.password)
        } else {
            localStorage.removeItem("email")
            localStorage.removeItem("password")
        }

        localStorage.setItem("remember", values.remember)
    };

    const onFinishFailed = (errorInfo: any) => {
        //console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="formLoginPopover"
            style={{width: 300}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >

            <FieldsLogin/>
            <Row justify="end">
                {/*<Space align="center">*/}
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Войти
                        </Button>
                    </Form.Item>
                {/*</Space>*/}
            </Row>
        </Form>
    )
}