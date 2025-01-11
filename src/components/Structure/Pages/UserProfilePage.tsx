import {useParams} from "react-router";
import {useLayoutEffect, useState} from "react";
import {UsersService} from "../../../tools/rest/services/Users.service.ts";
import {Avatar, Button, Input, theme} from "antd";

const {TextArea} = Input;
export const UserProfilePage = () => {
    const {userName} = useParams();
    const [roles, setRoles] = useState<string[]>([])
    const {
        token: {borderRadiusLG},
    } = theme.useToken();

    useLayoutEffect(() => {
        UsersService.getUserRoles(userName!).then(r => setRoles(r.data))
    }, [userName]);

    return (
        <>
            <img
                style={{
                    margin: '-1%',
                    width: "102%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: borderRadiusLG
                }}
                src="https://img.goodfon.ru/original/1920x1080/b/34/o-moiom-pererozhdenii-v-sliz-that-time-i-got-reincarnated--7.jpg"
                alt=""/>
            <br/>
            <br/>
            <div>
                <div style={{display: "flex", justifyContent: "center", gap: "20px", alignItems: "center"}}>
                    <Avatar
                        shape="square" size={150}
                        style={{marginTop: "-50px", border: "3px solid white"}}
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGo15sWhNraEnYCptX7fcKRhoN-kDuxUTS6Nu3fV_1l2SXu42Ntrht3qmxSiExXDwlwXs&usqp=CAU"}
                    />
                    <div>
                        <h1>{userName}</h1>
                        <div>Карма: 1000 - 7</div>
                        <div>Заходил: 12.12.2022</div>
                    </div>
                    <div style={{width: "60%"}}>
                        Роли: {roles.join(", ")}
                        <br/>
                        <span>Теги: "Детевтив, квест, средневековье, каркаде, бикини,рпг,капустные войны, история, аниме породии, и всякое
            такое и другое и другое щас бы в баню а то холодно" </span>
                        <button>Автотеги</button>
                    </div>
                    <div>
                        <div>Количество игр</div>
                        <div style={{fontSize: "40px"}}><b>27шт</b></div>
                    </div>
                </div>
            </div>
            <br/>
            <hr/>

            <br/>
            <div style={{display: "flex", justifyContent: "center",}}>
                <div style={{height: "150px", width: "60%", border: "1px solid black", padding: "10px"}}>
                    <p>Здесь могла бы быть интересная информация о вас, но вы ленивый настольщик и поэтому ничего здесь
                        не написали.</p>
                </div>
            </div>
            <br/>
            <hr/>
            <br/>
            <h3>Комментарии организаций</h3>
            <div style={{width: "60%", border: "1px solid black", padding: "10px"}}>
                Кто: Драконий хребет
                <br/>
                Комментарий: Не возвращает игры
            </div>
            <br/>
            <div style={{width: "60%", border: "1px solid black", padding: "10px"}}>
                Кто: Драконий хребет
                <br/>
                Комментарий: Плохо себя ведёт
            </div>
            <br/>
            <TextArea maxLength={5000} placeholder="Написать комментарий"/>
            <Button>Отправить</Button>

        </>
    )
}