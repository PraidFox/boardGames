import {Button} from "antd";
import {NavLink} from "react-router";
import {PathStorage} from "../../../../../tools/storages/Path.storage.ts";
import {notEditCollection} from "../../../../../tools/storages/const.ts";
import {ConfirmationModal} from "../../../../UiElements/СonfirmationModal.tsx";
import {GameCollectionDTO} from "../../../../../tools/interfaces/DTO/userColletions.dto.ts";
import {useAddEmptyCollection, useDeleteCollection} from "../../../../../tools/hooks/queries/UserCollection.queries.ts";


export const CardCollection = ({collection, userName}: {
    collection: GameCollectionDTO,
    userName: string
}) => {

    const deleteCollections = useDeleteCollection()
    const addNewCollection = useAddEmptyCollection()

    return (
        <div key={collection.alias}>
            <NavLink
                to={PathStorage.COLLECTIONS + "/" + userName + "/" + collection.alias}
                state={{id: collection.alias}}
            >
                <div
                    style={{
                        padding: "10px",
                        width: "200px",
                        height: "200px",
                        border: "1px solid black"
                    }}
                >
                    {collection.name}
                </div>

            </NavLink>

            {!notEditCollection.includes(collection.alias) &&
                <div style={{padding: "10px", width: "200px", border: "1px solid black"}}>
                    {collection.gameCount > 0 ?
                        <ConfirmationModal runFunction={() => deleteCollections.mutateAsync({
                            collectionAlias: collection.alias,
                            userName
                        })}/>
                        :
                        <Button onClick={() => deleteCollections.mutateAsync({
                            collectionAlias: collection.alias,
                            userName
                        })}>Удалить</Button>
                    }
                </div>
            }
            <div
                style={{
                    padding: "10px",
                    width: "200px",
                    height: "200px",
                    border: "1px solid black",
                    cursor: 'pointer'
                }}
                // onClick={() => addNewCollection.mutateAsync(userName)}
                onClick={() => addNewCollection.mutateAsync(userName)}
            >
                Добавить коллекцию
            </div>
        </div>)

}