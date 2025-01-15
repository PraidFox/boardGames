import {useParams} from "react-router";
import {useGetMe} from "../../../../tools/hooks/queries/Users.queries.ts";
import {PanelCollections} from "./PanelCollectionsGamePage/PanelCollections.tsx";
import {CollectionGamesPage} from "./CollectionGamesPage/CollectionGamesPage.tsx";
import {useEffect, useState} from "react";

//TODO еще нужна будет проверка на уровень видимости
export const UserCollectionsBoardGamesPage = () => {
    const {whoseCollections} = useParams();
    const [myCollections, setMyCollections] = useState<boolean>(false)
    
    const {data: userInfo} = useGetMe()

    useEffect(() => {
        if(whoseCollections === userInfo?.userName){
            setMyCollections(true)
        }
    }, [userInfo, whoseCollections]);


    if (!whoseCollections) { return <div>No data available</div>; }

    return (<>
            <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                <h2>{myCollections? "Моя коллекция" : `Коллекции: ${whoseCollections}`}</h2>
            </div>
            <PanelCollections whoseCollections={whoseCollections} myCollections={myCollections}/>
            <br/>
            <hr/>
            <CollectionGamesPage/>
        </>
    )


}
