import {ButtonsLogout} from "../ButtonsLogout";
import {Flex} from "antd";
import {ModalForm} from "../../Modals/ModalForm";
import {TabsFormAuthLogin} from "../../Forms/FormsAuthLogin/TabsFormAuthLogin";
import React from "react";
import {useInfoUser} from "../../../tools/hooks/useInfoUser";
import {FormLogin} from "../../Forms/FormsAuthLogin/FormLogin/FormLogin";
import {PopoverForm} from "../../Modals/PopoverForm";

export const AuthOrProfile = () => {
    const {loggedIn} = useInfoUser()

    return (
        <>
            {loggedIn ?
                <ButtonsLogout/> :
                <Flex gap="small" wrap="wrap">
                    <PopoverForm>
                        {(onClose: () => void) => <FormLogin nameForm={"popoverAuth"} onClose={onClose}/>}
                    </PopoverForm>
                    <ModalForm>
                        {(onClose: () => void) =>
                            <TabsFormAuthLogin onClose={onClose}/>}
                    </ModalForm>
                </Flex>}
        </>
    )


}