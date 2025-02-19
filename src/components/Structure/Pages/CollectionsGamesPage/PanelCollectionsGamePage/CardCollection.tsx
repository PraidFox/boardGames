import {Button} from "antd";
import {NavLink} from "react-router";
import {notEditCollection} from "../../../../../tools/storages/const.ts";
import {ConfirmationModal} from "../../../../UiElements/СonfirmationModal.tsx";
import {GameCollectionDTO} from "../../../../../tools/interfaces/DTO/userColletions.dto.ts";
import {useDeleteCollection} from "../../../../../tools/hooks/queries/UserCollection.queries.ts";

const styles = {
    card: {
        padding: "10px",
        width: "200px",
        height: "100px",
        border: "1px solid black"
    },
    deleteContainer: {
        padding: "10px",
        width: "200px",
        border: "1px solid black"
    }
};

export const CardCollection = ({collection, whoseCollections, isMyCollections}: {
    collection: GameCollectionDTO,
    whoseCollections: string,
    isMyCollections: boolean
}) => {
    const deleteCollections = useDeleteCollection(whoseCollections)
    const handleDelete = () => {
        deleteCollections.mutate(collection.alias)
    }

    return (
        <div>
            <NavLink
                to={collection.alias}
                state={{id: collection.alias}}
            >
                <div style={styles.card}>
                    {collection.name}
                </div>
            </NavLink>

            {/*Определение коллекции можно её удалить или нет, и так же если в ней уже есть добавленные игры, то будет добавлено окно для подтверждения*/}
            {!notEditCollection.includes(collection.alias) && isMyCollections &&
                <div style={styles.deleteContainer}>
                    {collection.gameCount > 0 &&
                        <ConfirmationModal
                            runFunction={handleDelete}
                        />
                    }
                    {collection.gameCount == 0 &&
                        <Button
                            onClick={handleDelete}
                        >Удалить</Button>
                    }
                </div>
            }

        </div>)

}