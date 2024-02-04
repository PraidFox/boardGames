import {Button, Flex, Popover, TabsProps} from "antd";
import {FormLoginPopover} from "../Forms/FormsAuthLogin/FormLoginPopover";
import {ModalAuthLogin} from "../Modals/ModalAuthLogin";
import {TabsAuthLogin} from "../Forms/FormsAuthLogin/TabsAuthLogin";
import React from "react";
import {FormRegistration} from "../Forms/FormsAuthLogin/FormRegistration";
import {FormLoginModal} from "../Forms/FormsAuthLogin/FormLoginModal";


export const ButtonsAuth = () => {

    return <Flex gap="small" wrap="wrap">
        <Popover content={<FormLoginPopover/>} title={"Данные для входа"} trigger="click">
            <Button type="primary">
                Войти
            </Button>
        </Popover>
        <ModalAuthLogin>
            {(onClose) => (<TabsAuthLogin onClose={onClose}/>)}
        </ModalAuthLogin>
    </Flex>
}
