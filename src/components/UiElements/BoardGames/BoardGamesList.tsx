import {Flex} from "antd";
import {CardBG} from "./Card/CardBG.tsx";
import {BoardGameMinInfoDto} from "../../../tools/interfaces/DTO/boardGame.dto.ts";


export const BoardGamesList = ({type, dataBoardGames}: {
    type: "all" | "user",
    dataBoardGames: BoardGameMinInfoDto[],
}) => {

    return (
        <Flex wrap="wrap" gap="middle" justify={"center"}>
            {dataBoardGames.map(boardGame => (
                <CardBG key={boardGame.id} boardGame={boardGame} type={type}/>
            ))}
        </Flex>
    )


}