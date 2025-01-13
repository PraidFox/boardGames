import {Card} from "antd";
import {BoardGameMinInfoDto} from "../../../../tools/interfaces/DTO/boardGame.dto.ts";
import {DeleteGameInCollections, FullInfoBg, LikeBG} from "./ActionsCard.tsx";
import {ImagePreview} from "../../ImagePreview.tsx";

const {Meta} = Card;


export const CardBG = ({boardGame, type}: { boardGame: BoardGameMinInfoDto, type: "all" | "user" }) => {
    const actionsButtons = [
        <FullInfoBg boardGameId={boardGame.id}/>,
        <LikeBG boardGameId={boardGame.id}/>,

    ]

    if (type == 'user') {
        actionsButtons.push(
            <DeleteGameInCollections boardGameId={boardGame.id}/>
        )
    }

    return (<Card
            style={{width: 350}}
            cover={

                <ImagePreview fileId={boardGame.preview?.id} gameName={boardGame.name}/>
            }
            actions={actionsButtons}
        >
            <hr/>
            Наш рейтинг: {boardGame.rating === 0 ? "-" : boardGame.rating} /
            Тессера: {boardGame.ratingTessera === 0 ? "-" : boardGame.ratingTessera} /
            Bgg: {boardGame.ratingBgg === 0 ? "-" : boardGame.ratingBgg}
            <hr/>

            <Meta
                title={boardGame.name}
                description={<div style={{height: "150px"}}>{boardGame.description}</div>}
            />
        </Card>
    )
}

