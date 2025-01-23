import {DefaultOptionType} from "rc-select/lib/Select";
import {OptionDTO} from "../../../tools/interfaces/DTO/boardGame.dto.ts";

export type OptionsFieldFormEdit = {
    name: string[]
    type: DefaultOptionType[]
    genre: OptionDTO[]
    status?: OptionDTO[]
}

export type Action = | { type: "ADD_ALL_OPTIONS", payload: OptionsFieldFormEdit }
export const reducerFieldOptions = (_state: OptionsFieldFormEdit, action: Action) => {
    switch (action.type) {
        case "ADD_ALL_OPTIONS":
            { const newState: OptionsFieldFormEdit = {
                name: action.payload.name,
                type: action.payload.type,
                status: action.payload.status,
                genre: action.payload.genre
            }
            return {...newState} }
    }
}