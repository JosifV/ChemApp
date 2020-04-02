import { ElementObjectNum } from "../../types"

export const countChem = (arrToCount: string[]): object => {
    let objToReturn: ElementObjectNum = {
        H2O2: 0,
        H2O: 0,
        H2CO3: 0,
        H2: 0,
        CH3COOH: 0,
        CH3COO: 0,
        C2H6: 0,
        CO2: 0,
        CO: 0,
        O3: 0,
        O2: 0,
        C2H5OH: 0,
        C2H4: 0,
        CH3OH: 0,
        CH3COH: 0,
        OH: 0
    }

    for (const itr of arrToCount) objToReturn[itr]++

    return objToReturn
}