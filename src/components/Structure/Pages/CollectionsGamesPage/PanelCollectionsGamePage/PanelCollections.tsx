import {CardCollection} from "./CardCollection.tsx";
import {useUserCollections} from "../../../../../tools/hooks/queries/UserCollection.queries.ts";
import {CardAddCollection} from "./CardAddCollection.tsx";

export const PanelCollections = ({whoseCollections, isMyCollections}: { whoseCollections: string, isMyCollections: boolean }) => {

    const {data: collections, isLoading, isError} = useUserCollections(whoseCollections)


    if (isLoading) return <>Загружается collections</>
    if (isError) return <>Произошла ошибка</>
    if (!collections) return <>Нет данных</>

    return (
        <>
            <div style={{display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap"}}>
                {collections.map(collection =>
                    <CardCollection
                        key={collection.alias}
                        collection={collection}
                        whoseCollections={whoseCollections}
                        isMyCollections={isMyCollections}
                    />
                )}
                {isMyCollections && <CardAddCollection whoseCollections={whoseCollections}/> }
            </div>

        </>
    )
}