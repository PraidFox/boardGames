import {Outlet, useParams} from "react-router";
import {useAddEmptyCollection, useUserCollections} from "../../../../../tools/hooks/queries/UserCollection.queries.ts";
import {LoadingPanda} from "../../../../UiElements/LoadingPanda.tsx";
import {useGetMe} from "../../../../../tools/hooks/queries/Users.queries.ts";
import {CardCollection} from "./CardCollection.tsx";


export const UserCollectionsBoardGames = () => {
    const {userName} = useParams();
    const {data: collections, isLoading} = useUserCollections(userName)
    const {data: userInfo} = useGetMe()

    const addNewCollection = useAddEmptyCollection()

    if(isLoading) return <LoadingPanda/>

    if(userName){
        return (<>
                {collections && <>
                    <div style={{display: "flex", gap: "10px", alignItems: "center"}}><h2>{"Мои коллекции"}</h2></div>

                    <br/>
                    <div style={{display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap"}}>
                        {collections.map(collection => <CardCollection key={collection.alias} collection={collection}
                                                                       userName={userName}/>)}
                    </div>
                    <div
                        style={{
                            padding: "10px",
                            width: "200px",
                            height: "200px",
                            border: "1px solid black",
                            cursor: 'pointer'
                        }}
                        onClick={() => addNewCollection.mutateAsync(userName)}
                    >
                        Добавить коллекцию
                    </div>

                </>}

                <br/>
                <hr/>

                <Outlet/>


            </>
        )
    }

}