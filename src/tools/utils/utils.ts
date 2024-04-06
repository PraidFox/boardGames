import {Options, OptionsAutoComplete, OptionsDTO} from "../interfaces/serverInterface";
import {AuthApi} from "../rest/AuthApi";


export const filterOptionLabel = (inputValue: string, option: Options<any> | undefined) => {
    if (option) {
        return option.label.toString().toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    } else {
        return inputValue.toString().toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
}

export const convertOptions = (options: OptionsDTO<null>[]): Options<null>[] => {
    return options.map(opt => {
        return {label: opt.name, value: opt.id.toString()}
    })
}

export const convertOptionsAutoComplete = (options: OptionsDTO<null>[]): OptionsAutoComplete<null>[] => {
    return options.map(opt => {
        return {label: opt.name, value: opt.name, id: opt.id}
    })
}


