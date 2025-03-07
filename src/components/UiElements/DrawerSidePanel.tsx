import {ReactNode, useState} from 'react';
import {Button, Drawer} from 'antd';

export const DrawerSidePanel = ({children}: { children: (onClose: () => void) => ReactNode }) => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                Добавить настолку
            </Button>

            <br/>
            <Drawer title="Добавление настольной игры" placement="right" onClose={onClose} open={open} width={"40%"}
                    maskClosable={false} closeIcon={false}>
                {open && children(onClose)}
            </Drawer>
        </>
    );
};
