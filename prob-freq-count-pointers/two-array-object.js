// add whatever parameters you deem necessary
function twoArrayObject(keyArr, valArr) {
    let pairedObj = {} //pairedObj variable with empty object

    //loop over keyArr with index, add into pairedObj each key from keyArr along with index of valArr
    for (let i = 0; i < keyArr.length; i++) {
        pairedObj[keyArr[i]] = valArr[i] || null
    }

    return pairedObj//return pairedObj
}

module.exports = { twoArrayObject }