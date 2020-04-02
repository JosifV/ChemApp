import { shufleArr } from "./shufleArr"

export const makeChem = (inputArr: string[]): string[] => {
    let arrToReturn: string[] = []
    let leftOverArr: string[] = []

    for (let index = 0; index < 2; index++) {
        let ia: string[] = []
        if (index === 0) ia = [...inputArr] //* in first run use input arr
        else ia = [...shufleArr(leftOverArr)] //* in next runs use leftover arr

        for (let n = 0; n < ia.length; n++) {
            if (ia[n] === "H" && ia[n + 1] === "H" && ia[n + 2] === "O" && ia[n + 3] === "O") arrToReturn.push('H2O2')
            else if (ia[n] === "H" && ia[n + 1] === "H" && ia[n + 2] === "O") arrToReturn.push('H2O')
            else if (ia[n] === "H" && ia[n + 1] === "H" && ia[n + 2] === "C" && ia[n + 3] === "O" && ia[n + 4] === "O" && ia[n + 5] === "O") arrToReturn.push('H2CO3')
            else if (ia[n] === "H" && ia[n + 1] === "H") arrToReturn.push('H2')
            else if (ia[n] === "C" && ia[n + 1] === "H" && ia[n + 2] === "H" && ia[n + 3] === "H" && ia[n + 4] === "C" && ia[n + 5] === "O" && ia[n + 6] === "O" && ia[n + 7] === "H") arrToReturn.push('CH3COOH')
            else if (ia[n] === "C" && ia[n + 1] === "H" && ia[n + 2] === "H" && ia[n + 3] === "H" && ia[n + 4] === "C" && ia[n + 5] === "O" && ia[n + 6] === "H") arrToReturn.push('CH3COH')
            else if (ia[n] === "C" && ia[n + 1] === "H" && ia[n + 2] === "H" && ia[n + 3] === "H" && ia[n + 4] === "C" && ia[n + 5] === "O" && ia[n + 6] === "O") arrToReturn.push('CH3COO')
            else if (ia[n] === "C" && ia[n + 1] === "C" && ia[n + 2] === "H" && ia[n + 3] === "H" && ia[n + 4] === "H" && ia[n + 5] === "H") arrToReturn.push('C2H4')
            else if (ia[n] === "C" && ia[n + 1] === "C" && ia[n + 2] === "H" && ia[n + 3] === "H" && ia[n + 4] === "H" && ia[n + 5] === "H" && ia[n + 6] === "H" && ia[n + 7] === "H") arrToReturn.push('C2H6')
            else if (ia[n] === "C" && ia[n + 1] === "C" && ia[n + 2] === "H" && ia[n + 3] === "H" && ia[n + 4] === "H" && ia[n + 5] === "H" && ia[n + 6] === "H" && ia[n + 7] === "O" && ia[n + 8] === "H") arrToReturn.push('C2H6')
            else if (ia[n] === "C" && ia[n + 1] === "O" && ia[n + 2] === "O") arrToReturn.push('CO2')
            else if (ia[n] === "C" && ia[n + 1] === "O") arrToReturn.push('CO')
            else if (ia[n] === "O" && ia[n + 1] === "O" && ia[n + 2] === "O") arrToReturn.push('O3')
            else if (ia[n] === "O" && ia[n + 1] === "O") arrToReturn.push('O2')
            else if (ia[n] === "O" && ia[n + 1] === "H") arrToReturn.push('OH')
            else leftOverArr.push(ia[n])
        }
    }

    return arrToReturn
}