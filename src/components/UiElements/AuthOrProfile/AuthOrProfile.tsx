import {ProfileMenu} from "../Menu/ProfileMenu";
import {Flex} from "antd";
import {ModalForm} from "../../Modals/ModalForm";
import {TabsFormAuthLogin} from "../../Forms/FormsAuthLogin/TabsFormAuthLogin";
import {useInfoUser} from "../../../tools/hooks/hooksContext/useInfoUser";
import {FormLogin} from "../../Forms/FormsAuthLogin/FormLogin/FormLogin";
import {PopoverForm} from "../../Modals/PopoverForm";

export const AuthOrProfile = () => {
    const {id} = useInfoUser()

    return (
        <>
            {id ?
                <div style={{textAlign: "center"}}>
                    <ProfileMenu/>
                </div> :

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