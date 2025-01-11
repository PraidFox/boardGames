import {Navigate, Outlet} from "react-router";
import {useInfoUser} from "../tools/hooks/hooksContext/useInfoUser";

export const PrivateRouter = () => {
    const {id} = useInfoUser()

    //TODO а может при отрисовки приватной страницы вновь проверить не протух ли token?

    if (id === undefined) {
        return null
    } else {
        return id ? <Outlet/> : <Navigate to="/" replace/>;
    }
};