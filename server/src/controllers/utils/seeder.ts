import { shufleArr } from "./shufleArr"

export const seeder = (): string[] => {
    let arrToReturn: string[] = []
    let arrOfEls: string[] = shufleArr(["H", "O", "C"])

    for (let n = 0; n < 15000; n++) {
        if (n % 2 === 0) arrToReturn.push(arrOfEls[0])
        else if (n % 3 === 0) arrToReturn.push(arrOfEls[1])
        else if (n % 5 === 0) arrToReturn.push(arrOfEls[2])
    }

    return arrToReturn
}
