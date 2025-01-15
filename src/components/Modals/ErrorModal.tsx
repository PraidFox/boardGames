import {Modal} from "antd";
import {ReactNode, useState} from "react";

export const ErrorModal = ({children}: {
    children: (onClose: () => void) => ReactNode
}) => {
    const [open, setOpen] = useState(true);
    const onClose = () => {
        setOpen(false);
    }

    return <>
        <Modal
            title={null}
            open={open}
            onCancel={onClose}
            closeIcon={false}
            footer={null}
            maskClosable={false}
        >
            {children(onClose)}
        </Modal>
    </>
}