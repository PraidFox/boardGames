import {Button, Modal} from "antd";
import React, {useState} from "react";

export const ModalForm = ({children}: {
    children: (onClose: () => void) => React.ReactNode
    reAuthorization?: boolean
}) => {
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    }

    return <>
        {/*<Button type="primary" onClick={showModal}>*/}
        {/*    Зарегистрироваться*/}
        {/*</Button>*/}
        <span onClick={showModal} style={{color: '#FFFFFFA6'}}>
            Регистрация
        </span>
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