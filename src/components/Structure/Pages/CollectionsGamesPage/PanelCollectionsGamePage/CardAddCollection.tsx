import {useAddEmptyCollection} from "../../../../../tools/hooks/queries/UserCollection.queries.ts";

export const CardAddCollection = ({whoseCollections}: {whoseCollections: string}) => {
    const addNewCollection = useAddEmptyCollection(whoseCollections)

    return (
        <div
            style={{
                padding: "10px",
                width: "200px",
                height: "100px",
                border: "1px solid black",
                cursor: 'pointer'
            }}
            onClick={() => addNewCollection.mutateAsync()}
        >
            Добавить коллекцию
        </div>
    )
}