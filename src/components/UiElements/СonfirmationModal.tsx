import {useState} from "react";
import {Button, Modal} from "antd";

export const ConfirmationModal = ({runFunction}: { runFunction: () => void }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        runFunction();
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="dashed" onClick={showModal}>
                Удалить
            </Button>
            <Modal
                title="Подтверждение удаления"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Подтверждаю"
                cancelText="Отмена"
            >
                Уверены что хотите удалить?
            </Modal>
        </>
    );
};