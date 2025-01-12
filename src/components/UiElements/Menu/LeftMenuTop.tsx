import {Menu} from "antd";
import {useLayoutEffect, useState} from "react";
import {ItemMenu} from "../../../tools/storages/ItemMenu";
import {UseMenuDriven} from "../../../tools/interfaces/hook.Interface.ts";
import {useMenuDriven} from "../../../tools/hooks/useMenuDriven";
import {LocalStorageUtils} from "../../../tools/utils/LocalStorageUtils";
import {useGetMe} from "../../../tools/hooks/queryies/Users.queryes.ts";


export const LeftMenuTop = () => {
    const {menuItems, current, setMenuItems, onClick}: UseMenuDriven = useMenuDriven(ItemMenu.defaultLeftMenu)
    const [defaultOpen, setDefaultOpen] = useState<string[]>()

    const {data: userInfo} = useGetMe()


    useLayoutEffect(() => {
        if (userInfo) {
            //setMenuItems(r => r ? [ItemMenu.userItems, ...r, ItemMenu.otherItems, ItemMenu.adminItems] : [ItemMenu.userItems])
            setMenuItems(() => [ItemMenu.boardGamesItems, ItemMenu.userItems, ItemMenu.otherItems, ItemMenu.adminItems])
        } else {
            setMenuItems(r => r?.filter(x => x?.key !== ItemMenu.userItems?.key) || [])
        }
    }, [userInfo, setMenuItems]);

    useLayoutEffect(() => {
        const openMenu = LocalStorageUtils.getOpenMenu()["leftMenu"]
        setDefaultOpen(openMenu ? openMenu : [])
    }, []);


    return (<div style={{position: "sticky", top: 0}}>
            {defaultOpen && <Menu
                theme="dark"
                mode="inline"
                defaultOpenKeys={[...defaultOpen, ...current.split("/").map(x => `/${x}`)]}
                onOpenChange={e => LocalStorageUtils.setOpenMenu(e, "leftMenu")}
                selectedKeys={current ? [current] : []}
                items={menuItems}
                onClick={onClick}
            />}
        </div>

    )

}