import {useState} from "react";
import {useGetAllUsers} from "../../../../tools/hooks/queries/Users.queries.ts";
import {GenrePanel} from "./PanelOptionAdd/GenrePanel.tsx";
import {TypePanel} from "./PanelOptionAdd/TypePanel.tsx";
import {RolePanel} from "./PanelOptionAdd/RolePanel.tsx";
import {DeletedBoardGameField} from "./DeletedBoardGame.field.tsx";


export const AdminSettingPage = () => {
    const [valueRoleToUser, setValueRoleToUser] = useState<string[]>([])
    const [valueUser, setValueUser] = useState<string>()

    const {data: users} = useGetAllUsers()

    if (!users) {
        return <div>Какие-то данные не удалось загрузить</div>
    }

    return <div>
        <h3>Настройки полей</h3>
        <br/>

        <div style={{display: "flex", justifyContent: "space-around"}}>
            <div style={{width: "45%"}}><GenrePanel/></div>
            <div style={{width: "45%"}}><TypePanel/></div>
            <div style={{width: "45%"}}><RolePanel/></div>
        </div>
        <br/>
        <hr/>
        <DeletedBoardGameField/>
    </div>
}