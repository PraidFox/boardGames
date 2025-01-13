import {OptionsAutoComplete} from "../../../tools/interfaces/option.Interface.ts";
import {DefaultOptionType} from "rc-select/lib/Select";

export type OptionsFieldFormEdit = {
    name: OptionsAutoComplete<null>[]
    type: DefaultOptionType[]
    genre: Options<null>[]
    status?: Options<null>[]
}

export type Action = | { type: "ADD_ALL_OPTIONS", payload: OptionsFieldFormEdit }
export const reducerFieldOptions = (state: OptionsFieldFormEdit, action: Action) => {
    switch (action.type) {
        case "ADD_ALL_OPTIONS":
            const newState: OptionsFieldFormEdit = {
                name: action.payload.name,
                type: action.payload.type,
                status: action.payload.status,
                genre: action.payload.genre
            }
            return {...newState}
    }
}