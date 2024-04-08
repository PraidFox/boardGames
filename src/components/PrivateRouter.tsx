import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {useInfoUser} from "../tools/hooks/hooksContext/useInfoUser";

export const PrivateRouter = () => {
    const {loggedIn} = useInfoUser()

    //TODO а может при отрисовки приватной страницы вновь проверить не протух ли token?

    if (loggedIn === undefined) {
        return null
    } else {
        return loggedIn ? <Outlet/> : <Navigate to="/" replace/>;
    }
};