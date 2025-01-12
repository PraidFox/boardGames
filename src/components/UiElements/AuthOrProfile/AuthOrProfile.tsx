import {ProfileMenu} from "../Menu/ProfileMenu";
import {Flex} from "antd";
import {ModalForm} from "../../Modals/ModalForm";
import {TabsFormAuthLogin} from "../../Forms/FormsAuthLogin/TabsFormAuthLogin";
import {FormLogin} from "../../Forms/FormsAuthLogin/FormLogin/FormLogin";
import {PopoverForm} from "../../Modals/PopoverForm";
import {useGetMe} from "../../../tools/hooks/queryies/Users.queryes.ts";

export const AuthOrProfile = () => {
    const {data: userInfo} = useGetMe()

    return (
        <>
            {userInfo ?
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