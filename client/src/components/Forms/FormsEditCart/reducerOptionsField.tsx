import {Options, OptionsAutoComplete} from "../../../tools/interfaces/serverInterface";

export type OptionsFieldFormEdit = {
    name: OptionsAutoComplete<null>[]
    type: Options<null>[]
    genre: Options<null>[]
    status?: Options<null>[]
}

export type Action = | { type: "ADD_ALL_OPTIONS", payload: OptionsFieldFormEdit }
export const reducerOptionsField = (state: OptionsFieldFormEdit, action: Action) => {
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