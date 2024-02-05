import {Button, Flex} from "antd";
import React, {useContext} from "react";
import {UserLoginContext} from "./MainScreen";



export const ButtonsLogout = () => {
    const {setLoggedInAndStorage} = React.useContext(UserLoginContext)

    return <Flex gap="small" wrap="wrap">
            <Button type="primary" onClick={() => setLoggedInAndStorage(false)}>
                Выйти
            </Button>
    </Flex>
}
