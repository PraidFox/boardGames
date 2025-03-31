import {GenrePanel} from "./PanelOptionAdd/GenrePanel.tsx";
import {TypePanel} from "./PanelOptionAdd/TypePanel.tsx";
import {RolePanel} from "./PanelOptionAdd/RolePanel.tsx";
import {DeletedBoardGameField} from "./DeletedBoardGame.field.tsx";
import {ChangeRoleUserField} from "./ChangeRoleUser.field.tsx";
import {useGetFilterUsers} from "../../../../tools/hooks/queries/Users.queries.ts";


export const AdminSettingPage = () => {
    const {data: users} = useGetFilterUsers({page: 1, pageSize: 100})

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
        <ChangeRoleUserField/>

    </div>
}