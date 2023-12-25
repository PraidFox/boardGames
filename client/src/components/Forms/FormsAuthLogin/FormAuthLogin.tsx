import {Button, Checkbox, Col, Form, Input, Radio, Row, Space, Tabs, TabsProps} from 'antd';
import React, {useState} from "react";
import {FieldsRegistration} from "./FieldsRegistration";
import {FieldsLogin} from "./FieldsLogin";

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};


export const FormAuthLogin = ({onClose}: {onClose: () => void}) => {
    const [form] = Form.useForm();
    const [selectedTabs, setSelectedTabs] = useState("registration");


    const items: TabsProps['items'] = [
        {
            key: 'registration',
            label: 'Регистрация',
            children: <FieldsRegistration form={form}/>,
        },
        {
            key: 'login',
            label: 'Войти',
            children: <FieldsLogin/>,
        },
    ];


    return (

    <Form
        name="formAuthLogin"
        labelCol={{ span: 8 }}
        form={form}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >

        <Tabs defaultActiveKey="1" items={items} onChange={(key) => setSelectedTabs(key)}/>

        <Row justify="end">
                <Space align="center">
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {selectedTabs === "registration" ? "Зарегистрироваться" : "Войти"}
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="default" onClick={onClose}>
                            Отмена
                        </Button>
                    </Form.Item>
                </Space>
        </Row>
    </Form>
)}


