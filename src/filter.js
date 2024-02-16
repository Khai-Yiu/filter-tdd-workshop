function filter(callbackFunction, arrayToFilter) {
    for(let item of arrayToFilter) {
        callbackFunction()
    }
}

export default filter