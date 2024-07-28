import {Button, Input, InputNumber, Select, Slider} from "antd";
import React, {Dispatch, useEffect, useState} from "react";
import {OptionsFieldFormEdit} from "../FormsAddBoardGame/reducerFieldOptions";
import {GenreApi} from "../../../tools/rest/GenreApi";
import {TypeApi} from "../../../tools/rest/TypeApi";
import {convertOptions, convertOptionsAutoComplete, filterOptionLabel} from "../../../tools/utils/utils";
import {nameBoardGame, optionsFieldsStatusCooperativeGame} from "../../../tools/storages/fieldOptions";
import {ActionFilter} from "./reducerFilterFieldValues";
import {FilterBoardGames} from "../../../tools/interfaces/formInterface";
import {CloseCircleOutlined} from '@ant-design/icons';

export const FilterBoardGamesPanel = ({valueFilter, setFilterFieldValues}: {
    valueFilter: FilterBoardGames
    setFilterFieldValues: Dispatch<ActionFilter>
}) => {
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
        <div style={{margin: "1% 0"}}>

            <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                {/*<AutoComplete*/}
                {/*    allowClear*/}
                {/*    style={{width: "20%"}}*/}
                {/*    options={optionsField.name}*/}
                {/*    onSelect={(value, option) => console.log(value)}*/}
                {/*    filterOption={filterOptionLabel}*/}
                {/*    placeholder="Наименование игры"*/}
                {/*/>*/}

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