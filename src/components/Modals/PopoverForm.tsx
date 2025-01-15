import {Popover} from "antd";
import {ReactNode, useState} from "react";

export const PopoverForm = ({children}: {
    children: (onClose: () => void) => ReactNode
}) => {
    const [open, setOpen] = useState(false);


    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    const onClose = () => {
        setOpen(false);
    }


    //TODO <Form.Item> - изменить

    return (
        <Popover
            open={open}
            onOpenChange={handleOpenChange}
            content={children(onClose)}
            title={"Данные для входа"}
            trigger="click"
        >
            {/*<Button type="primary">*/}
            <span style={{color: '#FFFFFFA6'}}>
                Войти
            </span>
            {/*</Button>*/}
        </Popover>
    )
}