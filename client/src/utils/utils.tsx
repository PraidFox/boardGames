import {Options, OptionsAutoComplete, OptionsDTO} from "./interface/serverInterface";


export const filterOptionLabel = (inputValue: string, option: Options<any> | undefined) => {
    if(option){
        return option.label.toString().toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    } else {
        return inputValue.toString().toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
}

export const convertOptions = (options: OptionsDTO<null>[]) : Options<null>[] => {
    return options.map(opt => {return {label: opt.label, value: opt.id.toString()}})
}

export const convertOptionsAutoComplete = (options: OptionsDTO<null>[]) : OptionsAutoComplete<null>[] => {
    return options.map(opt => {return {label: opt.label, value: opt.label, id: opt.id}})
}

