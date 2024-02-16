function filter(callbackFunction, arrayToFilter) {
    for(let item of arrayToFilter) {
        callbackFunction(item)
    }
}

export default filter