import {Button, Select} from "antd";
import {useDeletedBoardGames, useFilterBoardGames} from "../../../../tools/hooks/queries/BoardGame.queries.ts";
import {useState} from "react";
import {OptionSelect} from "../../../../tools/interfaces/option.Interface.ts";

export const DeletedBoardGameField = () => {
    const [valueSelected, setValueSelected] = useState<OptionSelect>()
    const [valueInput, setValueInput] = useState<string>()
    
    const {data: allBoardGames} = useFilterBoardGames({
        gameName: valueInput,
        itemPerPage: 25,
    })


    const deletedBoardGame = useDeletedBoardGames()

    const handleDeleteGame = async () => {
        if (valueSelected?.value) {
            await deletedBoardGame.mutateAsync(valueSelected.value.toString())
            setValueInput('')
            setValueSelected(undefined)
        }
    }

    if(!allBoardGames) return <span>Не удалось загрузить</span>

    return <>
        <h3>Удаление настольной игры:</h3>
        <Select
            style={{width: '80%'}}
            showSearch
            filterOption={false}
            placeholder="Выбрать настолку для удаления"
            onChange={setValueSelected}
            onSearch={setValueInput}
            value={valueSelected}
            options={allBoardGames.boardGames.map(boardGame => {
                return {label: boardGame.name, value: boardGame.id.toString()}
            })}
        />
        <Button danger disabled={!valueSelected} onClick={handleDeleteGame}>Удалить</Button>
    </>
}