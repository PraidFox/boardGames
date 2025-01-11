import {FieldsLogin} from "./FieldsLogin";
import {Form} from "antd";
import {useState} from "react";
import {Login} from "../../../../tools/interfaces/form.Interface.ts";
import {useInfoUser} from "../../../../tools/hooks/hooksContext/useInfoUser";
import {useMessage} from "../../../../tools/hooks/hooksContext/useMessage";
import {StorageSettingMessage} from "../../../../tools/storages/storageSettingMessage";
import {FormButtons} from "../../../UiElements/Buttons/FormButtons";


export const FormLogin = ({nameForm, onClose}: {
    nameForm: string
    onClose: () => void
}) => {
    const {authUser} = useInfoUser()
    const {setSettingMessage} = useMessage()
    const [loading, setLoading] = useState<boolean>(false);
    const onFinish = (values: Login) => {
        setSettingMessage(StorageSettingMessage.authorizationLoading)

        setLoading(true)
        authUser(values.login, values.password, values.remember).then(() => {
            setSettingMessage(StorageSettingMessage.authorizationAccess)
            setLoading(false)
            onClose()
        }).catch(r => {
            setSettingMessage(StorageSettingMessage.authorizationError)
            setLoading(false)
        })
    };

    const onCancel = () => {
        onClose()
    }

    return (<Form
        name={nameForm}
        onFinish={onFinish}
        autoComplete="off"
    >
        <FieldsLogin/>
        <FormButtons nameOk={"Войти"} handleCancel={onCancel} loading={loading}/>
    </Form>)
}
