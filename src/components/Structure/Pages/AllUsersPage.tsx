import {NavLink} from "react-router";
import {PathStorage} from "../../../tools/storages/Path.storage.ts";
import {useGetAllUsers} from "../../../tools/hooks/queries/Users.queries.ts";


export const AllUsersPage = () => {

    const {data} = useGetAllUsers()

    return (
        <div>
            Здесь информация и поиск всех игроков.
            {data?.map(user =>
                <li key={"link" + user.userName}>
                    <NavLink
                        to={`${PathStorage.USER}/${user.userName}`}
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