function filter(callbackFunction, arrayToFilter) {
    const filteredArray = []
    for(let item of arrayToFilter) {
        if(callbackFunction(item)) {
            filteredArray.push(item)
        }
    }

    return filteredArray
}

export default filter