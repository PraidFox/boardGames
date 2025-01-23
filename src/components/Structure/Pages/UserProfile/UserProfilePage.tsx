import {useParams} from "react-router";
import {Avatar, Button, Input, theme} from "antd";
import {useGetMe, useGetUserRoles} from "../../../../tools/hooks/queries/Users.queries.ts";
import {useQuery} from "@tanstack/react-query";
import {UserServiceFN} from "../../../../tools/rest/services/Users.service.ts";
import {useUserCollections} from "../../../../tools/hooks/queries/UserCollection.queries.ts";
import {CollectionAliases} from "../../../../tools/storages/StorageKeys.ts";

const {TextArea} = Input;
export const UserProfilePage = () => {
    const {userName: userNameUrl} = useParams();

    const {
        token: {borderRadiusLG},
    } = theme.useToken();

    //const {data: whoProfile} = useGetUser(userNameUrl)
    const {data: whoProfile} = useQuery({...UserServiceFN.getUserQO(userNameUrl)})
    const {data: userRoles} = useGetUserRoles(userNameUrl)
    const {data: userInfo} = useGetMe()
    const {data: collections} = useUserCollections(whoProfile?.userName)

    if(!whoProfile || !userRoles || !userInfo || !collections) return <div>Loading...</div>

    //const myProfile: boolean = whoProfile.userName === userInfo.userName

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
                        <h1>{whoProfile.userName}</h1>
                        <div>Карма: 1000 - 7</div>
                        <div>Заходил: 12.12.2022</div>
                    </div>
                    <div style={{width: "60%"}}>
                        Роли: {userRoles.join(", ")}
                        <br/>
                        <span>Теги: "Детевтив, квест, средневековье, каркаде, бикини,рпг,капустные войны, история, аниме породии, и всякое
            такое и другое и другое щас бы в баню а то холодно" </span>
                        <button>Автотеги</button>
                    </div>
                    <div>
                        <div>Количество игр</div>
                        <div style={{fontSize: "40px"}}><b>{collections.find(collection => collection.alias === CollectionAliases.MY_GAMES)?.gameCount}</b></div>
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