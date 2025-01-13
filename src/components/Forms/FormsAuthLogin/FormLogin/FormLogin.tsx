import {FieldsLogin} from "./FieldsLogin";
import {Form, FormProps} from "antd";
import {IFieldLogin} from "../../../../tools/interfaces/fieldsForm.Interface.ts";
import {FormButtons} from "../../../UiElements/Buttons/FormButtons";
import {NF_Auth} from "../../../../tools/storages/FieldName.storage.ts";
import {useAuth} from "../../../../tools/hooks/queries/Auth.queries.ts";
import {IAuth} from "../../../../tools/interfaces/auth.interface.ts";


export const FormLogin = ({nameForm, onClose}: {
    nameForm: string
    onClose: () => void
}) => {

    const auth = useAuth()

    const onFinish: FormProps<IFieldLogin> ["onFinish"] = async (values) => {

        //setSettingMessage(StorageSettingMessage.authorizationLoading)


        const data: IAuth = {
            userName: values[NF_Auth.LOGIN],
            password: values[NF_Auth.PASSWORD]
        }

        //TODO исправить!!!
        const rememberMe = values[NF_Auth.REMEMBER_ME] == undefined ? false : values[NF_Auth.REMEMBER_ME]


        await auth.mutateAsync({auth: data, rememberMe: rememberMe})
        //setSettingMessage(StorageSettingMessage.authorizationAccess)
        onClose()
        //setSettingMessage(StorageSettingMessage.authorizationError)
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
        <FormButtons nameOk={"Войти"} handleCancel={onCancel} loading={auth.isPending}/>
    </Form>)
}
