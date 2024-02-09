import {Button, Modal} from "antd";
import React, {useState} from "react";

export const ModalAnt = ({children}: { children: (onClose: () => void) => React.ReactNode }) => {
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
            footer={null}
            closeIcon={false}
        >
            {children(onClose)}
        </Modal>

    </>
}