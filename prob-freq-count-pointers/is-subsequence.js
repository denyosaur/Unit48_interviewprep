// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let counter = 0//counter
    let endIndex = 0//index of end index
    let str1Arr = str1.split("")

    //for-of loop that goes over each character of str1
    for (let char of str2) {
        //if char equals str2 char add one to counter
        if (char === str1Arr[counter]) counter++

        //if index of counter === str.length return true
        if (counter === str1.length) return true
    }

    return false //return false
}
