import {Modal} from "antd";
import React, {useState} from "react";
import {useErrorInfo} from "../../tools/hooks/useErrorInfo";

export const ErrorModal = ({children}: {
    children: (onClose: () => void) => React.ReactNode
}) => {
    const [open, setOpen] = useState(true);
    const {setErrorInfo} = useErrorInfo()
    const onClose = () => {
        console.log("Я тут")
        setErrorInfo(null)
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