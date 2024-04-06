import {Button, Form, Popover, Row, Space} from "antd";
import React, {useState} from "react";
import {FormInstance} from "antd/es/form";

export const PopoverForm = ({children}: {
    children: (setForm: (form: FormInstance | undefined) => void) => React.ReactNode
}) => {

    const [open, setOpen] = useState(false);
    const [form, setForm] = useState<FormInstance>()

    const handleOk = () => {
        form?.validateFields()
            .then((r) => {
                form?.submit();
            })
            .catch(() => {
            })
    }


    const onClose = (newOpen: boolean) => {
        form?.resetFields()
        setOpen(newOpen);
    };

    //TODO <Form.Item> - изменить

    return (
        <Popover
            open={open}
            onOpenChange={onClose}
            content={<>
                {children(setForm)}
                <Row justify="end">
                    <Space align="center">
                        <Form.Item>
                            <Button onClick={() => onClose(false)}>
                                Отмена
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={handleOk}> Войти
                            </Button>
                        </Form.Item>
                    </Space>
                </Row>
            </>}
            title={"Данные для входа"}
            trigger="click"
        >
            <Button type="primary">
                Войти
            </Button>
        </Popover>
    )
}