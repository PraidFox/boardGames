import {FieldsLogin} from "./FieldsLogin";
import {Button, Form, Row} from "antd";
import React, {useContext} from "react";
import {Login} from "../../../../tools/interfaces/formInterface";
import {UserLoginContext} from "../../../../context/UserContext";

export const FormLoginPopover = () => {
    const {authUser} = useContext(UserLoginContext)

    const onFinish = (values: Login) => {
        authUser(values.email, values.password)

        if (values.remember) {
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