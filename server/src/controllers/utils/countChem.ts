import { ElementObjectNum } from "../../types"

export const countChem = (arrToCount: string[]): object => {
    let objToReturn: ElementObjectNum = {
        H2O2: 0,
        H2O: 0,
        H2CO3: 0,
        H2: 0,
        CH3COOH: 0,
        C2H6: 0,
        CO2: 0,
        CO: 0,
        O3: 0,
        O2: 0
    }

    for (const itr of arrToCount) objToReturn[itr]++

    return objToReturn
}