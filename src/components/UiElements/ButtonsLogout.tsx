import {Button, Flex} from "antd";
import React from "react";
import {useInfoUser} from "../../tools/hooks/useInfoUser";

export const ButtonsLogout = () => {
    const {logoutUser} = useInfoUser()

    return <Flex gap="small" wrap="wrap">
        <Button type="primary" onClick={logoutUser}>
            Выйти
        </Button>
    </Flex>
}
