import {Modal} from "antd";
import {useState} from "react";
import {useErrorInfo} from "../../tools/hooks/hooksContext/useErrorInfo";

export const ErrorModal = ({children}: {
    children: (onClose: () => void) => React.ReactNode
}) => {
    const [open, setOpen] = useState(true);
    const {setErrorInfo} = useErrorInfo()
    const onClose = () => {
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