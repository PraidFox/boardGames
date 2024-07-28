import {useParams} from "react-router-dom";
import {useLayoutEffect, useState} from "react";
import {UsersApi} from "../../../tools/rest/UsersApi";
import {Avatar, theme} from "antd";

export const UserProfilePage = () => {
    const {userName} = useParams();
    const [roles, setRoles] = useState<string[]>([])
    const {
        token: {borderRadiusLG},
    } = theme.useToken();

    useLayoutEffect(() => {
        UsersApi.getUserRoles(userName!).then(r => setRoles(r.data))
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
            <div style={{width: "70%", border: "1px solid black", padding: "10px"}}>
                Здесь могла бы быть интересная информация о вас, но вы ленивый настольщик и поэтому ничего здесь
                не написали.
            </div>


        </>
    )
}