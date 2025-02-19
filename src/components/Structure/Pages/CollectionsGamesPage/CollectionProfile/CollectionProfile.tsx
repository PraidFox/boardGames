import {useParams} from "react-router";
import {TitleEdit} from "./TitleEdit.tsx";
import {DescriptionEdit} from "./DescriptionEdit.tsx";
import {FieldSearchAddGames} from "../../../../UiElements/Fields/FieldSerchAddByGames.tsx";
import {notEditCollection} from "../../../../../tools/storages/const.ts";
import {Button} from "antd";
import {useDeleteCollection, useGetCollection} from "../../../../../tools/hooks/queries/UserCollection.queries.ts";
import {Cover} from "./Cover.tsx";
import {StatisticInfo} from "./StatisticInfo.tsx";
import {ConfidentialType} from "./ConfidentialType.tsx";
import {BoardGamesList} from "../../../../UiElements/BoardGames/BoardGamesList.tsx";


export const CollectionProfile = ({whoseCollections, myCollections}: {
    whoseCollections: string,
    myCollections: boolean
}) => {
    const {collectionAlias} = useParams();
    const editingAllowed = !notEditCollection.includes(collectionAlias!);

    const {data: collection, isLoading, isError} = useGetCollection(whoseCollections, collectionAlias);
    const deleteCollection = useDeleteCollection(whoseCollections)

    if (!collectionAlias) return <div>Необходимо выбрать конкретную коллекцию</div>
    if (isLoading) return <div>Загрузка...</div>
    if (isError) return <div>Такой коллекции не существует (вероятнее всего её переименовали)</div>
    if (!collection) return <div>Нет данных</div>


    console.log("collection", collection.games)
    return (
        <>


            <StatisticInfo updateDate={collection.updateDate}/>
            {editingAllowed && myCollections &&
                <Button onClick={() => deleteCollection.mutate(collectionAlias)}>Удалить коллекцию</Button>}
            <div style={{display: "flex", gap: "2%", width: "100%"}}>
                <Cover collection={collection}/>
                <div style={{width: "100%"}}>

                    {editingAllowed && myCollections &&
                        <TitleEdit key={collectionAlias+'title'}
                            name={collection.name}
                            collectionAlias={collectionAlias}
                            whoseCollections={whoseCollections}
                        />
                    }

                    {!editingAllowed && <h1>{collection.name}</h1>}

                    <br/>


                    {editingAllowed && myCollections &&
                        <DescriptionEdit key={collectionAlias+'description'}
                            description={collection.description}
                            collectionAlias={collectionAlias}
                            whoseCollections={whoseCollections}
                        />
                    }
                    {!editingAllowed && <p>{collection.description ? collection.description : "Ой, нет описания"}</p>}
                </div>
            </div>
            <h4>Уровень видимости</h4>
            {editingAllowed && myCollections &&
                <ConfidentialType
                    confidentialType={collection.confidentialType}
                    collectionAlias={collectionAlias}
                    whoseCollections={whoseCollections}
                />
            }
            <hr/>
            {myCollections &&
                <FieldSearchAddGames collectionAlias={collectionAlias} whoseCollections={whoseCollections} excludedGamesId={collection.games.map(game => game.id)}/>}


            <BoardGamesList dataBoardGames={collection.games} />

        </>
    )

}