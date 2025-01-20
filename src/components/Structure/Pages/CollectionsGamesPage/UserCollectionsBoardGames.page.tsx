import {useParams} from "react-router";
import {useGetMe} from "../../../../tools/hooks/queries/Users.queries.ts";
import {PanelCollections} from "./PanelCollectionsGamePage/PanelCollections.tsx";
import {CollectionProfile} from "./CollectionProfile/CollectionProfile.tsx";

//TODO еще нужна будет проверка на уровень видимости
//TODO в поиске игр для добавления в коллекцию, дать чекбокс для фильтрации только в своих добавленных играх
export const UserCollectionsBoardGamesPage = () => {
    const {userName:whoseCollections} = useParams();
    const {data: userInfo} = useGetMe()

    const myCollections: boolean = whoseCollections === userInfo?.userName

    if (!whoseCollections) { return <div>No data available</div>; }

    return (<>
            <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                <h2>{myCollections? "Моя коллекция" : `Коллекции: ${whoseCollections}`}</h2>
            </div>
            <PanelCollections whoseCollections={whoseCollections} myCollections={myCollections}/>
            <br/>
            <hr/>
            <CollectionProfile whoseCollections={whoseCollections} myCollections={myCollections}/>

        </>
    )


}
