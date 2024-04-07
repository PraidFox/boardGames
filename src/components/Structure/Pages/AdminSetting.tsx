import {useEffect, useState} from "react";
import {GenreApi} from "../../../tools/rest/GenreApi";
import {BoardGamesDTO, GenreDTO, TypeDTO} from "../../../tools/interfaces/DTOinterface";
import {TypeApi} from "../../../tools/rest/TypeApi";
import {Button, Input, Select, Space} from "antd";
import {InfiniteScrollAnt} from "../../UiElements/InfiniteScrollAnt";
import {BoardGameApi} from "../../../tools/rest/BoardGameApi";
import {MyError} from "../../../tools/storages/const";
import {checkError} from "../../../tools/utils/utilsTsx";
import {useErrorInfo} from "../../../tools/hooks/useErrorInfo";


export const AdminSetting = () => {
    const [genre, setGenre] = useState<GenreDTO[]>([])
    const [type, setType] = useState<TypeDTO[]>([])
    const [boardGames, setBoardGames] = useState<BoardGamesDTO[]>([])
    const [newOptionGenre, setNewOptionGenre] = useState("")
    const [newOptionType, setNewOptionType] = useState("")
    const [addGenreLoading, setAddGenreLoading] = useState(false)
    const [addTypeLoading, setAddTypeLoading] = useState(false)
    const [deleteOptionsGenre, setDeleteOptionsGenre] = useState<number[]>([])
    const [deleteOptionsType, setDeleteOptionsType] = useState<number[]>([])
    const [deleteBoardGameId, setDeleteBoardGameId] = useState<number | null>()

    const {setErrorInfo} = useErrorInfo()


    useEffect(() => {
        GenreApi.getGenre().then((res) => {
            setGenre(res.data)
        })

        TypeApi.getType().then((res) => {
            setType(res.data)
        })

        BoardGameApi.getBoardGame().then((res) => {
            // const boardGames: BoardGamesDTO[] = res.data
            // const optionsBoardGame:OptionsDTO<null>[] = boardGames.map(boardGame => {return {id: +boardGame.id, name: boardGame.name}})
            // const optionsForField = convertOptions(optionsBoardGame)
            setBoardGames(res.data)
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
                console.log("Меня вызваля")
                setErrorInfo({nameError: r.message})
                setAddGenreLoading(false)
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
                setAddTypeLoading(false)
                alert(r.response.data)
            }
        )
    }

    const deleteOptions = (id: number, fieldName: string) => {
        if (fieldName === "Жанры") {
            GenreApi.deleteGenre(id).then((res) => {
                GenreApi.getGenre().then((res) => {
                    setGenre(res.data)
                })
            })
        } else if (fieldName === "Типы") {
            TypeApi.deleteType(id).then((res) => {
                TypeApi.getType().then((res) => {
                    setType(res.data)
                })
            })
        }
    }

    const content = (id: number, fieldName: string) => {
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
        setDeleteBoardGameId(+value)
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
                <InfiniteScrollAnt data={genre} name={"Жанры"} content={content}/>
                <br/>
                <Space.Compact style={{width: '100%'}}>
                    <Input placeholder="Добавить новый жанр" onChange={(e) => setNewOptionGenre(e.target.value)}/>
                    <Button type="primary" onClick={addGenre} loading={addGenreLoading}>Submit</Button>
                </Space.Compact>
            </div>

            <div style={{width: "45%"}}>
                <InfiniteScrollAnt data={type} name={"Типы"} content={content}/>
                <br/>
                <Space.Compact style={{width: '100%'}}>
                    <Input placeholder="Добавить новый тип" onChange={(e) => setNewOptionType(e.target.value)}/>
                    <Button type="primary" onClick={addType} loading={addTypeLoading}>Submit</Button>
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
    </div>
}