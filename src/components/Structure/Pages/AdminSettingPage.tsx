import {useEffect, useState} from "react";
import {GenreApi} from "../../../tools/rest/GenreApi";
import {BoardGamesDTO, GenreDTO, RoleDTO, TypeDTO} from "../../../tools/interfaces/DTOinterface";
import {TypeApi} from "../../../tools/rest/TypeApi";
import {Button, Input, Select, Space} from "antd";
import {InfiniteScrollAnt} from "../../UiElements/InfiniteScrollAnt";
import {BoardGameApi} from "../../../tools/rest/BoardGameApi";
import {useErrorInfo} from "../../../tools/hooks/hooksContext/useErrorInfo";
import {RoleApi} from "../../../tools/rest/RoleApi";


export const AdminSettingPage = () => {
    const [genres, setGenres] = useState<GenreDTO[]>([])
    const [types, setTypes] = useState<TypeDTO[]>([])
    const [roles, setRoles] = useState<RoleDTO[]>([])
    const [boardGames, setBoardGames] = useState<BoardGamesDTO[]>([])

    const [newOptionGenre, setNewOptionGenre] = useState("")
    const [newOptionType, setNewOptionType] = useState("")
    const [newOptionRole, setNewOptionRole] = useState("")

    const [addGenreLoading, setAddGenreLoading] = useState(false)
    const [addTypeLoading, setAddTypeLoading] = useState(false)
    const [addRoleLoading, setAddRoleLoading] = useState(false)

    const [deleteOptionsGenre, setDeleteOptionsGenre] = useState<string[]>([])
    const [deleteOptionsType, setDeleteOptionsType] = useState<string[]>([])
    const [deleteBoardGameId, setDeleteBoardGameId] = useState<string>()

    const {setErrorInfo} = useErrorInfo()


    useEffect(() => {
        const p1 = GenreApi.getGenre()
        const p2 = TypeApi.getType()
        const p3 = BoardGameApi.getAllBoardGame()
        const p4 = RoleApi.getRoles()

        Promise.all([p1, p2, p3, p4]).then((res) => {
            setGenres(res[0].data)
            setTypes(res[1].data)
            setBoardGames(res[2].data)
            setRoles(res[3].data)
        })
    }, []);

    const addGenre = () => {
        setAddGenreLoading(true)
        GenreApi.addGenre(newOptionGenre).then((res) => {
            GenreApi.getGenre().then((res) => {
                setGenres(res.data)
                setAddGenreLoading(false)
            })
        }).catch(r => {
                setErrorInfo({nameError: r.message})
                setAddGenreLoading(false)
            }
        )
    }

    const addType = () => {
        setAddTypeLoading(true)
        TypeApi.addType(newOptionType).then((res) => {
            TypeApi.getType().then((res) => {
                setTypes(res.data)
                setAddTypeLoading(false)
            })
        }).catch(r => {
                setAddTypeLoading(false)
                alert(r.response.data)
            }
        )
    }

    const addRole = () => {
        setAddRoleLoading(true)
        RoleApi.addRole(newOptionRole).then((res) => {
            RoleApi.getRoles().then((res) => {
                setRoles(res.data)
                setAddRoleLoading(false)
            })
        }).catch(r => {
                setAddRoleLoading(false)
                alert(r.response.data)
            }
        )
    }

    const deleteOptions = (id: string, fieldName: string) => {
        if (fieldName === "Жанры") {
            GenreApi.deleteGenre(id).then((res) => {
                GenreApi.getGenre().then((res) => {
                    setGenres(res.data)
                })
            })
        } else if (fieldName === "Типы") {
            TypeApi.deleteType(id).then((res) => {
                TypeApi.getType().then((res) => {
                    setTypes(res.data)
                })
            })
        }
    }

    const content = (id: string, fieldName: string) => {
        if (fieldName === "Жанры") {
            const countIdInDelete = deleteOptionsGenre.filter(x => x === id)
            if (countIdInDelete.length === 0) {
                return <Button onClick={() => setDeleteOptionsGenre(res => [...res, id])}>Удалить</Button>
            } else {
                return <Button onClick={() => deleteOptions(id, fieldName)}
                               style={{background: "red", color: "white"}}>Удалить</Button>
            }

        } else if (fieldName === "Типы") {
            const countIdInDelete = deleteOptionsType.filter(x => x === id)
            if (countIdInDelete.length === 0) {
                return <Button onClick={() => setDeleteOptionsType(res => [...res, id])}>Удалить</Button>
            } else {
                return <Button onClick={() => deleteOptions(id, fieldName)}
                               style={{background: "red", color: "white"}}>Удалить</Button>
            }
        }
    }

    const onChangeDeleteBoardGame = (value: string) => {
        setDeleteBoardGameId(value)
    };

    const filterOption = (input: string, option?: { label: string; value: string }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    const handleDeleteGame = () => {
        BoardGameApi.deleteBoardGame(deleteBoardGameId!).then(r => console.log(r)).catch(() => alert("Что то пошло не так"))
    }

    return <div>
        <h3>Настройки полей</h3>
        <br/>

        <div style={{display: "flex", justifyContent: "space-around"}}>
            <div style={{width: "45%"}}>
                <InfiniteScrollAnt data={genres} name={"Жанры"} content={content}/>
                <br/>
                <Space.Compact style={{width: '100%'}}>
                    <Input placeholder="Добавить новый жанр" onChange={(e) => setNewOptionGenre(e.target.value)}/>
                    <Button type="primary" onClick={addGenre} loading={addGenreLoading}>Submit</Button>
                </Space.Compact>
            </div>

            <div style={{width: "45%"}}>
                <InfiniteScrollAnt data={types} name={"Типы"} content={content}/>
                <br/>
                <Space.Compact style={{width: '100%'}}>
                    <Input placeholder="Добавить новый тип" onChange={(e) => setNewOptionType(e.target.value)}/>
                    <Button type="primary" onClick={addType} loading={addTypeLoading}>Submit</Button>
                </Space.Compact>
            </div>

            <div style={{width: "45%"}}>
                <InfiniteScrollAnt data={roles} name={"Роли"} content={content}/>
                <br/>
                <Space.Compact style={{width: '100%'}}>
                    <Input placeholder="Добавить новую роль" onChange={(e) => setNewOptionRole(e.target.value)}/>
                    <Button type="primary" onClick={addRole} loading={addRoleLoading}>Submit</Button>
                </Space.Compact>
            </div>
        </div>
        <br/>
        <hr/>
        <br/>
        <h3>Удаление настолки:</h3>
        <br/>
        <Select
            style={{width: '80%'}}
            showSearch
            placeholder="Выбрать настолку для удаления"
            onChange={onChangeDeleteBoardGame}
            filterOption={filterOption}
            options={boardGames.map(boardGame => {
                return {label: boardGame.name, value: boardGame.id.toString()}
            })}
        />
        <Button danger disabled={!deleteBoardGameId} onClick={handleDeleteGame}>Удалить</Button>
        <br/>
        <br/>
        <h3>Добавление ролей пользователю:</h3>
        <br/>
        <Select
            style={{width: '80%'}}
            mode={"multiple"}
            showSearch
            placeholder="Выбрать роли"
            onChange={onChangeDeleteBoardGame}
            filterOption={filterOption}
            options={roles.map(role => {
                return {label: role.name, value: role.id.toString()}
            })}
        />
        <Button danger disabled={!deleteBoardGameId} onClick={handleDeleteGame}>Добавить</Button>
    </div>
}