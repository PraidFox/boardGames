import {Navigate, Outlet} from "react-router";
import {useGetMe} from "../tools/hooks/queries/Users.queries.ts";


export const PrivateRouter = () => {
    const {data: userInfo, isLoading} = useGetMe()


    //TODO а может при отрисовки приватной страницы вновь проверить не протух ли token?

    if (!isLoading) {
        if (userInfo === undefined) {
            return <Navigate to="/" replace/>
        } else {
            return <Outlet/>;
        }
    }
};