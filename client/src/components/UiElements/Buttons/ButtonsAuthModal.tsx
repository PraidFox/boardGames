import {Button, Flex, Popover, TabsProps} from "antd";
import {FormLoginPopover} from "../../Forms/FormsAuthLogin/FormLoginPopover";
import {ModalAuthLogin} from "../../Modals/ModalAuthLogin";
import {TabsFormAuthLogin} from "../../Forms/FormsAuthLogin/TabsFormAuthLogin";
import React from "react";


export const ButtonsAuthModal = () => {
    return <Flex gap="small" wrap="wrap">
        <Popover content={<FormLoginPopover/>} title={"Данные для входа"} trigger="click">
            <Button type="primary">
                Войти
            </Button>
        </Popover>
        <ModalAuthLogin>
            {(onClose) => (<TabsFormAuthLogin onClose={onClose}/>)}
        </ModalAuthLogin>
    </Flex>
}
