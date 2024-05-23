import {useParams} from "react-router-dom";
import {useLayoutEffect, useState} from "react";
import {UsersApi} from "../../../tools/rest/UsersApi";

export const CurrentUserPage = () => {
    const {userName} = useParams();
    const [roles, setRoles] = useState<string[]>([])


    useLayoutEffect(() => {
        UsersApi.getUserRoles(userName!).then(r => setRoles(r.data))
    }, [userName]);

    return (
        <div>Здесь информация о {userName} пользователе.
            <br/><br/>
            Роли:
            <br/>
            {roles.map(role => <li key={role}>{role}</li>)}
        </div>
    )
}