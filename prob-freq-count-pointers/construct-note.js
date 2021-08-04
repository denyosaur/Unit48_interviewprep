// add whatever parameters you deem necessary
function constructNote(msg, str) {
    let msgFreq = freqCounter(msg)//save msg character frequency to var
    let strFreq = freqCounter(str)//save str character frequency to var

    //for-in loop to loop over msg object - if character not found or value is wrong return false
    for (let key in msgFreq) {
        if (!(msgFreq[key] <= strFreq[key])) return false
    }

    return true//else return true
}

function freqCounter(str) {
    let counter = {}//create an empty counter object
    //iterate over string using for loop and create a key-value pair if it doesn't exist, or if it does, add +1
    for (let char of str) {
        counter[char] = counter[char] + 1 || 1
    }

    return counter //return the object
}

module.exports = { constructNote }