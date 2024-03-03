import {AutoComplete, Flex, Input, InputNumber, Select, Slider} from "antd";
import {useEffect, useReducer, useState} from "react";
import {OptionsFieldFormEdit, reducerOptionsField} from "../Forms/FormsAddBoardGame/reducerOptionsField";
import {GenreApi} from "../../tools/rest/GenreApi";
import {TypeApi} from "../../tools/rest/TypeApi";
import {convertOptions, convertOptionsAutoComplete, filterOptionLabel} from "../../tools/utils/utils";
import {nameBoardGame, optionsFieldsStatusCooperativeGame} from "../../tools/storages/fieldOptions";

export const FilterBoardGamesPanel = () => {
    const [optionsField, setOptionsField] = useState({} as OptionsFieldFormEdit)

    useEffect(() => {
        const p0 = GenreApi.getGenre()
        const p1 = TypeApi.getType()

        Promise.all([p0, p1]).then((res) => {
            setOptionsField({
                    name: convertOptionsAutoComplete(nameBoardGame),
                    genre: convertOptions(res[0].data),
                    type: convertOptions(res[1].data),
                    status: optionsFieldsStatusCooperativeGame
                }
            )
        })

    }, []);

    return (
        <div>
            <h4>Фильтр настольных игр и дополнений</h4>
            <div style={{display: "flex", gap: "10px"}}>
                <AutoComplete
                    allowClear
                    style={{width: "20%"}}
                    options={optionsField.name}
                    //onSelect={(value, option) => setValuesField({type: "CHANGE_NAME_GAME", payload: option})}
                    filterOption={filterOptionLabel}
                    placeholder="Наименование игры"
                />
                {/*<Select placeholder="Тип игры" options={optionsField.type} allowClear filterOption={filterOptionLabel}*/}
                {/*        style={{width: "20%"}}/>*/}
                <Select placeholder="Жанр игры" mode={"multiple"} allowClear options={optionsField.genre}
                        filterOption={filterOptionLabel} style={{width: "20%"}}/>

                <InputNumber defaultValue={2} min={1} addonBefore="От:" addonAfter="лет"
                             max={100}
                             style={{width: "100px"}}/>

            </div>
            {/*<label>Количество игроков</label>*/}
            {/*<Slider range defaultValue={[1, 20]} min={1} max={20} style={{width: "20%"}}/>*/}
        </div>
    )
}