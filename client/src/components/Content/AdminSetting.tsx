import {useEffect, useState} from "react";
import {GenreApi} from "../../utils/rest/GenreApi";
import {UserApi} from "../../utils/rest/UserApi";
import {GenreDTO, TypeDTO} from "../../utils/interface/DTOinterface";
import {TypeApi} from "../../utils/rest/TypeApi";
import {Button, Divider, Input, List, message, Skeleton, Space} from "antd";
import {InfiniteScrollComponent} from "../../componentsAnt/InfiniteScroll";


export const AdminSetting = () => {
    const [genre, setGenre] = useState<GenreDTO[]>([])
    const [type, setType] = useState<TypeDTO[]>([])
    const [newOptionGenre, setNewOptionGenre] = useState("")
    const [newOptionType, setNewOptionType] = useState("")

    useEffect(() => {
        GenreApi.getGenre().then((res) => {
            setGenre(res.data)
        })

        TypeApi.getType().then((res) => {
            setType(res.data)
        })
    }, []);

    const addGenre = () => {
        GenreApi.addGenre(newOptionGenre).then((res) => {
            if(res.status == 200){
                GenreApi.getGenre().then((res) => {
                    setGenre(res.data)
                })
            }
        })
    }

    const addType = () => {
        TypeApi.addType(newOptionType).then((res) => {
            if(res.status == 200){
                TypeApi.getType().then((res) => {
                    setType(res.data)
                })
            }
        })
    }


    return <div>
        <h3>Настройки полей</h3>
        <br/>

        <div style={{display: "flex", justifyContent: "space-around"}}>
            <div style={{width: "45%"}}>
                <InfiniteScrollComponent data={genre} name={"Жанры"}/>
                <br/>
                <Space.Compact style={{ width: '100%' }}>
                    <Input placeholder="Добавить новый жанр" onChange={(e) => setNewOptionGenre(e.target.value)}/>
                    <Button type="primary" onClick={addGenre}>Submit</Button>
                </Space.Compact>
            </div>

            <div style={{width: "45%"}}>
                <InfiniteScrollComponent data={type} name={"Типы"}/>
                <br/>
                <Space.Compact style={{ width: '100%' }}>
                    <Input placeholder="Добавить новый тип"  onChange={(e) => setNewOptionType(e.target.value)}/>
                    <Button type="primary" onClick={addType}>Submit</Button>
                </Space.Compact>
            </div>
        </div>

    </div>
}