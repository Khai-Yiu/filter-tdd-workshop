function filter(callbackFunction, arrayToFilter) {
    for(let item of arrayToFilter) {
        callbackFunction(item)
    }

    return arrayToFilter
}

export default filter