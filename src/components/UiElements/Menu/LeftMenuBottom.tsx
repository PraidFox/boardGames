import {Avatar, Badge, Button, Space} from "antd";
import {DiscordIcon, TelegramIcon} from "../../../tools/images/svgStorage";
import {UserOutlined} from "@ant-design/icons";
import {useLogout} from "../../../tools/hooks/queries/Auth.queries.ts";


export const LeftMenuBottom = ({collapsedSider}: { collapsedSider: boolean }) => {

    //const {data: userInfo} = useGetMe()

    const logout = useLogout()




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
            {/*{defaultOpen && <Menu*/}
            {/*    theme="dark"*/}
            {/*    mode="inline"*/}
            {/*    defaultOpenKeys={[...defaultOpen, ...current.split("/").map(x => `/${x}`)]}*/}

            {/*    onOpenChange={e => LocalStorageUtils.setOpenMenu(e, "leftMenu")}*/}
            {/*    selectedKeys={current ? [current] : []}*/}
            {/*    items={menuItems}*/}
            {/*    onClick={onClick}*/}
            {/*/>}*/}
        </div>

    )

}