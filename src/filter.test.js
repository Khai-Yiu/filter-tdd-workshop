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
    })
})  