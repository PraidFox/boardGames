import {UsersApi} from "../../../tools/rest/UsersApi";
import {useLayoutEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {PathStorage} from "../../../tools/storages/const";

export const AllUsersPage = () => {
    const [users, setUsers] = useState<{ userName: string, email: string }[]>([])


    useLayoutEffect(() => {
        UsersApi.getAllUsers().then(r => setUsers(r.data))
    }, []);

    return (
        <div>Здесь информация и поиск всех игроков.
            {users.map(user =>
                <li key={"link" + user.userName}>
                    <NavLink
                        to={`${PathStorage.USERS}/${user.userName}`}
                        state={{user}}
                    >
                        {user.userName}
                    </NavLink>
                </li>
            )
            }


            <br/>
            Зачем? Найти друга. Или найти с кем поиграть, может сделаем отправки сообщений? Или еще чего... Или
            посмотреть активность.
            <br/>
            А компании могут ммм... не знаю зачем им, но может нужно будет.
        </div>
    )
}