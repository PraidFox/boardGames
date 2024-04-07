import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {useInfoUser} from "../tools/hooks/hooksContext/useInfoUser";

export const PrivateRouter = () => {
    const {loggedIn} = useInfoUser()

    return loggedIn ? <Outlet/> : <Navigate to="/" replace/>;
};