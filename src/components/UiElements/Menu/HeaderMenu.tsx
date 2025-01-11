import {Menu} from "antd";
import {useLayoutEffect} from "react";
import {useInfoUser} from "../../../tools/hooks/hooksContext/useInfoUser";
import {useMenuDriven} from "../../../tools/hooks/useMenuDriven";
import {UseMenuDriven} from "../../../tools/interfaces/hook.Interface.ts";
import {ItemMenu} from "../../../tools/storages/ItemMenu";

export const HeaderMenu = () => {
    const {menuItems, current, setMenuItems, onClick}: UseMenuDriven = useMenuDriven(ItemMenu.defaultHeaderMenu)
    const {id} = useInfoUser()

    useLayoutEffect(() => {
        if (id) {
            //Еще проверяем на админа
            setMenuItems(r => r ? [...r, ItemMenu.adminSetting] : [ItemMenu.adminSetting])
        } else {
            setMenuItems(r => r?.filter(x => x?.key !== ItemMenu.adminSetting?.key))
        }
    }, [id, setMenuItems]);


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