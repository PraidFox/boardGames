import {AutoComplete, Flex, Input, InputNumber, Select, Slider} from "antd";
import {useEffect, useReducer, useState} from "react";
import {OptionsFieldFormEdit, reducerFieldOptions} from "../FormsAddBoardGame/reducerFieldOptions";
import {GenreApi} from "../../../tools/rest/GenreApi";
import {TypeApi} from "../../../tools/rest/TypeApi";
import {convertOptions, convertOptionsAutoComplete, filterOptionLabel} from "../../../tools/utils/utils";
import {nameBoardGame, optionsFieldsStatusCooperativeGame} from "../../../tools/storages/fieldOptions";

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
            <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
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
                        filterOption={filterOptionLabel} style={{width: "30%"}}/>

                <InputNumber defaultValue={2} min={1} addonBefore="От" addonAfter="лет"
                             max={100}
                             style={{width: "150px"}}/>
                <div style={{width: "20%", textAlign: "center"}}>
                    <label>Количество игроков</label>
                    <Slider range defaultValue={[1, 20]} min={1} max={20}
                            style={{width: "100%"}}
                            tooltip={{open: true, placement: "bottom"}}/>
                </div>


            </div>

        </div>
    )
}