import {FieldsRegistration} from "./FieldsRegistration";
import {Form} from "antd";
import {useState} from "react";
import {AuthService} from "../../../../tools/rest/services/Auth.service.ts";
import {IFieldRegistration} from "../../../../tools/interfaces/fieldsForm.Interface.ts";
import {FormButtons} from "../../../UiElements/Buttons/FormButtons";
import {NF_Registration} from "../../../../tools/storages/FieldName.storage.ts";

export const FormRegistration = ({onClose}: {
    onClose: () => void
}) => {
    const [form] = Form.useForm();
    //const [messageAlert, setMessageAlert] = useState<MessageInfoType>()
    const [loading, setLoading] = useState<boolean>(false);

    const onFinish = (values: IFieldRegistration) => {
        setLoading(true)
        AuthService.registrationUser({userName: values[NF_Registration.USER_NAME], email: values[NF_Registration.EMAIL], password: values[NF_Registration.PASSWORD]})
            .then(() => {
                setLoading(false)
            })
            .catch(r => {
                //Какие еще может бек вернуть ошибки?
                console.log("ошибка", r.response)
                setLoading(false)

            })
    };


    const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
    };


    return (<Form
        name={"FormRegistration"}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        {/*{messageAlert && <MessageInfo text={messageAlert.text} type={messageAlert.type} width={messageAlert.width}/>}*/}
        <FieldsRegistration form={form}/>
        <FormButtons nameOk={"Зарегистрироваться"} handleCancel={onClose} loading={loading}/>

    </Form>)
}