
export const shufleArr = (inputArr: string[]): string[] => {
    var i,
        j,
        temp;
    for (i = inputArr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = inputArr[i];
        inputArr[i] = inputArr[j];
        inputArr[j] = temp;
    }
    return inputArr;  
}
