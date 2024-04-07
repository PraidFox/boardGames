import {MyError} from "../storages/const";
import {FormLogin} from "../../components/Forms/FormsAuthLogin/FormLogin/FormLogin";
import {ErrorModal} from "../../components/Modals/ErrorModal";
import {Alert} from "antd";

export const checkError = (error: string) => {
    switch (error) {
        case MyError.NEED_AUTHORIZATION:
            return <ErrorModal>
                {onClose =>
                    <>
                        <Alert message="Ваша сессия истекла, необходимо перезайти" type="error"/>
                        <br/>
                        <FormLogin nameForm={"reAuthorization"} onClose={onClose}/>
                    </>
                }
            </ErrorModal>
    }
}

