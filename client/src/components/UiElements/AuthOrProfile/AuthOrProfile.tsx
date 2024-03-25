import {ButtonsLogout} from "../ButtonsLogout";
import {Flex} from "antd";
import {PopoverAnt} from "../PopoverAnt";
import {FormLoginPopover} from "../../Forms/FormsAuthLogin/FormLogin/FormLoginPopover";
import {ModalAnt} from "../ModalAnt";
import {TabsFormAuthLogin} from "../../Forms/FormsAuthLogin/TabsFormAuthLogin";
import React, {useContext} from "react";
import {UserLoginContext} from "../../../context/UserContext";


export const AuthOrProfile = () => {

    const {loggedIn} = useContext(UserLoginContext)


    return (
        <>
            {loggedIn ?
                <ButtonsLogout/> :
                <Flex gap="small" wrap="wrap">
                    <PopoverAnt component={<FormLoginPopover/>} title={"Данные для входа"}
                                buttonName={"Войти"}/>
                    <ModalAnt>
                        {(onClose) => <TabsFormAuthLogin onClose={onClose}/>}
                    </ModalAnt>
                </Flex>}
        </>
    )


}