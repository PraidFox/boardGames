import {Menu, MenuProps} from "antd";
import {useLayoutEffect, useState} from "react";
import {LocalStorageUtils} from "../../../tools/utils/LocalStorageUtils";
import {useGetMe} from "../../../tools/hooks/queries/Users.queries.ts";
import {ItemMenu} from "../../../tools/storages/ItemMenu.tsx";


export const LeftMenuTop = () => {
    //const [defaultOpen, setDefaultOpen] = useState<string[]>([])
    const [itemsMenu, setItemsMenu] = useState<MenuProps['items']>([])


    const {data: userInfo, isLoading, isSuccess} = useGetMe()

    useLayoutEffect(() => {
        if(isLoading){
            //setItemsMenu([ItemMenu.boardGamesItems])
        } else {
            if(isSuccess && userInfo) {
                const items = [ItemMenu.boardGamesItems, ItemMenu.userItems(userInfo.userName, 22), ItemMenu.otherItems]
                // if (userInfo?.role === "ADMIN") {
                items.push(ItemMenu.adminItems)
                // }

                setItemsMenu(items)
            } else {
                setItemsMenu( ItemMenu.menuForNoAuthUser)
            }
        }

    }, [isSuccess, isLoading, userInfo]);



    // useLayoutEffect(() => {
    //     const openMenu = LocalStorageUtils.getOpenMenu()["leftMenu"]
    //     setDefaultOpen(openMenu ? openMenu : [])
    // }, []);



    return (<div style={{position: "sticky", top: 0}}>
            <Menu
                theme="dark"
                mode="inline"
                //defaultOpenKeys={[...defaultOpen, ...current.split("/").map(x => `/${x}`)]}
                onOpenChange={e => LocalStorageUtils.setOpenMenu(e, "leftMenu")}
                //selectedKeys={current ? [current] : []}
                items={itemsMenu}
                //onClick={onClick}
            />
        </div>

    )

}