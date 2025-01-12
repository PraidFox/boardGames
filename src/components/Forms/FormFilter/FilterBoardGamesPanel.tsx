import {Button, Input, InputNumber, Select, Slider} from "antd";
import {Dispatch, useEffect, useState} from "react";
import {OptionsFieldFormEdit} from "../FormsAddBoardGame/reducerFieldOptions";
import {GenreService} from "../../../tools/rest/services/Genre.service.ts";
import {TypeService} from "../../../tools/rest/services/Type.service.ts";
import {filterOptionLabel} from "../../../tools/utils/utils";

import {ActionFilter} from "./reducerFilterFieldValues";
import {FilterBoardGames} from "../../../tools/interfaces/fieldsForm.Interface.ts";
import {CloseCircleOutlined} from '@ant-design/icons';

export const FilterBoardGamesPanel = ({valueFilter, setFilterFieldValues}: {
    valueFilter: FilterBoardGames
    setFilterFieldValues: Dispatch<ActionFilter>
}) => {
    const [optionsField, setOptionsField] = useState({} as OptionsFieldFormEdit)

    useEffect(() => {
        const p0 = GenreService.getGenres()
        const p1 = TypeService.getTypes()

        // Promise.all([p0, p1]).then((res) => {
        //     setOptionsField({
        //             name: convertOptionsAutoComplete(nameBoardGame),
        //             genre: convertOptions(res[0].data),
        //             type: convertOptions(res[1].data),
        //             status: optionsFieldsStatusCooperativeGame
        //         }
        //     )
        // })

    }, []);


    return (
        <div style={{margin: "1% 0"}}>

            <div style={{display: "flex", gap: "10px", alignItems: "center"}}>

                <Input
                    placeholder="Наименование игры" style={{width: "20%"}}
                    onChange={(e) => setFilterFieldValues({type: "SET_NAME", payload: e.target.value})}
                    value={valueFilter.name}
                />

                <Select
                    placeholder="Тип игры"
                    mode={"multiple"}
                    allowClear
                    options={optionsField.type}
                    filterOption={filterOptionLabel}
                    style={{width: "20%"}}
                    value={valueFilter.type}
                    onChange={e => setFilterFieldValues({type: "SET_TYPE", payload: e})}
                />

                <Select
                    placeholder="Жанр игры"
                    mode={"multiple"}
                    allowClear
                    options={optionsField.genre}
                    filterOption={filterOptionLabel}
                    style={{width: "20%"}}
                    value={valueFilter.genre}
                    onChange={value => setFilterFieldValues({type: "SET_GENRE", payload: value})}
                />

                <InputNumber
                    defaultValue={2}
                    min={1}
                    addonBefore="От"
                    addonAfter="лет"
                    max={666}
                    onChange={value => setFilterFieldValues({type: "SET_AGE", payload: value})}
                    style={{width: "150px"}}
                />

                <div style={{width: "20%", textAlign: "center"}}>
                    <label>Количество игроков
                    </label>
                    <Slider
                        range
                        defaultValue={[1, 20]}
                        min={1}
                        max={20}
                        style={{width: "100%"}}
                        onChange={value => setFilterFieldValues({type: "SET_COUNT_PLAYERS", payload: value})}

                        value={[valueFilter.minPlayers ? valueFilter.minPlayers : 1, valueFilter.maxPlayers ? valueFilter.maxPlayers : 20]}
                    />
                    От {valueFilter.minPlayers ? valueFilter.minPlayers : 1} до {valueFilter.maxPlayers ? valueFilter.maxPlayers : 20}
                </div>

                <div>
                    {Object.keys(valueFilter).length !== 0 &&
                        <Button icon={<CloseCircleOutlined/>} danger style={{marginLeft: "10px"}}
                                onClick={() => setFilterFieldValues({type: "RESET_FILTER"})}/>}
                </div>
            </div>

        </div>
    )
}