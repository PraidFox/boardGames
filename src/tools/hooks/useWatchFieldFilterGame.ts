import {Form} from "antd";
import {NF_FilterBoardGames} from "../storages/FieldName.storage.ts";
import {FormInstance} from "antd/es/form";
import {FilterBoardGames} from "../interfaces/fieldsForm.Interface.ts";

/**Хук для получения значений полей с виджета фильтр игр*/
export const useWatchFieldFilterGame = (form: FormInstance<FilterBoardGames>) : {gameName?: string, typeIds?: number[], genreIds?: number[], playersAge?: number, minPlayersCount?: number, maxPlayersCount?: number} => {

    const gameName = Form.useWatch(NF_FilterBoardGames.NAME_BG, form)
    const typeIds = Form.useWatch(NF_FilterBoardGames.TYPE_BG, form)
    const genreIds = Form.useWatch(NF_FilterBoardGames.GENRE_BG, form)
    const playersAge = Form.useWatch(NF_FilterBoardGames.PLAYER_AGE, form)
    const countPlayersMinMax = Form.useWatch(NF_FilterBoardGames.COUNT_PLAYERS_MIN_MAX, form)



    return {
        gameName,
        typeIds,
        genreIds,
        playersAge: playersAge ? playersAge : undefined,
        minPlayersCount: countPlayersMinMax ? countPlayersMinMax[0] : countPlayersMinMax,
        maxPlayersCount: countPlayersMinMax ? countPlayersMinMax[1] : countPlayersMinMax
    }
}