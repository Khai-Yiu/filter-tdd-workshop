function filter(callbackFunction, arrayToFilter) {
    const filteredArray = []
    for(let item of arrayToFilter) {
        callbackFunction(item)
    }

    return filteredArray
}

export default filter