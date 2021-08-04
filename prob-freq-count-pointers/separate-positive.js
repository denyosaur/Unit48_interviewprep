// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0//left variable to hold index 0
    let right = arr.length - 1//right variable to hold index arr.length-1

    while (left < right) {
        if (arr[left] > 0 && arr[right] > 0) {
            left++
        } else if (arr[left] < 0 && arr[right] < 0) {
            right--
        } else if ((arr[left] * arr[right]) < 0) {
            let move = arr[left]
            arr[left] = arr[right]
            arr[right] = move
            left++
            right--
        }
    }
    //if numbers of both index are positive, add 1 to left
    //if numbers are both negative, subtract 1 from right
    //if multiplying numbers result in negative and left is negative, swap the numbers

    return arr//return arr
}

module.exports = { separatePositive }
