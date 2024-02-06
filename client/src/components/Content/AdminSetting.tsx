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
    const [addGenreLoading, setAddGenreLoading] = useState(false)
    const [addTypeLoading, setAddTypeLoading] = useState(false)
    const [deleteOptionsGenre, setDeleteOptionsGenre] = useState<number[]>([])
    const [deleteOptionsType, setDeleteOptionsType] = useState<number[]>([])

    useEffect(() => {
        GenreApi.getGenre().then((res) => {
            setGenre(res.data)
        })

        TypeApi.getType().then((res) => {
            setType(res.data)
        })


    }, []);

    const addGenre = () => {
        setAddGenreLoading(true)
        GenreApi.addGenre(newOptionGenre).then((res) => {
            GenreApi.getGenre().then((res) => {
                setGenre(res.data)
                setAddGenreLoading(false)
            })
        }).catch(r => {
                setAddGenreLoading(false)
                alert(r.response.data)
            }
        )
    }

    const addType = () => {
        setAddTypeLoading(true)
        TypeApi.addType(newOptionType).then((res) => {
            TypeApi.getType().then((res) => {
                setType(res.data)
                setAddTypeLoading(false)
            })
        }).catch(r => {
                setAddGenreLoading(false)
                alert(r.response.data)
            }
        )
    }

    const deleteOptions = (id: number, fieldName: string) => {
        if (fieldName == "Жанры") {
            GenreApi.deleteGenre(id).then((res) => {
                GenreApi.getGenre().then((res) => {
                    setGenre(res.data)
                })
            })
        } else if (fieldName == "Типы") {
            TypeApi.deleteType(id).then((res) => {
                TypeApi.getType().then((res) => {
                    setType(res.data)
                })
            })
        }
    }


    console.log(deleteOptionsGenre)

    const content = (id: number, fieldName: string) => {
        if (fieldName == "Жанры") {
            const countIdInDelete = deleteOptionsGenre.filter(x => x == id)
            if (countIdInDelete.length == 0) {
                return <Button onClick={() => setDeleteOptionsGenre(res => [...res, id])}>Удалить</Button>
            } else {
                return <Button onClick={() => deleteOptions(id, fieldName)}
                               style={{background: "red", color: "white"}}>Удалить</Button>
            }

        } else if (fieldName == "Типы") {
            const countIdInDelete = deleteOptionsType.filter(x => x == id)
            if (countIdInDelete.length == 0) {
                return <Button onClick={() => setDeleteOptionsType(res => [...res, id])}>Удалить</Button>
            } else {
                return <Button onClick={() => deleteOptions(id, fieldName)}
                               style={{background: "red", color: "white"}}>Удалить</Button>
            }
        }
    }


    return <div>
        <h3>Настройки полей</h3>
        <br/>

        <div style={{display: "flex", justifyContent: "space-around"}}>
            <div style={{width: "45%"}}>
                <InfiniteScrollComponent data={genre} name={"Жанры"} content={content}/>
                <br/>
                <Space.Compact style={{width: '100%'}}>
                    <Input placeholder="Добавить новый жанр" onChange={(e) => setNewOptionGenre(e.target.value)}/>
                    <Button type="primary" onClick={addGenre} loading={addGenreLoading}>Submit</Button>
                </Space.Compact>
            </div>

            <div style={{width: "45%"}}>
                <InfiniteScrollComponent data={type} name={"Типы"} content={content}/>
                <br/>
                <Space.Compact style={{width: '100%'}}>
                    <Input placeholder="Добавить новый тип" onChange={(e) => setNewOptionType(e.target.value)}/>
                    <Button type="primary" onClick={addType} loading={addTypeLoading}>Submit</Button>
                </Space.Compact>
            </div>
        </div>

    </div>
}