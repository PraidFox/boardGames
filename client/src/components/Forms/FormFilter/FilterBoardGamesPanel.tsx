import {Button, Input, InputNumber, Select, Slider} from "antd";
import React, {Dispatch, useEffect, useState} from "react";
import {OptionsFieldFormEdit} from "../FormsAddBoardGame/reducerFieldOptions";
import {GenreApi} from "../../../tools/rest/GenreApi";
import {TypeApi} from "../../../tools/rest/TypeApi";
import {convertOptions, convertOptionsAutoComplete, filterOptionLabel} from "../../../tools/utils/utils";
import {nameBoardGame, optionsFieldsStatusCooperativeGame} from "../../../tools/storages/fieldOptions";
import {ActionRFFV} from "./reducerFilterFieldValues";

export const FilterBoardGamesPanel = ({activeFilter, valueFieldAge, setFilterFieldValues}: {
    activeFilter: boolean,
    valueFieldAge: number | null | undefined
    setFilterFieldValues: Dispatch<ActionRFFV>
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
        <div>
            <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                <h4>Фильтр настольных игр и дополнений</h4>

                {activeFilter &&
                    <Button onClick={() => setFilterFieldValues({type: "RESET_FILTER"})}>Сбросить фильтр</Button>}

            </div>

            <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                {/*<AutoComplete*/}
                {/*    allowClear*/}
                {/*    style={{width: "20%"}}*/}
                {/*    options={optionsField.name}*/}
                {/*    onSelect={(value, option) => console.log(value)}*/}
                {/*    filterOption={filterOptionLabel}*/}
                {/*    placeholder="Наименование игры"*/}
                {/*/>*/}

                <Input placeholder="Наименование игры" style={{width: "20%"}}
                       onChange={(e) => setFilterFieldValues({type: "SET_NAME", payload: e.target.value})}/>

                {/*<Select placeholder="Тип игры" options={optionsField.type} allowClear filterOption={filterOptionLabel}*/}
                {/*        style={{width: "20%"}}/>*/}

                <Select placeholder="Жанр игры" mode={"multiple"} allowClear options={optionsField.genre}
                        filterOption={filterOptionLabel} style={{width: "30%"}}
                        onChange={value => setFilterFieldValues({type: "SET_GENRE", payload: value})}/>

                <InputNumber defaultValue={2} min={1} addonBefore="От" addonAfter="лет"
                             max={100}
                             onChange={value => setFilterFieldValues({type: "SET_AGE", payload: value})}
                             style={{width: "150px"}}/>

                {/*<div style={{width: "20%", textAlign: "center"}}>*/}
                {/*    <label>Количество игроков</label>*/}
                {/*    <Slider range defaultValue={[1, 20]} min={1} max={20}*/}
                {/*            style={{width: "100%"}}*/}
                {/*            onChange={value => setFilterFieldValues({type: "SET_COUNT_PLAYERS", payload: value})}*/}
                {/*            tooltip={{open: true, placement: "bottom"}}/>*/}
                {/*</div>*/}


            </div>

        </div>
    )
}