import {useState} from "react";
import {FormAddBoardGameInModeration} from "./FormAddBoardGameInModeration";

export const FormAddCardMyCollection = ({onClose, setNeedUpdate}: {
    onClose: () => void
    setNeedUpdate: () => void
}) => {
    const [addGameInModeration, setAddGameInModeration] = useState(false)

    return <>

        {<FormAddBoardGameInModeration onClose={onClose} setNeedUpdate={updateBoardGame}/>}
    </>
}