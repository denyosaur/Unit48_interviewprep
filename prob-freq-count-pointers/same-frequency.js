// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    let int1Freq = freqCounter(`${int1}`)//int1Freq - variable that holds freqCounter(int1) - convert int1 to str
    let int2Freq = freqCounter(`${int2}`)//int2Freq - variable that holds freqCounter(int2) - convert int2 to str

    //for-of loop over keys of int1Freq 
    for (let key in int1Freq) {
        //if key in int1Freq !== int2Freq return false
        if (int1Freq[key] !== int2Freq[key]) return false
    }

    return true
}

//takes in a string of numbers
function freqCounter(str) {
    let counter = {} //counter - variable that hold frequency of numbers in string

    //for-of loop over str that creates a key if key not in counter or adds 1 if present
    for (let num of str) {
        counter[num] = counter[num] + 1 || 1
    }

    return counter //return counter
}

module.exports = { sameFrequency }