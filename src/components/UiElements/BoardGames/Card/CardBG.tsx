import {Card} from "antd";
import {BoardGameMinInfoDto} from "../../../../tools/interfaces/DTO/boardGame.dto.ts";
import {DeleteGameInCollections, FullInfoBg, LikeBG} from "./ActionsCard.tsx";
import {ImagePreview} from "../../ImagePreview.tsx";
import {useParams} from "react-router";
import {useGetMe} from "../../../../tools/hooks/queries/Users.queries.ts";

const {Meta} = Card;


export const CardBG = ({boardGame}: { boardGame: BoardGameMinInfoDto}) => {
    const {userName:whoseCollections} = useParams();
    const {collectionAlias} = useParams();
    const {data: userInfo} = useGetMe()

    const actionsButtons = [
        <FullInfoBg boardGameId={boardGame.id}/>,
    ]

    if(!whoseCollections && !collectionAlias) {
        actionsButtons.push(<LikeBG boardGameId={boardGame.id}/>)
    }

    if (whoseCollections && collectionAlias && userInfo) {
        if(userInfo.userName === whoseCollections) {
            actionsButtons.push(
                <DeleteGameInCollections boardGameId={boardGame.id} whoseCollections={whoseCollections} collectionAlias={collectionAlias}/>
            )
        }
    }

    console.log("boardGame", boardGame)

    return (<Card
            style={{width: 350}}
            cover={

                <ImagePreview fileId={boardGame.preview?.id} nameAlt={boardGame.name}/>
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

