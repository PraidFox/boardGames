import {Avatar, Badge, Button, Menu, Space} from "antd";
import {useLayoutEffect, useState} from "react";
import {ItemMenu} from "../../../tools/storages/ItemMenu";
import {UseMenuDriven} from "../../../tools/interfaces/hook.Interface.ts";
import {useMenuDriven} from "../../../tools/hooks/useMenuDriven";
import {LocalStorageUtils} from "../../../tools/utils/LocalStorageUtils";
import {DiscordIcon, TelegramIcon} from "../../../tools/images/svgStorage";
import {UserOutlined} from "@ant-design/icons";
import {useGetMe} from "../../../tools/hooks/queryies/Users.queryes.ts";
import {useLogout} from "../../../tools/hooks/queryies/Auth.queryes.ts";


export const LeftMenuBottom = ({collapsedSider}: { collapsedSider: boolean }) => {
    const {menuItems, current, setMenuItems, onClick}: UseMenuDriven = useMenuDriven(ItemMenu.defaultLeftMenu)
    const {data: userInfo} = useGetMe()
    const [defaultOpen, setDefaultOpen] = useState<string[]>([])
    const logout = useLogout()

    useLayoutEffect(() => {
        if (userInfo) {
            setMenuItems(() => [])
        } else {
            setMenuItems(() => [])
        }
    }, [userInfo, setMenuItems]);

    useLayoutEffect(() => {
        const openMenu = LocalStorageUtils.getOpenMenu()["leftMenu"]
        setDefaultOpen(() => openMenu ? openMenu : [])
    }, []);

    const getSocialGroup = () => {
        if (collapsedSider) {
            return <>
                <div style={{textAlign: "center"}}><TelegramIcon style={{fontSize: '40px', cursor: "pointer"}}/></div>
                <br/>
                <div style={{textAlign: "center"}}><DiscordIcon style={{fontSize: '40px', cursor: "pointer"}}/></div>
                <Button onClick={() => logout.mutateAsync()}> Выход </Button>
            </>
        } else {
            return <>
                <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
                    <div style={{textAlign: "center"}}><TelegramIcon style={{fontSize: '40px', cursor: "pointer"}}/>
                    </div>
                    <div style={{textAlign: "center"}}><DiscordIcon style={{fontSize: '40px', cursor: "pointer"}}/>
                    </div>
                    <Button onClick={() => logout.mutateAsync()}> Выход </Button>
                </div>
            </>

        }
    }

    return (<div style={{position: "sticky", top: "75vh"}}>
            <div style={{textAlign: "center"}}><Space>
                <Badge count={8}>
                    <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                </Badge>
                {!collapsedSider && <b style={{color: "white"}}>PraidFox</b>}
            </Space></div>
            <br/>
            <hr/>
            <br/>
            {getSocialGroup()}
            <br/>
            <hr/>
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