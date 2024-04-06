import {Button, Modal} from "antd";
import React, {useState} from "react";

import {FormInstance} from "antd/es/form";
import {FormType} from "../../tools/storages/const";

export const ModalForm = ({children}: {
    children: (setFormType: (formType: string) => void, setForm: (form: FormInstance | undefined) => void) => React.ReactNode
}) => {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState<FormInstance>()
    const [formType, setFormType] = useState<string>(FormType.REGISTRATION)
    const showModal = () => {
        setOpen(true);
    };

    console.log("form", form)
    const handleOk = () => {
        form?.validateFields()
            .then((r) => {
                form?.submit();
                setOpen(false);
            })
            .catch(() => {
            })
    }
    const onClose = () => {
        console.log("Я тут")
        form?.resetFields()
        setOpen(false);
    }

    const getNameButtonOk = (formType: string) => {
        if (formType === FormType.REGISTRATION) {
            return "Зарегистрироваться"
        } else if (formType === FormType.AUTH) {
            return "Войти"
        }
    }


    return <>
        <Button type="primary" onClick={showModal}>
            Зарегистрироваться
        </Button>
        <Modal
            title={null}
            open={open}
            onOk={handleOk}
            onCancel={onClose}
            closeIcon={false}
            footer={[
                <Button key="back" onClick={onClose}>
                    Отмена
                </Button>,
                <Button key="submit" type="primary" onClick={handleOk}>
                    {getNameButtonOk(formType)}
                </Button>,
            ]}
        >
            {children(setFormType, setForm)}
        </Modal>

    </>
}