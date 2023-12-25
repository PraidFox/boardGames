import {Button, Flex, Popover} from "antd";
import {FormLogin} from "../Forms/FormsAuthLogin/FormLogin";
import {ModalAuthLogin} from "../Modals/ModalAuthLogin";
import {FormAuthLogin} from "../Forms/FormsAuthLogin/FormAuthLogin";
import React from "react";


export const ButtonsAuth = () => {
    return <Flex gap="small" wrap="wrap">
        <Popover content={<FormLogin/>} title={<br/>} trigger="click">
            <Button type="primary">
                Войти
            </Button>
        </Popover>

        <ModalAuthLogin>
            {(onClose) => (
                <FormAuthLogin onClose={onClose}/>
            )}
        </ModalAuthLogin>
    </Flex>
}
