import {UsersApi} from "../../../tools/rest/UsersApi";

export const PlayersPage = () => {
    //UsersApi.getAllUsers().then(r => console.log(r.data))
    return (
        <div>Здесь информация и поиск всех игроков.
            <br/>
            Зачем? Найти друга. Или найти с кем поиграть, может сделаем отправки сообщений? Или еще чего... Или
            посмотреть активность.
            <br/>
            А компании могут ммм... не знаю зачем им, но может нужно будет.
        </div>
    )
}