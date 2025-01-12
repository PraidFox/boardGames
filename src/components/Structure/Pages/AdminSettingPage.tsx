import {useEffect, useState} from "react";
import {GenreService} from "../../../tools/rest/services/Genre.service.ts";
import {CurrentBoardGameDto, GenreDTO, OptionDTO, TypeDTO} from "../../../tools/interfaces/DTO/boardGame.dto.ts";
import {TypeService} from "../../../tools/rest/services/Type.service.ts";
import {Button, Input, Select, Space} from "antd";
import {InfiniteScrollAnt} from "../../UiElements/InfiniteScrollAnt";
import {BoardGameService} from "../../../tools/rest/services/BoardGame.service.ts";
import {useErrorInfo} from "../../../tools/hooks/hooksContext/useErrorInfo";
import {RoleService} from "../../../tools/rest/services/Role.service.ts";
import {UsersService} from "../../../tools/rest/services/Users.service.ts";


export const AdminSettingPage = () => {
    const [genres, setGenres] = useState<GenreDTO[]>([])
    const [types, setTypes] = useState<TypeDTO[]>([])
    const [roles, setRoles] = useState<OptionDTO[]>([])
    const [boardGames, setBoardGames] = useState<CurrentBoardGameDto[]>([])
    const [users, setUsers] = useState<{
        userName: string,
        email: string,
        roles: string[]
    }[]>([])

    const [newOptionGenre, setNewOptionGenre] = useState("")
    const [newOptionType, setNewOptionType] = useState("")
    const [newOptionRole, setNewOptionRole] = useState("")

    const [addGenreLoading, setAddGenreLoading] = useState(false)
    const [addTypeLoading, setAddTypeLoading] = useState(false)
    const [addRoleLoading, setAddRoleLoading] = useState(false)

    const [deleteOptionsGenre, setDeleteOptionsGenre] = useState<string[]>([])
    const [deleteOptionsType, setDeleteOptionsType] = useState<string[]>([])
    const [deleteBoardGameId, setDeleteBoardGameId] = useState<string>()

    const [valueRoleToUser, setValueRoleToUser] = useState<string[]>([])
    const [valueUser, setValueUser] = useState<string>()

    const {setErrorInfo} = useErrorInfo()

    useEffect(() => {
        const p0 = GenreService.getGenres()
        const p1 = TypeService.getTypes()
        const p2 = BoardGameService.getAllBoardGame()
        const p3 = RoleService.getRoles()
        const p4 = UsersService.getAllUsers()

        Promise.all([p0, p1, p2, p3, p4]).then((res) => {
            setGenres(res[0].data)
            setTypes(res[1].data)
            setBoardGames(res[2].data)
            setRoles(res[3].data)
            setUsers(res[4].data)
        })
    }, []);

    const addGenre = () => {
        setAddGenreLoading(true)
        GenreService.addGenre(newOptionGenre).then(() => {
            GenreService.getGenres().then((res) => {
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
        TypeService.addType(newOptionType).then(() => {
            TypeService.getTypes().then((res) => {
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
        RoleService.addRole(newOptionRole).then(() => {
            RoleService.getRoles().then((res) => {
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
            GenreService.deleteGenre(id).then(() => {
                GenreService.getGenres().then((res) => {
                    setGenres(res.data)
                })
            })
        } else if (fieldName === "Типы") {
            TypeService.deleteType(id).then(() => {
                TypeService.getTypes().then((res) => {
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

    const filterOption = (input: string, option?: {
        label: string;
        value: string
    }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    const handleDeleteGame = () => {
        BoardGameService.deleteBoardGame(deleteBoardGameId!)
    }

    const onChangeUser = (userName: string) => {
        setValueUser(userName)
        UsersService.getUserRoles(userName).then(r => setValueRoleToUser(r.data))
    }
    const onChangeRole = (value: string[]) => {
        setValueRoleToUser(value)
    }

    const handeRecordRole = () => {
        UsersService.recordRoleToUser(valueRoleToUser, valueUser!)
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
        <h3>Удаление настольной игры:</h3>
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
        <div style={{display: "flex"}}>
            <Select
                style={{width: '20%'}}
                showSearch
                placeholder="Выбрать пользователя"
                onChange={onChangeUser}
                filterOption={filterOption}
                options={users.map(role => {
                    return {label: role.userName, value: role.userName}
                })}
            />
            <Select
                style={{width: '80%'}}
                mode={"multiple"}
                showSearch
                placeholder="Выбрать роли"
                onChange={onChangeRole}
                filterOption={filterOption}
                options={roles.map(role => {
                    return {label: role.name, value: role.id.toString()}
                })}
                value={valueRoleToUser}
            />

            <Button danger disabled={valueRoleToUser.length === 0 || !valueUser}
                    onClick={handeRecordRole}>Сохранить</Button>
        </div>
    </div>
}