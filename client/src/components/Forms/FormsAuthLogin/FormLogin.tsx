import {FieldsLogin} from "./FieldsLogin";
import {Button, Form, Row, Space} from "antd";
import React from "react";

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
export const FormLogin = () => {
    return (
        <Form
            name="formLogin"
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