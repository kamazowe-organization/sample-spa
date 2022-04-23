console.log('>>>>imported file<<<<<<<<');

// a few examples of export
export const ExportedConst = 'test const '

export const ExportedArrowFn = () => {
    console.log('ExportedArrowFn')
}
export const ExportedFn = function () {
    console.log('ExportedFn')
}
export const ExportedFnReturnsValue = function () {
    return 'ExportedFnReturnsValue'
}

// some examples of function mapping

const multiplyFn = (firstNumber: number, secondNumber: number): number => {
    return firstNumber * secondNumber;
}

const multiplyFnWithValidate = (firstNumber: any | number, secondNumber: any | number): number => {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        throw new Error('Not all arguments are numbers')
    }
    return multiplyFn(firstNumber, secondNumber)
}

const itemList: any[] = [2, 3, 45, 6, 2, undefined, null, '1', 'test', {}]

const numberList: number[] = itemList.filter(item => typeof item === 'number')
const numberGreaterThan2List: number[] = numberList.filter(item => item > 2)

const doubleNumberList = numberList.map(numberItem => multiplyFn(numberItem, 2))


