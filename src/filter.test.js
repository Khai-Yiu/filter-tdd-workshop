import filter from './filter'

describe('filter', () => {
    describe('Given a callback function and an array', () => {
        it('Invokes the callback function once per item in the array', () => {
            const arrayToFilter = [1, 2, 3]
            const numberOfItemsInArrayToFilter = arrayToFilter.length
            const callbackFunction = jest.fn()
            filter(callbackFunction, arrayToFilter)
            expect(callbackFunction).toHaveBeenCalledTimes(numberOfItemsInArrayToFilter)
        })
        it('Invokes the callback function passing it an item from the array as a parameter', () => {
            const arrayToFilter = [1, 2]
            const callbackFunction = jest.fn()
            filter(callbackFunction, arrayToFilter)
            expect(callbackFunction.mock.calls[0][0]).toBe(arrayToFilter[0])
            expect(callbackFunction.mock.calls[1][0]).toBe(arrayToFilter[1])
        })
        it('returns an array', () => {
            const arrayToFilter = [1, 2]
            const callbackFunction = jest.fn()
            const returnedArray = filter(callbackFunction, arrayToFilter)
            expect(returnedArray).toBeInstanceOf(Array)
        })
        it('returns a new array', () => {
            const arrayToFilter = [1, 2]
            const callbackFunction = jest.fn()
            const returnedArray = filter(callbackFunction, arrayToFilter)
            expect(returnedArray).not.toBe(arrayToFilter)
        })
        it('returns an array of items for which the callback function is truthy', () => {
            const arrayToFilter = [1, 2]
            const callbackFunction = jest.fn(() => true)
            const returnedArray = filter(callbackFunction, arrayToFilter)
            expect(returnedArray[0]).toBe(arrayToFilter[0])
            expect(returnedArray[1]).toBe(arrayToFilter[1])
        })
    })
})  