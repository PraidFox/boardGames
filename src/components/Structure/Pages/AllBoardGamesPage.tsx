import {DrawerSidePanel} from "../../UiElements/DrawerSidePanel";
import {FormAddBoardGameInModeration} from "../../Forms/FormsAddBoardGame/FormAddBoardGameInModeration";
import {useEffect, useReducer, useState} from "react";
import {BoardGameApi} from "../../../tools/rest/BoardGameApi";
import {BoardGamesDTO} from "../../../tools/interfaces/DTOinterface";
import {CardBoardGame} from "../../UiElements/СardBoardGame";
import {DeleteOutlined, EditOutlined, LikeOutlined} from "@ant-design/icons";
import {Flex} from "antd";
import {NavLink} from "react-router-dom";
import {FilterBoardGamesPanel} from "../../Forms/FormFilter/FilterBoardGamesPanel";
import {reducerFilterFieldValues} from "../../Forms/FormFilter/reducerFilterFieldValues";

export const AllBoardGamesPage = ({type}: { type: "all" | "user" }) => {
    const [dataBoardGames, setDataBoardGame] = useState<BoardGamesDTO[]>([])
    const [needUpdate, setNeedUpdate] = useState(true)
    const [filterFieldValues, setFilterFieldValues] = useReducer(reducerFilterFieldValues, undefined)

    useEffect(() => {
        if (needUpdate) {
            if (type === "all") {
                BoardGameApi.getBoardGame().then(res => setDataBoardGame(res.data))
            } else {
                //ЗАМЕНИТЬ НА ПОЛУЧЕНИЕ НАСТОЛОК ИМЕННО ПОЛЬЗОВАТЕЛЯ
                BoardGameApi.getBoardGame().then(res => setDataBoardGame(res.data))
            }
            setNeedUpdate(false)
        }
    }, [needUpdate, type]);

    const updateBoardGame = () => {
        setNeedUpdate(true)
    }


    const deleteGame = (id: number) => {
        //УДАЛЕНИЕ ИГРЫ ИМЕННО ИЗ КОЛЛЕКЦИИ ПОЛЬЗОВАТЕЛЯ
    }
    const getFooterForCard = (boardGame: BoardGamesDTO) => {
        let footerCard = [
            <NavLink
                key={"link" + boardGame.id}
                to={`/boardGame/${boardGame.id}`}
                state={{boardGame}}
            >
                Подробнее
            </NavLink>
        ]

        if (type === "user") {
            footerCard.push(<DeleteOutlined
                key={"delete" + boardGame.id}
                style={{color: 'red'}}
                onClick={() => deleteGame(boardGame.id!)}
            />)
        } else {
            footerCard.push(<LikeOutlined key={"like" + boardGame.id} style={{color: 'green'}}/>)
            //Здесь еще проверка на АДМИНА
            footerCard.push(<EditOutlined key={"edit" + boardGame.id}/>)
        }

        return footerCard
    }

    return <div>
        <FilterBoardGamesPanel activeFilter={!!filterFieldValues} valueFieldAge={filterFieldValues?.age}
                               setFilterFieldValues={setFilterFieldValues}/>
        <br/>
        <h1>{type === "all" ? "Все игры" : "Мои игры"}</h1>
        <Flex wrap="wrap" gap="middle">
            {dataBoardGames?.map(boardGame => (
                <CardBoardGame data={boardGame} key={boardGame.id}>
                    {getFooterForCard(boardGame)}
                </CardBoardGame>
            ))}
        </Flex>

        <br/>

        {type === "user" &&
            <DrawerSidePanel>
                {(onClose) => (<FormAddBoardGameInModeration onClose={onClose} setNeedUpdate={updateBoardGame}/>)}
            </DrawerSidePanel>
        }

    </div>
}