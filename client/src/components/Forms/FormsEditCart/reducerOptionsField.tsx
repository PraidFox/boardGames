import {Options, OptionsAutoComplete} from "../../../tools/interfaces/serverInterface";

export type OptionsFieldFormEdit = {
    nameGame:  OptionsAutoComplete<null>[]
    typeGame: Options<null>[]
    genreGame: Options<null>[]
    statusGame?: Options<null>[]
}

export type Action = | { type: "ADD_ALL_OPTIONS", payload:  OptionsFieldFormEdit }
export const reducerOptionsField = (state: OptionsFieldFormEdit, action: Action) => {
    switch (action.type) {
        case "ADD_ALL_OPTIONS":
            const newState : OptionsFieldFormEdit = {
                nameGame: action.payload.nameGame,
                typeGame: action.payload.typeGame,
                statusGame: action.payload.statusGame,
                genreGame: action.payload.genreGame
            }
            return {...newState}
    }
}