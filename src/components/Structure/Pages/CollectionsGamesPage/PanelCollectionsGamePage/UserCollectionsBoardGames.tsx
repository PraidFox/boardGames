import {useParams} from "react-router";
import {useUserCollections} from "../../../../../tools/hooks/queries/UserCollection.queries.ts";
import {LoadingPanda} from "../../../../UiElements/LoadingPanda.tsx";
import {useGetMe} from "../../../../../tools/hooks/queries/Users.queries.ts";
import {CollectionGamesPage} from "../CollectionGamesPage/CollectionGamesPage.tsx";
import {CardCollection} from "./CardCollection.tsx";


export const UserCollectionsBoardGames = () => {
    const {userName} = useParams();
    const {data: collections, isLoading} = useUserCollections(userName)
    const {data: userInfo} = useGetMe()




    if(isLoading) return <LoadingPanda/>

    if(userName){
        return (<>
                {collections &&<>
                    <div style={{display: "flex", gap: "10px", alignItems: "center"}}><h2>{"Мои коллекции"}</h2></div>

                    <br/>
                    <div style={{display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap"}}>
                        {collections.map(collection => <CardCollection collection={collection} userName={userName}/> )}
                    </div>

                </>}

                <br/>
                <hr/>
                <CollectionGamesPage/>

            </>
        )
    }

}