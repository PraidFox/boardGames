import {Button, Flex} from "antd";
import React from "react";
import {UserLoginContext} from "../../context/UserContext";


export const ButtonsLogout = () => {
    const {logoutUser} = React.useContext(UserLoginContext)

    return <Flex gap="small" wrap="wrap">
        <Button type="primary" onClick={() => logoutUser()}>
            Выйти
        </Button>
    </Flex>
}
