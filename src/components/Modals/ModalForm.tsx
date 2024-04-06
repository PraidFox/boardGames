import {Button, Modal} from "antd";
import React, {useState} from "react";

import {FormInstance} from "antd/es/form";
import {FormType} from "../../tools/storages/const";

export const ModalForm = ({children}: {
    children: (onClose: () => void) => React.ReactNode
}) => {
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    }

    return <>
        <Button type="primary" onClick={showModal}>
            Зарегистрироваться
        </Button>
        <Modal
            title={null}
            open={open}
            onCancel={onClose}
            closeIcon={false}
            footer={null}
        >
            {children(onClose)}
        </Modal>

    </>
}