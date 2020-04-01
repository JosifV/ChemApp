import { ChangeEvent } from "react"

export type vetoAny = any

export interface Elements {
    [key: string]: number
}
export type emptyE = ChangeEvent<{}>

export interface ElementObjectClass {
    [key: string]: { type: string, name: string, x: number[], y: number[] }
}
export interface TrimLayout {
    showgrid: boolean
    zeroline: boolean
    showline: boolean
    ticks: vetoAny
    autosize: boolean
    fixedrange: boolean
}
export interface PostRespFE {
    inputArr: string[]
    outputArr: string[]
    _id: string
    elCount: {[key: string]: 0}
    __v: vetoAny
    __proto__: vetoAny
}