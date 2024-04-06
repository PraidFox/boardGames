import {ButtonsLogout} from "../ButtonsLogout";
import {Button, Flex, Popover} from "antd";
import {ModalForm} from "../../Modals/ModalForm";
import {TabsFormAuthLogin} from "../../Forms/FormsAuthLogin/TabsFormAuthLogin";
import React, {useState} from "react";
import {useInfoUser} from "../../../tools/hooks/useInfoUser";
import {FormLogin} from "../../Forms/FormsAuthLogin/FormLogin/FormLogin";
import {FormInstance} from "antd/es/form";
import {PopoverForm} from "../../Modals/PopoverForm";
import {FormType} from "../../../tools/storages/const";


export const AuthOrProfile = () => {

    const {loggedIn} = useInfoUser()


    return (
        <>
            {loggedIn ?
                <ButtonsLogout/> :
                <Flex gap="small" wrap="wrap">
                    <PopoverForm>
                        {(setForm: (form: FormInstance) => void) => <FormLogin nameForm={"PopoverFormAuth"}
                                                                               setForm={setForm}/>}
                    </PopoverForm>
                    <ModalForm>
                        {(setFormType: (formType: string) => void, setForm: (form: FormInstance) => void) =>
                            <TabsFormAuthLogin setFormType={setFormType} setForm={setForm}/>}
                    </ModalForm>
                </Flex>}
        </>
    )


}