import {ReactNode} from "react";

export type OptionSelect<T = null> = {
    label: ReactNode
    value: string
    info?: T
}
