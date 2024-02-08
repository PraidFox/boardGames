import {Button, Flex} from "antd";
import React from "react";
import {UserLoginContext} from "../../../App";



export const ButtonsLogout = () => {
    const {setLogout} = React.useContext(UserLoginContext)

    return <Flex gap="small" wrap="wrap">
            <Button type="primary" onClick={() => setLogout()}>
                Выйти
            </Button>
    </Flex>
}
