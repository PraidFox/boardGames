import {Menu} from "antd";
import {useLayoutEffect} from "react";
import {useMenuDriven} from "../../../tools/hooks/useMenuDriven";
import {UseMenuDriven} from "../../../tools/interfaces/hook.Interface.ts";
import {ItemMenu} from "../../../tools/storages/ItemMenu";
import {useGetMe} from "../../../tools/hooks/queryies/Users.queryes.ts";

export const HeaderMenu = () => {
    const {menuItems, current, setMenuItems, onClick}: UseMenuDriven = useMenuDriven(ItemMenu.defaultHeaderMenu)
    const {data: userInfo} = useGetMe()

    useLayoutEffect(() => {
        if (userInfo) {
            //Еще проверяем на админа
            setMenuItems(r => r ? [...r, ItemMenu.adminSetting] : [ItemMenu.adminSetting])
        } else {
            setMenuItems(r => r?.filter(x => x?.key !== ItemMenu.adminSetting?.key))
        }
    }, [userInfo, setMenuItems]);


    return (


        <Menu
            theme="dark"
            mode="horizontal"
            items={menuItems}
            selectedKeys={current ? [current] : []}

            onClick={onClick}
        />

    )
}