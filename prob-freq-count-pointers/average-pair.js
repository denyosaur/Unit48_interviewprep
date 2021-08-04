// add whatever parameters you deem necessary
function averagePair(arr, target) {
    let start = 0 //counter for start of array
    let end = arr.length - 1//counter for end of array
    let sumTarget = target * 2//variable to contain target * 2 (the sum of pair)

    //while loop that ends when start does not equal end idx
    while (start < end) {
        //if array[start] + array[end] === pairSum return true
        let sum = arr[start] + arr[end]

        if (sum === sumTarget) {
            return true
        } else if (sum > sumTarget) {
            end--
        } else {
            start++
        }
        //else increase start by 1
    }
    //return false - put after while loops
    return false
}

module.exports = { averagePair }